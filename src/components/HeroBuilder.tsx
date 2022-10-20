import React from "react";
import { iHeroModelInArmy, iModel, iModelInArmy } from "../data/models";
import { iWargear } from "../data/wargear";
import {
  calculatePointsForWarband,
  getActiveWargear,
  isWargearChoiceSelected,
  isWargearOptionEquipped,
} from "../utils";
import * as State from "../state";

import { useSnapshot } from "valtio";
import { ProfileRenderer } from "./ProfileRenderer";
import { ActiveWargear } from "./ActiveWargear";
import { WargearOptions } from "./WargearOptions";
import { WarriorButtons } from "./WarriorButtons";

export interface iHeroBuilderProps {
  hero: iHeroModelInArmy;
  warriorsInRoster: iModel[];
}
export const HeroBuilder = (props: iHeroBuilderProps) => {
  const stateView = useSnapshot(State.state);

  const { hero, warriorsInRoster } = props;

  const allowedWarriorsInWarband = [
    ...warriorsInRoster,
    ...(hero.mayField ? hero.mayField : []),
  ];

  return (
    <div className="relative bg-stone-100 p-4">
      <span className="absolute top-2 right-2 bg-stone-200 text-sm hover:scale-105 hover:bg-stone-300 active:scale-90">
        {calculatePointsForWarband(hero)}pts
      </span>

      <ProfileRenderer model={hero} />
      {(hero.wargearOptions.length >= 1 ||
        (hero.wargearFromChoices && hero.wargearFromChoices.length >= 1)) && (
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
                  <details>
                    <summary className="cursor-pointer">Options</summary>
                    <WargearOptions model={warrior} hero={hero} />
                  </details>
                </div>
              );
            })}
          </div>
        )}
        {allowedWarriorsInWarband.map((m) => {
          return (
            <button
              key={`${hero.id}-${m.name}`}
              className="block bg-stone-200 px-4 py-2 hover:bg-stone-300"
              onClick={() => {
                State.addWarbandWarriorToHero(m, hero.id);
              }}
            >
              <p>{m.name}</p>
            </button>
          );
        })}
      </fieldset>
    </div>
  );
};
