import React from "react";
import { armies, ArmyKey } from "./data/armies";
import classnames from "classnames";

import { eHeroLevel, iHeroModelInArmy, iModel } from "./data/models";
import * as _ from "lodash";
import { HeroBuilder } from "./components/HeroBuilder";

import { useSnapshot } from "valtio";
import * as State from "./state";

import "./index.css";
import { AddHeroToArmy } from "./components/AddHeroToArmyButton";
import {
  calculateBowCountForHeroAndWarband,
  calculateModelCountForWarband,
  calculatePointsForWarband,
  groupHeroes,
} from "./utils";

import { CloseCircle } from "./icons";

function App() {
  const stateView = useSnapshot(State.state);

  const armyForceAllowedModels: iModel[] = _.flatten(
    stateView.armyForces.map((ak) => {
      return armies[ak].mayField;
    })
  );

  const heroesInArmy = [...stateView.yourArmyHeroes] as iHeroModelInArmy[];
  const allowedHeroes = [
    // the heroes are everything from the army that HAS a hero level
    ...armyForceAllowedModels.filter((m: iModel) => m.heroLevel !== undefined),
    // AND anything from selected heroes that comes with an armyMayField
    ...heroesInArmy.map((h) => h.armyMayField || []).flat(),
  ];

  const allowedWarriors = [
    // heroes can field other units from the army that AREN'T heroes...
    ...armyForceAllowedModels.filter((m) => m.heroLevel === undefined),
    // ...and they can field other heroes from the army that ARE independent
    ...armyForceAllowedModels.filter(
      (m) => m.heroLevel === eHeroLevel.Independent
    ),
  ];

  const groupedHeroes = groupHeroes(allowedHeroes);

  const totalModelsInArmy = stateView.yourArmyHeroes.reduce((pv, cv) => {
    return pv + calculateModelCountForWarband(cv as iHeroModelInArmy, true);
  }, 0);

  const totalPointsInArmy = stateView.yourArmyHeroes.reduce((pv, cv) => {
    return pv + calculatePointsForWarband(cv as iHeroModelInArmy);
  }, 0);

  const totalBowCount = stateView.yourArmyHeroes.reduce((pv, cv) => {
    return pv + calculateBowCountForHeroAndWarband(cv as iHeroModelInArmy);
  }, 0);
  return (
    <div className="container mx-auto text-sm">
      <div className="mt-4 flex flex-row space-x-4">
        <label>
          <span className="block text-sm">Roster Name</span>
          <input
            className="border border-solid border-stone-300 px-4 py-2"
            placeholder="My Army"
            type="input"
          />
        </label>
        <label className="w-32">
          <span className="block text-sm">Points</span>
          <input
            className="w-full border border-solid border-stone-300 px-4 py-2"
            placeholder="0"
            type="number"
          />
        </label>

        <label>
          <span className="block text-sm">Add Faction to Roster</span>
          <div className="flex flex-row items-center space-x-4">
            <select
              value={stateView.selectedAddForceArmyKey}
              className="border border-solid border-stone-300 px-4 py-2"
              onChange={(e) => {
                State.state.selectedAddForceArmyKey = e.currentTarget
                  .value as ArmyKey;
              }}
            >
              {Object.keys(armies).map((ak) => {
                return (
                  <option key={ak} value={ak}>
                    {armies[ak as ArmyKey].name}
                  </option>
                );
              })}
            </select>
            <button
              disabled={stateView.armyForces.includes(
                stateView.selectedAddForceArmyKey
              )}
              className="bg-stone-200 px-4 py-2 text-center disabled:cursor-not-allowed disabled:text-stone-500"
              onClick={() => {
                State.state.armyForces = [
                  ...stateView.armyForces,
                  stateView.selectedAddForceArmyKey,
                ];
              }}
            >
              Add "{armies[stateView.selectedAddForceArmyKey].name}" To Roster
            </button>
          </div>
        </label>
      </div>

      <hr className="my-4" />

      <p className="text-sm">Factions in Roster</p>

      {stateView.armyForces.length <= 0 && (
        <p className="italic text-stone-400">No factions on this roster</p>
      )}

      {/* the factions that are in the roster atm */}
      <div className="flex flex-row space-x-4">
        {stateView.armyForces.length >= 1 &&
          stateView.armyForces.map((af) => (
            <button
              className="hover:shad block bg-stone-200 px-4 py-2 text-sm hover:scale-105 hover:bg-stone-300 active:scale-95"
              key={af}
              onClick={() => {
                State.state.armyForces = stateView.armyForces.filter(
                  (a) => a !== af
                );
              }}
            >
              <span className="flex flex-row items-center space-x-4">
                <span>{af}</span> <CloseCircle />
              </span>
            </button>
          ))}
      </div>

      <hr className="my-4" />

      <div className="flex flex-row">
        <div className="w-1/3 space-y-4">
          {allowedHeroes.length >= 1 &&
            groupedHeroes.map((group) => {
              return (
                <div key={group.name}>
                  {["Minor", "Independent"].includes(group.name) && (
                    <span>{group.name} Heroes</span>
                  )}
                  {!(
                    group.name === "Minor" || group.name === "Independent"
                  ) && <span>Heroes of {group.name}</span>}
                  <div className="space-y-2">
                    {group.heroes &&
                      group.heroes.map((hero) => {
                        return <AddHeroToArmy key={hero.key} hero={hero} />;
                      })}
                  </div>
                  {group.heroes.length <= 0 && (
                    <p className="italic text-stone-500">
                      No heroes of this tier in this roster
                    </p>
                  )}
                </div>
              );
            })}
        </div>

        <div className="w-2/3 space-y-2 pl-4">
          {stateView.yourArmyHeroes.length >= 1 && (
            <React.Fragment>
              <table className="table-fixed">
                <tbody>
                  <tr className="even:bg-stone-100">
                    <td className="px-2 py-1">Total Army Model Count</td>
                    <td className="px-2 py-1">{totalModelsInArmy}</td>
                  </tr>
                  <tr className="even:bg-stone-100">
                    <td className="px-2 py-1">50% of Army Model Count</td>
                    <td className="px-2 py-1">{totalModelsInArmy / 2}</td>
                  </tr>
                  <tr className="even:bg-stone-100">
                    <td className="px-2 py-1">Total Army Point Cost</td>
                    <td className="px-2 py-1">{totalPointsInArmy}pts</td>
                  </tr>
                  <tr className="even:bg-stone-100">
                    <td className="px-2 py-1">Bow Limit</td>
                    <td
                      className={classnames("px-2 py-1", {
                        "font-bold text-red-500":
                          totalBowCount > Math.ceil(totalModelsInArmy / 3),
                      })}
                    >
                      {totalBowCount} of {Math.ceil(totalModelsInArmy / 3)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </React.Fragment>
          )}
          {_.sortBy(stateView.yourArmyHeroes, ["heroLevel"]).map((hero) => {
            return (
              <HeroBuilder
                key={hero.id}
                hero={hero as iHeroModelInArmy}
                warriorsInRoster={allowedWarriors}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
