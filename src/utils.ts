import { iWargear, wargear } from "./data/wargear";
import * as _ from "lodash";
import { iModelInArmy } from "./data/models";
export const isWargearOptionEquipped = (
  wargearOption: iWargear,
  equippedWargear: iWargear[]
) => {
  const keysOfEquippedWargear = equippedWargear.map((w) => w.name);
  return keysOfEquippedWargear.includes(wargearOption.name);
};

export const getDefaultChoiceWargearChoices = (wargearChoices: iWargear[]) => {
  const defaultWargear = wargearChoices.map((wc) => {
    return wc.choices ? wc.choices[0] : [];
  });

  return _.flatten(defaultWargear);
};

export const getActiveWargear = (model: iModelInArmy) => {
  const { wargear, equippedWargear, wargearFromChoices = [] } = model;
  let activeWargear = [
    // all the default stuff WITHOUT choices
    ...wargear.filter((dw) => dw.choices === undefined),
    // and THEN all the stuff from choices array
    ...wargearFromChoices,
    // all the equipped wargear thats NOT a swap, just add it on
    ...equippedWargear.filter(
      (ew) => ew.swapFrom === undefined && ew.swapTo === undefined
    ),
  ];

  // do any swaps
  equippedWargear
    .filter((ew) => !(ew.swapFrom === undefined && ew.swapTo === undefined))
    .forEach((swapWargear) => {
      const indexesToSwapOut = swapWargear.swapFrom?.map((s) => {
        return activeWargear.findIndex((a) => a.id === s.id);
      });

      if (indexesToSwapOut) {
        activeWargear[indexesToSwapOut[0]] = {
          ...swapWargear.swapTo!,
        };

        if (indexesToSwapOut[1]) {
          delete activeWargear[indexesToSwapOut[1]];
        }
        if (indexesToSwapOut[2]) {
          delete activeWargear[indexesToSwapOut[2]];
        }
        if (indexesToSwapOut[3]) {
          delete activeWargear[indexesToSwapOut[3]];
        }
      }
    });

  return activeWargear;
};
