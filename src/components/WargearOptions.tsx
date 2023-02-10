import { iHeroModelInArmy, iModelInArmy } from "../data/models";
import {
  isWargearChoiceSelected,
  isWargearOptionEquipped,
  isWargearUpgradeSelected,
} from "../utils";
import * as State from "../state";

export interface iWargearOptionsProps {
  model: iHeroModelInArmy | iModelInArmy;
  hero?: iHeroModelInArmy;
}

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
    </fieldset>
  );
};
