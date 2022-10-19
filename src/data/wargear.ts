export interface iWargear {
  id: string;
  name: string;
  cost?: number;
  swapFrom?: iWargear[];
  swapTo?: iWargear;
  choices?: iWargear[];
}

export const wargear = {
  Aiglos: { id: "Aiglos", name: "Aiglos" },

  AndurilFlameOfTheWest: {
    id: "AndurilFlameOfTheWest",
    name: "Anduril Flame Of The West",
  },
  Armour: { id: "Armour", name: "Armour" },
  ArmouredHorse: { id: "ArmouredHorse", name: "ArmouredHorse" },
  ArmourOfGondolin: { id: "ArmourOfGondolin", name: "ArmourOfGondolin" },
  Asfaloth: { id: "Asfaloth", name: "Asfaloth" },
  Axe: { id: "Axe", name: "Axe" },
  AxeOfLossarnach: { id: "AxeOfLossarnach", name: "AxeOfLossarnach" },
  Banner: { id: "Banner", name: "Banner" },
  BannerOfArwenEvenstar: {
    id: "BannerOfArwenEvenstar",
    name: "BannerOfArwenEvenstar",
  },
  Bow: { id: "Bow", name: "Bow" },
  Broadsword: { id: "Broadsword", name: "Broadsword" },
  Cart: { id: "Cart", name: "Cart" },
  Club: { id: "Club", name: "Club" },
  Dagger: { id: "Dagger", name: "Dagger" },
  ElfBow: { id: "ElfBow", name: "Elf bow" },
  ElvenCloak: { id: "ElvenCloak", name: "Elven Cloak" },
  ElvenMadeDaggers: { id: "ElvenMadeDaggers", name: "Elven made daggers" },
  ElvenMadeHandAndAHalfSword: {
    id: "ElvenMadeHandAndAHalfSword",
    name: "ElvenMadeHandAndAHalfSword",
  },
  ElvenMadeSword: { id: "ElvenMadeSword", name: "Elven made daggers" },

  Felarof: { id: "Felarof", name: "Felarof" },
  Glamdring: { id: "Glamdring", name: "Glamdring" },
  GripFangAndWolf: { id: "GripFangAndWolf", name: "Grip, Fang and Wolf" },
  Hammer: { id: "Hammer", name: "Hammer" },
  Hadhafang: { id: "Hadhafang", name: "Hadhafang" },

  HandAndAHalfClub: { id: "HandAndAHalfClub", name: "HandAndAHalfClub" },
  HandAndAHalfSword: { id: "HandAndAHalfSword", name: "HandAndAHalfSword" },
  HeavyArmour: { id: "HeavyArmour", name: "HeavyArmour" },
  HeavyDwarfArmour: { id: "HeavyDwarfArmour", name: "HeavyDwarfArmour" },
  Herugrim: { id: "Herugrim", name: "Herugrim" },
  HornOfGondor: { id: "HornOfGondor", name: "HornOfGondor" },
  HornOfTheHammerhand: {
    id: "HornOfTheHammerhand",
    name: "HornOfTheHammerhand",
  },
  Horse: { id: "Horse", name: "Horse" },
  IronShodHooves: { id: "IronShodHooves", name: "IronShodHooves" },
  Lance: { id: "Lance", name: "Lance" },
  Longbow: { id: "Longbow", name: "Longbow" },
  MasterForgedTwoHandedAxe: {
    id: "MasterForgedTwoHandedAxe",
    name: "MasterForgedTwoHandedAxe",
  },
  MithrilCoat: { id: "MithrilCoat", name: "Mithril Coat" },
  Narsil: { id: "Narsil", name: "Narsil" },
  Narya: { id: "Narya", name: "Narya" },
  NoldorinDaggers: { id: "NoldorinDaggers", name: "NoldorinDaggers" },
  OrcBow: { id: "OrcBow", name: "Orc Bow" },
  Pick: { id: "Pick", name: "Pick" },
  Pike: { id: "Pike", name: "Pike" },
  PoisonedBlowpipe: { id: "PoisonedBlowpipe", name: "PoisonedBlowpipe" },
  Pony: { id: "Pony", name: "Pony" },
  RoyalStandardOfRohan: {
    id: "RoyalStandardOfRohan",
    name: "RoyalStandardOfRohan",
  },
  Shadowfax: { id: "Shadowfax", name: "Shadowfax" },
  Shield: { id: "Shield", name: "Shield" },
  Shortbow: { id: "Shortbow", name: "Shortbow" },
  Spear: { id: "Spear", name: "Spear" },
  SpectralSteed: { id: "SpectralSteed", name: "SpectralSteed" },
  Staff: { id: "Staff", name: "Staff" },
  StaffOfPower: { id: "StaffOfPower", name: "Staff of Power" },
  Sting: { id: "Sting", name: "Sting" },
  StranglingFingers: { id: "StranglingFingers", name: "StranglingFingers" },
  Sword: { id: "Sword", name: "Sword" },
  TheBannerOfMinasTirith: {
    id: "TheBannerOfMinasTirith",
    name: "TheBannerOfMinasTirith",
  },
  TheOneRing: { id: "TheOneRing", name: "The One Ring" },
  ThrowingAxes: { id: "ThrowingAxes", name: "ThrowingAxes" },
  ThrowingSpears: { id: "ThrowingSpears", name: "ThrowingSpears" },
  TwoAxes: { id: "TwoAxes", name: "TwoAxes" },
  TwoHandedAxe: { id: "TwoHandedAxe", name: "TwoHandedAxe" },
  TwoHandedScythePick: {
    id: "TwoHandedScythePick",
    name: "Two Handed Scythe (pick)",
  },
  TwoHandedWeapon: { id: "TwoHandedWeapon", name: "Two Handed Weapon" },
  Umbrella: { id: "Umbrella", name: "Umbrella" },
  WalkingCaneClub: { id: "WalkingCaneClub", name: "WalkingCane (club)" },
  Warg: { id: "Warg", name: "Warg" },
  Warhorn: { id: "Warhorn", name: "Warhorn" },
  WarSpear: { id: "WarSpear", name: "WarSpear" },
  WhiteSwordOfGondor: { id: "WhiteSwordOfGondor", name: "WhiteSwordOfGondor" },
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
