import React, { useState } from "react";
import { armies, ArmyKey } from "./data/armies";
import { iHeroModelInArmy, iModel, iModelInArmy, models } from "./data/models";
import * as _ from "lodash";
import { nanoid } from "nanoid";
import { produce } from "immer";
import { iWargear } from "./data/wargear";
import { HeroBuilder } from "./components/HeroBuilder";
import { isWargearOptionEquipped } from "./utils";

import "./index.css";

function App() {
  const [selectedAddForceArmyKey, setSelectedAddForceArmyKey] =
    useState<ArmyKey>("TheDeadOfDunharrow");

  const [armyForces, setArmyForces] = useState<ArmyKey[]>([]);

  const armyForceAllowedModels: iModel[] = _.flatten(
    armyForces.map((ak) => {
      return armies[ak].mayField;
    })
  );

  const allowedHeroes = armyForceAllowedModels.filter(
    (m: iModel) => m.heroLevel !== undefined
  );

  const allowedWarriors = armyForceAllowedModels.filter(
    (m: iModel) => m.heroLevel === undefined
  );

  const [yourArmyHeroes, setYourArmyHeroes] = useState<iHeroModelInArmy[]>([]);

  const addWarbandWarriorToHero = (warriorModel: iModel, heroId: string) => {
    setYourArmyHeroes(
      produce(yourArmyHeroes, (draft) => {
        const heroIndex = draft.findIndex((h) => h.id === heroId);

        draft[heroIndex].warband.push({
          ...warriorModel,
          equippedWargear: [],
          id: nanoid(),
          quantity: 1,
        });

        return draft;
      })
    );
  };

  const toggleWargearToHero = (
    isOn: boolean,
    wargear: iWargear,
    hero: iHeroModelInArmy
  ) => {
    if (isOn) {
      // adding it
      setYourArmyHeroes(
        produce(yourArmyHeroes, (draft) => {
          const heroIndex = draft.findIndex((h) => h.id === hero.id);

          draft[heroIndex].equippedWargear.push({
            ...wargear,
          });

          return draft;
        })
      );
    } else {
      // removing it
      setYourArmyHeroes(
        produce(yourArmyHeroes, (draft) => {
          const heroIndex = draft.findIndex((h) => h.id === hero.id);

          draft[heroIndex].equippedWargear = draft[
            heroIndex
          ].equippedWargear.filter((w) => w.name !== wargear.name);

          return draft;
        })
      );
    }
  };

  const toggleWargearToWarbandWarrior = (
    isOn: boolean,
    wargear: iWargear,
    warbandWarrior: iModelInArmy,
    hero: iHeroModelInArmy
  ) => {
    if (isOn) {
      setYourArmyHeroes(
        produce(yourArmyHeroes, (draft) => {
          const heroIndex = draft.findIndex((h) => h.id === hero.id);
          const warbandWarriorIndex = draft[heroIndex].warband.findIndex(
            (x) => x.id === warbandWarrior.id
          );

          draft[heroIndex].warband[warbandWarriorIndex].equippedWargear.push({
            ...wargear,
          });

          return draft;
        })
      );
    } else {
      setYourArmyHeroes(
        produce(yourArmyHeroes, (draft) => {
          const heroIndex = draft.findIndex((h) => h.id === hero.id);
          const warbandWarriorIndex = draft[heroIndex].warband.findIndex(
            (x) => x.id === warbandWarrior.id
          );

          draft[heroIndex].warband[warbandWarriorIndex].equippedWargear = draft[
            heroIndex
          ].warband[warbandWarriorIndex].equippedWargear.filter(
            (w) => w.name !== wargear.name
          );

          return draft;
        })
      );
    }
  };

  const increaseWarbandWarriorQuantity = (
    warrior: iModelInArmy,
    hero: iHeroModelInArmy
  ) => {
    setYourArmyHeroes(
      produce(yourArmyHeroes, (draft) => {
        const heroIndex = draft.findIndex((h) => h.id === hero.id);
        const warbandWarriorIndex = draft[heroIndex].warband.findIndex(
          (x) => x.id === warrior.id
        );

        draft[heroIndex].warband[warbandWarriorIndex].quantity += 1;

        return draft;
      })
    );
  };

  const decreaseWarbandWarriorQuantity = (
    warrior: iModelInArmy,
    hero: iHeroModelInArmy
  ) => {
    setYourArmyHeroes(
      produce(yourArmyHeroes, (draft) => {
        const heroIndex = draft.findIndex((h) => h.id === hero.id);
        const warbandWarriorIndex = draft[heroIndex].warband.findIndex(
          (x) => x.id === warrior.id
        );

        draft[heroIndex].warband[warbandWarriorIndex].quantity -= 1;

        return draft;
      })
    );
  };

  return (
    <div className="container mx-auto">
      <div>
        <div className="flex flex-row space-x-4">
          <label>
            <span className="block text-sm">Roster Name</span>
            <input
              className="border border-solid border-stone-300 px-4 py-2"
              placeholder="My Army"
              type="input"
            />
          </label>
          <label>
            <span className="block text-sm">Max Points</span>
            <input
              className="border border-solid border-stone-300 px-4 py-2"
              placeholder="0"
              type="number"
            />
          </label>
        </div>
      </div>

      <div>
        <p className="text-sm">Forces in Roster</p>

        {armyForces.length <= 0 && (
          <p className="my-2 italic text-stone-400">No forces on this roster</p>
        )}

        <React.Fragment>
          <div>
            {armyForces.map((ak) => {
              return <p>{ak}</p>;
            })}
          </div>

          <div className="flex flex-row space-x-4">
            <div className="w-1/2">
              <p className="font-bold">Available Heroes</p>

              <div className="flex flex-col space-y-2">
                {allowedHeroes.map((hero) => {
                  return (
                    <button
                      className="block bg-stone-200 px-4 py-2 hover:bg-stone-300"
                      onClick={() => {
                        setYourArmyHeroes([
                          ...yourArmyHeroes,
                          {
                            ...hero,
                            id: nanoid(),
                            warband: [],
                            equippedWargear: [],
                            quantity: 1,
                          },
                        ]);
                      }}
                    >
                      <p>{hero.name}</p>
                    </button>
                  );
                })}
              </div>

              {/* add forces to roster */}
              <div className="mt-4 flex flex-row items-center space-x-4">
                <select
                  value={selectedAddForceArmyKey}
                  className="border border-solid border-stone-300 px-4 py-2"
                  onChange={(e) => {
                    setSelectedAddForceArmyKey(
                      e.currentTarget.value as ArmyKey
                    );
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
                  className="bg-stone-200 px-4 py-2 text-center"
                  onClick={() => {
                    setArmyForces([...armyForces, selectedAddForceArmyKey]);
                  }}
                >
                  Add "{armies[selectedAddForceArmyKey].name}" To Roster
                </button>
              </div>
            </div>

            <div className="w-1/2">
              <strong>Your Army</strong>
              <div className="space-y-4">
                {yourArmyHeroes.map((hero) => {
                  return (
                    <HeroBuilder
                      key={hero.id}
                      addWarbandWarriorToHero={addWarbandWarriorToHero}
                      hero={hero}
                      toggleWargearToHero={toggleWargearToHero}
                      toggleWargearToWarbandWarrior={
                        toggleWargearToWarbandWarrior
                      }
                      warriorsInRoster={allowedWarriors}
                      increaseWarbandWarriorQuantity={
                        increaseWarbandWarriorQuantity
                      }
                      decreaseWarbandWarriorQuantity={
                        decreaseWarbandWarriorQuantity
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <p className="font-bold">Final Army Output</p>
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
