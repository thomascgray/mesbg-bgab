import React from "react";
import {
  eHeroLevel,
  iHeroModelInArmy,
  iModel,
  iModelInArmy,
} from "../data/models";
import {
  calculateModelCountForWarband,
  calculatePointsForWarband,
  getMaxUnitsForHero,
  hasPickableOptions,
} from "../utils";
import classnames from "classnames";
import { ProfileRenderer } from "./ProfileRenderer";
import { WargearOptions } from "./WargearOptions";
import { WarriorButtons } from "./WarriorButtons";
import { AddWarriorsToWarband } from "./AddWarriorsToWarband";
import * as State from "../state";
import { CloseCircle, Close } from "../icons";
export interface iHeroBuilderProps {
  hero: iHeroModelInArmy;
  warriorsInRoster: iModel[];
}
export const HeroBuilder = (props: iHeroBuilderProps) => {
  const { hero, warriorsInRoster } = props;

  let allowedWarriorsInWarband = [...warriorsInRoster];

  if (hero.mayField !== undefined && hero.mayField.length >= 1) {
    // if theres any in the hero may field that are already in the allowed
    // warriors, replace them with the ones from the may field

    const replacedUnitKeys: string[] = [];
    hero.mayField.forEach((model) => {
      const indexOfMayfieldInsideRoster = allowedWarriorsInWarband.findIndex(
        (w) => w.key === model.key
      );

      if (indexOfMayfieldInsideRoster > -1) {
        // overwrite it in the roster
        allowedWarriorsInWarband[indexOfMayfieldInsideRoster] = {
          ...model,
        };
        replacedUnitKeys.push(model.key);
      }
    });

    allowedWarriorsInWarband = [
      ...allowedWarriorsInWarband,
      ...hero.mayField.filter((w) => !replacedUnitKeys.includes(w.key)),
    ];
  }

  const unitsInWarband = calculateModelCountForWarband(hero, false);
  const maxUnitsInWarband = getMaxUnitsForHero(hero);
  return (
    <div className="relative bg-stone-100 p-4">
      <span className="absolute top-2 right-12 text-sm font-bold">
        {calculatePointsForWarband(hero)}pts
      </span>

      <span className="absolute top-2 right-2">
        <button
          onClick={() => {
            State.deleteHeroFromArmy(hero);
          }}
          className="block h-6 w-6 rounded-full bg-red-200 p-1 text-sm hover:scale-110 hover:bg-red-300 active:scale-95"
        >
          <Close className="h-4 w-4" />
        </button>
      </span>

      <ProfileRenderer model={hero} />
      {hasPickableOptions(hero) && (
        <details className="bg-zinc-200">
          <summary className="cursor-pointer">
            Wargear, Options & Upgrades
          </summary>
          <WargearOptions model={hero} />
        </details>
      )}

      {maxUnitsInWarband > 0 && (
        <details className="bg-zinc-200">
          <summary
            className={classnames("cursor-pointer", {
              "font-bold text-red-500": unitsInWarband > maxUnitsInWarband,
            })}
          >
            Warband | {unitsInWarband} of {maxUnitsInWarband}
          </summary>
          <>
            {hero.warband.length <= 0 && (
              <span className="italic text-stone-400">No warband</span>
            )}

            {/* if we've got warriors in the warband, render them out */}
            {hero.warband.length >= 1 && (
              <div className="mb-3 space-y-3">
                {hero.warband.map((warrior) => {
                  return (
                    <div
                      key={hero.id + warrior.id}
                      className="bg-zinc-300 p-1 text-sm"
                    >
                      <div className="flex flex-row items-center ">
                        {/* the ProfileRenderer can render out 1 to many profiles - each of which might have pickable options */}
                        <ProfileRenderer model={warrior} hero={hero} />
                        <WarriorButtons model={warrior} hero={hero} />
                      </div>
                      {/* these pickable options are for the warrior overall */}
                      {hasPickableOptions(warrior) && (
                        <details>
                          <summary className="cursor-pointer">Options</summary>
                          <WargearOptions model={warrior} hero={hero} />
                        </details>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* the widget that allows us to add new warriors to the warband */}
            <div className="mt-2 border border-x-0 border-b-0 border-stone-400 py-2">
              <AddWarriorsToWarband
                choices={
                  // Siege Engine bullshit
                  // basically, siege engines can ONLY add the specific stuff they've been set to field
                  hero.heroLevel === eHeroLevel.Siege
                    ? [...(hero.mayField || [])]
                    : allowedWarriorsInWarband
                }
                hero={hero}
              />
            </div>
          </>
        </details>
      )}
    </div>
  );
};
