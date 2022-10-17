import React, { useState } from "react";
import { armies, ArmyKey } from "./data/armies";
import { iHeroModelInArmy, iModel, iModelInArmy, models } from "./data/models";
import * as _ from "lodash";
import { nanoid } from "nanoid";
import { produce } from "immer";
import { iWargear } from "./data/wargear";

function App() {
  const [selectedAddForceArmyKey, setSelectedAddForceArmyKey] =
    useState<ArmyKey>(Object.keys(armies)[0] as ArmyKey);

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
    wargear: any,
    warbandWarrior: any,
    hero: any
  ) => {};

  const isWargearOptionEquipped = (
    wargearOption: iWargear,
    equippedWargear: iWargear[]
  ) => {
    const keysOfEquippedWargear = equippedWargear.map((w) => w.name);
    return keysOfEquippedWargear.includes(wargearOption.name);
  };

  return (
    <div>
      <div className="add-force">
        <select
          onChange={(e) => {
            setSelectedAddForceArmyKey(e.currentTarget.value as ArmyKey);
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
          onClick={() => {
            setArmyForces([...armyForces, selectedAddForceArmyKey]);
          }}
        >
          Add Force
        </button>
      </div>

      {armyForces.length >= 1 && (
        <React.Fragment>
          <div>
            <p>
              <strong>Forces</strong>
            </p>
            {armyForces.map((ak) => {
              return <p>{ak}</p>;
            })}
          </div>

          <div>
            <p>
              <strong>Heroes</strong>
            </p>

            {allowedHeroes.map((hero) => {
              return (
                <button
                  onClick={() => {
                    setYourArmyHeroes([
                      ...yourArmyHeroes,
                      {
                        ...hero,
                        id: nanoid(),
                        warband: [],
                        equippedWargear: [],
                      },
                    ]);
                  }}
                >
                  <p>{hero.name}</p>
                  <p>{hero.stats.Mv}''</p>
                </button>
              );
            })}
          </div>

          <div>
            <strong>Your Army</strong>
            {yourArmyHeroes.map((hero) => {
              return (
                <div>
                  <p>{hero.name}</p>
                  <p>
                    <em>Options</em>
                  </p>
                  {hero.wargearOptions.map((wgo) => {
                    return (
                      <label>
                        <input
                          type="checkbox"
                          checked={isWargearOptionEquipped(
                            wgo,
                            hero.equippedWargear
                          )}
                          onChange={(e) => {
                            toggleWargearToHero(
                              e.currentTarget.checked,
                              wgo,
                              hero
                            );
                          }}
                        />
                        {wgo.name} - {wgo.cost}pts
                      </label>
                    );
                  })}

                  <p>
                    <em>Warband</em>
                  </p>
                  {hero.warband.length <= 0 && (
                    <p>
                      <em>No warband</em>
                    </p>
                  )}
                  {hero.warband.length >= 1 && (
                    <div>
                      {hero.warband.map((w) => {
                        return (
                          <div>
                            <p>{w.name}</p>
                            <p>{w.stats.Mv}''</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {allowedWarriors.map((m) => {
                    return (
                      <button
                        onClick={() => {
                          addWarbandWarriorToHero(m, hero.id);
                        }}
                      >
                        <p>{m.name}</p>
                        <p>{m.stats.Mv}''</p>
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
