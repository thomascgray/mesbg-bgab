import { iHeroModelInArmy, iModelInArmy } from "../data/models";
import {
  isWargearChoiceSelected,
  isWargearOptionEquipped,
  isWargearUpgradeSelected,
} from "../utils";
import * as State from "../state";
import { PlusCircle } from "../icons";

export interface iWargearOptionsProps {
  model: iHeroModelInArmy | iModelInArmy;
  hero?: iHeroModelInArmy;
}

// TODO
// basically, the model here might be a PROFILE, not actually a model. and in that case, we need to account for that
// im thinking we need to pass a boolean of "the model is actually a profile" and then we can do some logic to figure out what to do
export const WargearOptions = (props: iWargearOptionsProps) => {
  const { model, hero } = props;
  return (
    <fieldset className="px-2 py-2">
      {/* here we need to render out all the choices */}
      {(model.wargear || [])
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
                      name={model.id + wc.key}
                      checked={isWargearChoiceSelected(choice, wc, model)}
                      onChange={(e) => {
                        if (hero) {
                          State.setWarriorChoiceWargear(
                            choice,
                            wc,
                            hero,
                            model
                          );
                        } else {
                          State.setHeroChoiceWargear(
                            choice,
                            wc,
                            model as iHeroModelInArmy
                          );
                        }
                      }}
                    />
                    <span>{choice.name}</span>
                  </label>
                );
              })}
            </div>
          );
        })}
      {(model.wargearUpgrades || []).map((wgo) => {
        return (
          <label
            key={wgo.key}
            className="flex cursor-pointer flex-row items-center space-x-2"
          >
            <input
              type="checkbox"
              checked={isWargearUpgradeSelected(wgo, model)}
              onChange={(e) => {
                if (hero) {
                  State.toggleUpgradeToWarbandWarrior(
                    e.currentTarget.checked,
                    wgo,
                    model,
                    hero
                  );
                } else {
                  State.toggleUpgradeToHero(
                    e.currentTarget.checked,
                    wgo,
                    model as iHeroModelInArmy
                  );
                }
              }}
            />
            <span>
              {wgo.name} - {wgo.cost}pts
            </span>
          </label>
        );
      })}
      {(model.wargearOptions || []).map((wgo) => {
        return (
          <label
            key={wgo.key}
            className="flex cursor-pointer flex-row items-center space-x-2"
          >
            <input
              type="checkbox"
              checked={isWargearOptionEquipped(wgo, model.equippedWargear)}
              onChange={(e) => {
                if (hero) {
                  State.toggleWargearToWarbandWarrior(
                    e.currentTarget.checked,
                    wgo,
                    model,
                    hero
                  );
                } else {
                  State.toggleWargearToHero(
                    e.currentTarget.checked,
                    wgo,
                    model as iHeroModelInArmy
                  );
                }
              }}
            />
            <span>
              {wgo.name} - {wgo.cost}pts
            </span>
          </label>
        );
      })}
      {(model.wargearPoolOptions || []).map((wgpo) => {
        return (
          <div
            key={wgpo.key}
            className="flex cursor-pointer flex-row items-center space-x-2 bg-green-400"
          >
            <div className="flex flex-row items-center space-x-2">
              <span>
                {wgpo.quantity} * {wgpo.name} - {wgpo.cost}pts
              </span>
              {/* increase */}
              <button
                onClick={() => {
                  State.increaseWargearPoolOptionOnWarband(wgpo, model, hero!);
                }}
                className="block rounded-full bg-stone-300 p-1 text-sm hover:scale-105 hover:bg-stone-400 active:scale-95"
              >
                {/* <PlusCircle /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>

              {/* decrease */}
              <button
                onClick={() => {
                  State.decreaseWargearPoolOptionOnWarband(wgpo, model, hero!);
                }}
                className="block rounded-full bg-stone-300 p-1 text-sm hover:scale-105 hover:bg-stone-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </fieldset>
  );
};
