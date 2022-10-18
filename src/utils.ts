import { iWargear, wargear } from "./data/wargear";

export const isWargearOptionEquipped = (
  wargearOption: iWargear,
  equippedWargear: iWargear[]
) => {
  const keysOfEquippedWargear = equippedWargear.map((w) => w.name);
  return keysOfEquippedWargear.includes(wargearOption.name);
};

export const getActiveWargear = (
  defaultWargear: iWargear[],
  equippedWargear: iWargear[]
) => {
  let activeWargear = [
    // all the default stuff
    ...defaultWargear,
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

      // const indexToSwap = activeWargear.findIndex(
      //   (aw) => aw.id === swapWargear.swapFrom!.id
      // );
      // activeWargear[indexToSwap] = {
      //   ...swapWargear.swapTo!,
      // };
    });

  return activeWargear;
};
