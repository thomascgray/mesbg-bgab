import { iWargear } from "./data/wargear";

export const isWargearOptionEquipped = (
  wargearOption: iWargear,
  equippedWargear: iWargear[]
) => {
  const keysOfEquippedWargear = equippedWargear.map((w) => w.name);
  return keysOfEquippedWargear.includes(wargearOption.name);
};
