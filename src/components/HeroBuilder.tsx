import React from "react";
import { iHeroModelInArmy, iModel, iModelInArmy } from "../data/models";
import { iWargear } from "../data/wargear";
import {
  getActiveWargear,
  isWargearChoiceSelected,
  isWargearOptionEquipped,
} from "../utils";

export interface iHeroBuilderProps {
  hero: iHeroModelInArmy;
  warriorsInRoster: iModel[];
  toggleWargearToHero: (
    isOn: boolean,
    wargear: iWargear,
    hero: iHeroModelInArmy
  ) => void;
  toggleWargearToWarbandWarrior: (
    isOn: boolean,
    wargear: iWargear,
    warbandWarrior: iModelInArmy,
    hero: iHeroModelInArmy
  ) => void;
  addWarbandWarriorToHero: (warriorModel: iModel, heroId: string) => void;
  increaseWarbandWarriorQuantity: (
    warrior: iModelInArmy,
    hero: iHeroModelInArmy
  ) => void;
  decreaseWarbandWarriorQuantity: (
    warrior: iModelInArmy,
    hero: iHeroModelInArmy
  ) => void;
  setHeroChoiceWargear: (
    choice: iWargear,
    wargearChoice: iWargear,
    hero: iHeroModelInArmy
  ) => void;
}
export const HeroBuilder = (props: iHeroBuilderProps) => {
  const {
    hero,
    warriorsInRoster,
    toggleWargearToHero,
    toggleWargearToWarbandWarrior,
    addWarbandWarriorToHero,
    increaseWarbandWarriorQuantity,
    decreaseWarbandWarriorQuantity,
    setHeroChoiceWargear,
  } = props;

  console.log("hero", JSON.stringify(hero, null, 2));

  return (
    <div className="relative rounded-xl border-2 border-dashed border-stone-300 p-4">
      <button className="absolute top-2 right-2 bg-stone-200 text-sm hover:scale-105 hover:bg-stone-300 active:scale-90">
        Delete
      </button>
      <p className="font-bold">{hero.name}</p>
      <p>
        {getActiveWargear(hero)
          .map((x) => x.name)
          .join(", ")}
      </p>
      <fieldset className="border border-solid border-stone-300 px-3 pt-1 pb-2">
        <div>
          <legend className="text-sm italic">Options</legend>
          {/* here we need to render out all the choices */}
          {hero.wargear
            .filter((w) => w.choices && w.choices.length >= 1)
            .map((wc) => {
              return (
                <div
                  key={wc.id}
                  className="flex flex-row items-center space-x-2"
                >
                  {wc.choices?.map((choice) => {
                    return (
                      <label
                        key={choice.id}
                        className="flex-inline cursor-pointer flex-row items-center space-x-2"
                      >
                        <input
                          type="radio"
                          name={hero.id + wc.id}
                          checked={isWargearChoiceSelected(choice, wc, hero)}
                          onChange={(e) => {
                            setHeroChoiceWargear(choice, wc, hero);
                          }}
                        />
                        <span>{choice.name}</span>
                      </label>
                    );
                  })}
                </div>
              );
            })}
          {hero.wargearOptions.map((wgo) => {
            return (
              <label
                key={wgo.id}
                className="flex cursor-pointer flex-row items-center space-x-2"
              >
                <input
                  type="checkbox"
                  checked={isWargearOptionEquipped(wgo, hero.equippedWargear)}
                  onChange={(e) => {
                    toggleWargearToHero(e.currentTarget.checked, wgo, hero);
                  }}
                />
                <span>
                  {wgo.name} - {wgo.cost}pts
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="border border-solid border-stone-300 p-4">
        <legend>Warband</legend>
        {hero.warband.length <= 0 && (
          <span className="italic text-stone-400">No warband</span>
        )}
        {hero.warband.length >= 1 && (
          <div className="space-y-2">
            {hero.warband.map((w) => {
              return (
                <div key={w.id} className="warband-warrior bg-stone-100 p-2">
                  <p>
                    {w.name} * {w.quantity}
                  </p>
                  <p>
                    {getActiveWargear(w)
                      .map((x) => x.name)
                      .join(", ")}
                  </p>
                  <fieldset className="border border-solid border-stone-300 p-2">
                    <legend className="text-sm italic">Wargear Options</legend>
                    {w.wargearOptions.map((wgo) => {
                      return (
                        <label
                          key={wgo.id}
                          className="inline-flex flex-row items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            checked={isWargearOptionEquipped(
                              wgo,
                              w.equippedWargear
                            )}
                            onChange={(e) => {
                              toggleWargearToWarbandWarrior(
                                e.currentTarget.checked,
                                wgo,
                                w,
                                hero
                              );
                            }}
                          />
                          <span>
                            {wgo.name} - {wgo.cost}pts
                          </span>
                        </label>
                      );
                    })}
                  </fieldset>

                  <div className="flex flex-row items-center space-x-2">
                    <button
                      onClick={() => {
                        increaseWarbandWarriorQuantity(w, hero);
                      }}
                      className="block border border-solid bg-stone-300 py-1 px-2 text-center text-sm hover:scale-105 active:scale-90"
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        decreaseWarbandWarriorQuantity(w, hero);
                      }}
                      className="block border border-solid bg-stone-300 py-1 px-2 text-center text-sm hover:scale-105 active:scale-90"
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {warriorsInRoster.map((m) => {
          return (
            <button
              key={`${hero.id}-${m.name}`}
              className="block bg-stone-200 px-4 py-2 hover:bg-stone-300"
              onClick={() => {
                addWarbandWarriorToHero(m, hero.id);
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
