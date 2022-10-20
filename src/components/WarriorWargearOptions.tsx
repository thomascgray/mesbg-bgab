import { iHeroModelInArmy } from "../data/models";
import { isWargearChoiceSelected, isWargearOptionEquipped } from "../utils";
import * as State from "../state";

export interface
export const WarriorWargearOptions = ({ hero }: { hero: iHeroModelInArmy }) => {
  return (
    <fieldset className="border border-solid border-stone-300 px-3 pt-1 pb-2">
      <legend className="text-sm italic">Options</legend>
      {/* here we need to render out all the choices */}
      {hero.wargear
        .filter((w) => w.choices && w.choices.length >= 1)
        .map((wc) => {
          return (
            <div key={wc.key} className="flex flex-row items-center space-x-2">
              {wc.choices?.map((choice) => {
                return (
                  <label
                    key={choice.key}
                    className="flex-inline cursor-pointer flex-row items-center space-x-2"
                  >
                    <input
                      type="radio"
                      name={hero.id + wc.key}
                      checked={isWargearChoiceSelected(choice, wc, hero)}
                      onChange={(e) => {
                        State.setHeroChoiceWargear(choice, wc, hero);
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
            key={wgo.key}
            className="flex cursor-pointer flex-row items-center space-x-2"
          >
            <input
              type="checkbox"
              checked={isWargearOptionEquipped(wgo, hero.equippedWargear)}
              onChange={(e) => {
                State.toggleWargearToHero(e.currentTarget.checked, wgo, hero);
              }}
            />
            <span>
              {wgo.name} - {wgo.cost}pts
            </span>
          </label>
        );
      })}
    </fieldset>
  );
};
