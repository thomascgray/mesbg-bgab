import React from "react";
import { iHeroModelInArmy, iModel, iModelInArmy } from "../data/models";
import { calculatePointsForWarband, hasPickableOptions } from "../utils";

import { ProfileRenderer } from "./ProfileRenderer";
import { WargearOptions } from "./WargearOptions";
import { WarriorButtons } from "./WarriorButtons";
import { AddWarriorsToWarband } from "./AddWarriorsToWarband";

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

  return (
    <div className="relative bg-stone-100 p-4">
      <span className="absolute top-2 right-2 bg-stone-200 text-sm hover:scale-105 hover:bg-stone-300 active:scale-90">
        {calculatePointsForWarband(hero)}pts
      </span>

      <ProfileRenderer model={hero} />
      {hasPickableOptions(hero) && (
        <details>
          <summary className="cursor-pointer">Options</summary>
          <WargearOptions model={hero} />
        </details>
      )}

      <fieldset className="border border-solid border-stone-300 px-3 pt-1 pb-2">
        <legend className="text-sm italic">Warband</legend>
        {hero.warband.length <= 0 && (
          <span className="italic text-stone-400">No warband</span>
        )}
        {hero.warband.length >= 1 && (
          <div className="mb-3 space-y-3">
            {hero.warband.map((warrior) => {
              return (
                <div className="bg-stone-100 p-1 text-sm">
                  <div className="flex flex-row items-center">
                    <ProfileRenderer model={warrior} />
                    <WarriorButtons model={warrior} hero={hero} />
                  </div>
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
        <div className="mt-2 border border-x-0 border-b-0 border-stone-400 py-2">
          <AddWarriorsToWarband
            choices={allowedWarriorsInWarband}
            hero={hero}
          />
        </div>
      </fieldset>
    </div>
  );
};
