export interface iWargear {
  id: string;
  name: string;
  cost?: number;
  swapFrom?: iWargear;
  swapTo?: iWargear;
}

export const wargear: { [key: string]: iWargear } = {
  Dagger: { id: "Dagger", name: "Dagger" },
  Bow: { id: "Bow", name: "Bow" },
  Longbow: { id: "Longbow", name: "Longbow" },
  HornOfGondor: { id: "HornOfGondor", name: "HornOfGondor" },
  TheOneRing: { id: "TheOneRing", name: "The One Ring" },
  MithrilCoat: { id: "MithrilCoat", name: "Mithril Coat" },
  Sting: { id: "Sting", name: "Sting" },
  Club: { id: "Club", name: "Club" },
  Axe: { id: "Axe", name: "Axe" },
  Hammer: { id: "Hammer", name: "Hammer" },
  Lance: { id: "Lance", name: "Lance" },
  HeavyArmour: { id: "HeavyArmour", name: "HeavyArmour" },
  Narsil: { id: "Narsil", name: "Narsil" },
  WalkingCaneClub: { id: "WalkingCaneClub", name: "WalkingCane (club)" },
  ElfBow: { id: "ElfBow", name: "Elf bow" },
  ElvenCloak: { id: "ElvenCloak", name: "Elven Cloak" },
  ElvenMadeDaggers: { id: "ElvenMadeDaggers", name: "Elven made daggers" },
  Armour: { id: "Armour", name: "Armour" },
  Sword: { id: "Sword", name: "Sword" },
  Shortbow: { id: "Shortbow", name: "Shortbow" },
  Warhorn: { id: "Warhorn", name: "Warhorn" },
  HandAndAHalfSword: { id: "HandAndAHalfSword", name: "HandAndAHalfSword" },
  HandAndAHalfClub: { id: "HandAndAHalfClub", name: "HandAndAHalfClub" },
  BannerOfArwenEvenstar: {
    id: "BannerOfArwenEvenstar",
    name: "BannerOfArwenEvenstar",
  },
  TheBannerOfMinasTirith: {
    id: "TheBannerOfMinasTirith",
    name: "TheBannerOfMinasTirith",
  },
  HeavyDwarfArmour: { id: "HeavyDwarfArmour", name: "HeavyDwarfArmour" },
  MasterForgedTwoHandedAxe: {
    id: "MasterForgedTwoHandedAxe",
    name: "MasterForgedTwoHandedAxe",
  },
  TwoAxes: { id: "TwoAxes", name: "TwoAxes" },
  ThrowingAxes: { id: "ThrowingAxes", name: "ThrowingAxes" },
  IronShodHooves: { id: "IronShodHooves", name: "IronShodHooves" },
  StranglingFingers: { id: "StranglingFingers", name: "StranglingFingers" },
  Pick: { id: "Pick", name: "Pick" },
  Banner: { id: "Banner", name: "Banner" },
  OrcBow: { id: "OrcBow", name: "Orc Bow" },
  Shield: { id: "Shield", name: "Shield" },
  Spear: { id: "Spear", name: "Spear" },
  TwoHandedWeapon: { id: "TwoHandedWeapon", name: "Two Handed Weapon" },
  TwoHandedScythePick: {
    id: "TwoHandedScythePick",
    name: "Two Handed Scythe (pick)",
  },
  GripFangAndWolf: { id: "GripFangAndWolf", name: "Grip, Fang and Wolf" },
  Umbrella: { id: "Umbrella", name: "Umbrella" },
  Warg: { id: "Warg", name: "Warg" },
  Glamdring: { id: "Glamdring", name: "Glamdring" },
  StaffOfPower: { id: "StaffOfPower", name: "Staff of Power" },
  Shadowfax: { id: "Shadowfax", name: "Shadowfax" },
  Narya: { id: "Narya", name: "Narya" },
  Cart: { id: "Cart", name: "Cart" },
  ArmouredHorse: { id: "ArmouredHorse", name: "ArmouredHorse" },
  Horse: { id: "Horse", name: "Horse" },
  Pony: { id: "Pony", name: "Pony" },
  WhiteSwordOfGondor: { id: "WhiteSwordOfGondor", name: "WhiteSwordOfGondor" },
  SwapSpearForLongbow: {
    id: "SwapSpearForLongbow",
    name: "SwapSpearForLongbow",
  },
  SwapSpearForBanner: {
    id: "SwapSpearForBanner",
    name: "SwapSpearForBanner",
  },
  AndurilFlameOfTheWest: {
    id: "AndurilFlameOfTheWest",
    name: "Anduril Flame Of The West",
  },
};
export const wargearSwap: { [key: string]: iWargear } = {
  SpearForLongbow: {
    id: "SpearForLongbow",
    name: "Longbow (Replaces Spear)",
    swapFrom: wargear.Spear,
    swapTo: wargear.Longbow,
  },
  SpearForBanner: {
    id: "SpearForBanner",
    name: "Banner (Replaces Spear)",
    swapFrom: wargear.Spear,
    swapTo: wargear.Banner,
  },
};

export const wargearEffects = {};
