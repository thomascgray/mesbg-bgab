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
      const indexToSwap = activeWargear.findIndex(
        (aw) => aw.id === swapWargear.swapFrom!.id
      );
      activeWargear[indexToSwap] = {
        ...swapWargear.swapTo!,
      };
    });

  return activeWargear;
};
