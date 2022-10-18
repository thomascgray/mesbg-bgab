export interface iWargear {
  id: string;
  name: string;
  cost?: number;
  swapFrom?: iWargear[];
  swapTo?: iWargear;
  choices?: iWargear[];
}

export const wargear: { [key: string]: iWargear } = {
  AxeOfLossarnach: { id: "AxeOfLossarnach", name: "AxeOfLossarnach" },
  Herugrim: { id: "Herugrim", name: "Herugrim" },
  ThrowingSpears: { id: "ThrowingSpears", name: "ThrowingSpears" },
  Dagger: { id: "Dagger", name: "Dagger" },
  Bow: { id: "Bow", name: "Bow" },
  Broadsword: { id: "Broadsword", name: "Broadsword" },
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
  PoisonedBlowpipe: { id: "PoisonedBlowpipe", name: "PoisonedBlowpipe" },
  ElvenCloak: { id: "ElvenCloak", name: "Elven Cloak" },
  ElvenMadeDaggers: { id: "ElvenMadeDaggers", name: "Elven made daggers" },
  Armour: { id: "Armour", name: "Armour" },
  Sword: { id: "Sword", name: "Sword" },
  Shortbow: { id: "Shortbow", name: "Shortbow" },
  Warhorn: { id: "Warhorn", name: "Warhorn" },
  HornOfTheHammerhand: {
    id: "HornOfTheHammerhand",
    name: "HornOfTheHammerhand",
  },
  HandAndAHalfSword: { id: "HandAndAHalfSword", name: "HandAndAHalfSword" },
  HandAndAHalfClub: { id: "HandAndAHalfClub", name: "HandAndAHalfClub" },
  RoyalStandardOfRohan: {
    id: "RoyalStandardOfRohan",
    name: "RoyalStandardOfRohan",
  },
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
  Pike: { id: "Pike", name: "Pike" },
  Banner: { id: "Banner", name: "Banner" },
  OrcBow: { id: "OrcBow", name: "Orc Bow" },
  Shield: { id: "Shield", name: "Shield" },
  Spear: { id: "Spear", name: "Spear" },
  TwoHandedWeapon: { id: "TwoHandedWeapon", name: "Two Handed Weapon" },
  TwoHandedAxe: { id: "TwoHandedAxe", name: "TwoHandedAxe" },
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
  Felarof: { id: "Felarof", name: "Felarof" },
  WhiteSwordOfGondor: { id: "WhiteSwordOfGondor", name: "WhiteSwordOfGondor" },
  AndurilFlameOfTheWest: {
    id: "AndurilFlameOfTheWest",
    name: "Anduril Flame Of The West",
  },
  WarSpear: { id: "WarSpear", name: "WarSpear" },
  SpectralSteed: { id: "SpectralSteed", name: "SpectralSteed" },
};

export const wargearSwap: { [key: string]: iWargear } = {
  SpearForLongbow: {
    id: "SpearForLongbow",
    name: "Longbow (Replaces Spear)",
    swapFrom: [wargear.Spear],
    swapTo: wargear.Longbow,
  },
  SpearForBanner: {
    id: "SpearForBanner",
    name: "Banner (Replaces Spear)",
    swapFrom: [wargear.Spear],
    swapTo: wargear.Banner,
  },
  PikeForBanner: {
    id: "PikeForBanner",
    name: "Banner (Replaces Pike)",
    swapFrom: [wargear.Pike],
    swapTo: wargear.Banner,
  },
  AxeOfLossarnachForBanner: {
    id: "AxeOfLossarnachForBanner",
    name: "Banner (Replaces Axe of Lossarnach)",
    swapFrom: [wargear.AxeOfLossarnach],
    swapTo: wargear.Banner,
  },
  SpearAndShieldForBanner: {
    id: "SpearAndShieldForBanner",
    name: "Banner (Replaces Spear & Shield)",
    swapFrom: [wargear.Spear, wargear.Shield],
    swapTo: wargear.Banner,
  },
};

export const wargearChoice: { [key: string]: iWargear } = {
  SwordOrAxe: {
    id: "SwordOrAxe",
    name: "Sword or Axe (Choose)",
    choices: [wargear.Sword, wargear.Axe],
  },
  DaggerOrAxeOrHammer: {
    id: "DaggerOrAxeOrHammer",
    name: "Dagger or Axe or Hammer",
    choices: [wargear.Dagger, wargear.Axe, wargear.Hammer],
  },
  SwordOrPick: {
    id: "SwordOrPick",
    name: "Sword or Pick",
    choices: [wargear.Sword, wargear.Pick],
  },
};

export const wargearEffects = {};
