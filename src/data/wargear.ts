import { models } from "./models";

export interface iOption {
  key: string;
  name: string;
  changes?: any; // any changes overwrite the base model when this upgrade it taken
  cost?: number;
  swapFrom?: iOption[];
  swapTo?: iOption;
  choices?: iOption[];
  isUpgrade?: boolean; // so we know whether to show it as an item or not, etc.
  countsAsBow?: boolean; // for the purpose of calculating army bow limits, etc.
}

export const options = {
  Aiglos: { key: "Aiglos", name: "Aiglos" },

  AndurilFlameOfTheWest: {
    key: "AndurilFlameOfTheWest",
    name: "Anduril Flame Of The West",
  },
  Armour: { key: "Armour", name: "Armour" },
  IronShield: { key: "IronShield", name: "IronShield" },
  FoeSpear: { key: "FoeSpear", name: "FoeSpear" },
  ArmouredHorse: { key: "ArmouredHorse", name: "ArmouredHorse" },
  ArmouredFellBeast: { key: "ArmouredFellBeast", name: "ArmouredFellBeast" },
  WardrumMordorOrc: { key: "WardrumMordorOrc", name: "WardrumMordorOrc" },
  WardrumMordor: { key: "WardrumMordor", name: "WardrumMordor" },
  FellBeast: { key: "FellBeast", name: "FellBeast" },
  CrownOfMorgul: { key: "CrownOfMorgul", name: "CrownOfMorgul" },
  MorgulBlade: { key: "MorgulBlade", name: "MorgulBlade" },
  TwoHandedFlail: { key: "TwoHandedFlail", name: "TwoHandedFlail" },
  LargeVenemousFangs: { key: "LargeVenemousFangs", name: "LargeVenemousFangs" },
  Whip: { key: "Whip", name: "Whip" },
  ArmourOfGondolin: { key: "ArmourOfGondolin", name: "ArmourOfGondolin" },
  Asfaloth: { key: "Asfaloth", name: "Asfaloth" },
  DwarfArmour: { key: "DwarfArmour", name: "DwarfArmour" },
  Torozul: { key: "Torozul", name: "Torozul" },
  Axe: { key: "Axe", name: "Axe" },
  DwarfBow: { key: "DwarfBow", name: "DwarfBow", countsAsBow: true },
  DwarfLongBow: {
    key: "DwarfLongBow",
    name: "DwarfLongBow",
    countsAsBow: true,
  },
  AxeOfLossarnach: { key: "AxeOfLossarnach", name: "AxeOfLossarnach" },
  Banner: { key: "Banner", name: "Banner" },
  BannerOfArwenEvenstar: {
    key: "BannerOfArwenEvenstar",
    name: "BannerOfArwenEvenstar",
  },
  HeavyMithrilArmour: { key: "HeavyMithrilArmour", name: "HeavyMithrilArmour" },
  DurinsAxe: { key: "DurinsAxe", name: "DurinsAxe" },
  RingOfDurin: { key: "RingOfDurin", name: "RingOfDurin" },
  CrownOfKings: { key: "CrownOfKings", name: "CrownOfKings" },
  HornOfZirakzigil: { key: "HornOfZirakzigil", name: "HornOfZirakzigil" },
  Bow: { key: "Bow", name: "Bow", countsAsBow: true },
  Broadsword: { key: "Broadsword", name: "Broadsword" },
  Cart: { key: "Cart", name: "Cart" },
  ClawsAndBeak: { key: "ClawsAndBeak", name: "ClawsAndBeak" },
  Club: { key: "Club", name: "Club" },
  Mace: { key: "Mace", name: "Mace" },
  Dagger: { key: "Dagger", name: "Dagger" },
  ElfBow: { key: "ElfBow", name: "Elf bow", countsAsBow: true },
  ElvenCloak: { key: "ElvenCloak", name: "Elven Cloak" },
  ElvenMadeDaggers: { key: "ElvenMadeDaggers", name: "Elven made daggers" },
  ElvenMadeHandAndAHalfSword: {
    key: "ElvenMadeHandAndAHalfSword",
    name: "ElvenMadeHandAndAHalfSword",
  },
  ElvenMadeSword: { key: "ElvenMadeSword", name: "Elven made daggers" },

  Felarof: { key: "Felarof", name: "Felarof" },
  Glamdring: { key: "Glamdring", name: "Glamdring" },
  GripFangAndWolf: { key: "GripFangAndWolf", name: "Grip, Fang and Wolf" },
  Hammer: { key: "Hammer", name: "Hammer" },
  Hadhafang: { key: "Hadhafang", name: "Hadhafang" },

  HandAndAHalfClub: { key: "HandAndAHalfClub", name: "HandAndAHalfClub" },
  HandAndAHalfSword: { key: "HandAndAHalfSword", name: "HandAndAHalfSword" },
  HandAndAHalfHammer: { key: "HandAndAHalfHammer", name: "HandAndAHalfHammer" },
  HeavyArmour: { key: "HeavyArmour", name: "HeavyArmour" },
  HeavyDwarfArmour: { key: "HeavyDwarfArmour", name: "HeavyDwarfArmour" },
  Herugrim: { key: "Herugrim", name: "Herugrim" },
  HornOfGondor: { key: "HornOfGondor", name: "HornOfGondor" },
  HornOfTheHammerhand: {
    key: "HornOfTheHammerhand",
    name: "HornOfTheHammerhand",
  },
  Horse: { key: "Horse", name: "Horse" },
  IronShodHooves: { key: "IronShodHooves", name: "IronShodHooves" },
  Lance: { key: "Lance", name: "Lance" },
  Longbow: { key: "Longbow", name: "Longbow", countsAsBow: true },
  MasterForgedTwoHandedAxe: {
    key: "MasterForgedTwoHandedAxe",
    name: "MasterForgedTwoHandedAxe",
  },
  MerryAndPippin: { key: "MerryAndPippin", name: "MerryAndPippin" },
  MirrorOfGaladriel: { key: "MirrorOfGaladriel", name: "MirrorOfGaladriel" },
  MithrilCoat: { key: "MithrilCoat", name: "Mithril Coat" },
  Narsil: { key: "Narsil", name: "Narsil" },
  Narya: { key: "Narya", name: "Narya" },
  Nenya: { key: "Nenya", name: "Nenya" },
  NoldorinDaggers: { key: "NoldorinDaggers", name: "NoldorinDaggers" },
  OrcBow: { key: "OrcBow", name: "Orc Bow", countsAsBow: true },
  Pick: { key: "Pick", name: "Pick" },
  Pike: { key: "Pike", name: "Pike" },
  PoisonedBlowpipe: { key: "PoisonedBlowpipe", name: "PoisonedBlowpipe" },
  Pony: { key: "Pony", name: "Pony" },
  RootsAndBranches: { key: "RootsAndBranches", name: "RootsAndBranches" },
  RoyalStandardOfRohan: {
    key: "RoyalStandardOfRohan",
    name: "RoyalStandardOfRohan",
  },
  Shadowfax: { key: "Shadowfax", name: "Shadowfax" },
  Shield: { key: "Shield", name: "Shield" },
  Shortbow: { key: "Shortbow", name: "Shortbow", countsAsBow: true },
  Spear: { key: "Spear", name: "Spear" },
  SpectralSteed: { key: "SpectralSteed", name: "SpectralSteed" },
  Staff: { key: "Staff", name: "Staff" },
  StaffOfPower: { key: "StaffOfPower", name: "Staff of Power" },
  Sting: { key: "Sting", name: "Sting" },
  StranglingFingers: { key: "StranglingFingers", name: "StranglingFingers" },
  Sword: { key: "Sword", name: "Sword" },
  TheBannerOfMinasTirith: {
    key: "TheBannerOfMinasTirith",
    name: "TheBannerOfMinasTirith",
  },
  TheOneRing: { key: "TheOneRing", name: "The One Ring" },
  TomBombadilsGear: { key: "TomBombadilsGear", name: "TomBombadilsGear" },
  GoldberrysGear: { key: "GoldberrysGear", name: "GoldberrysGear" },
  ThrowingAxes: { key: "ThrowingAxes", name: "ThrowingAxes" },
  ThrowingDaggers: { key: "ThrowingDaggers", name: "ThrowingDaggers" },
  ThrowingSpears: { key: "ThrowingSpears", name: "ThrowingSpears" },
  TwoAxes: { key: "TwoAxes", name: "TwoAxes" },
  Kalazal: { key: "Kalazal", name: "Kalazal" },
  TwoHandedAxe: { key: "TwoHandedAxe", name: "TwoHandedAxe" },
  TwoHandedScythePick: {
    key: "TwoHandedScythePick",
    name: "Two Handed Scythe (pick)",
  },
  TwoHandedWeapon: { key: "TwoHandedWeapon", name: "Two Handed Weapon" },
  TwoHandedAxeAndDagger: {
    key: "TwoHandedAxeAndDagger",
    name: "TwoHandedAxeAndDagger",
  },
  Umbrella: { key: "Umbrella", name: "Umbrella" },
  WalkingCaneClub: { key: "WalkingCaneClub", name: "WalkingCane (club)" },
  Warg: { key: "Warg", name: "Warg" },
  Warhorn: { key: "Warhorn", name: "Warhorn" },
  WarSpear: { key: "WarSpear", name: "WarSpear" },
  WhiteSwordOfGondor: { key: "WhiteSwordOfGondor", name: "WhiteSwordOfGondor" },
  WoodElfSpear: { key: "WoodElfSpear", name: "WoodElfSpear" },
};

export const optionSwaps: { [key: string]: iOption } = {
  SpearForLongbow: {
    key: "SpearForLongbow",
    name: "Longbow (Replaces Spear)",
    swapFrom: [options.Spear],
    swapTo: options.Longbow,
  },
  SpearForBanner: {
    key: "SpearForBanner",
    name: "Banner (Replaces Spear)",
    swapFrom: [options.Spear],
    swapTo: options.Banner,
  },
  PikeForBanner: {
    key: "PikeForBanner",
    name: "Banner (Replaces Pike)",
    swapFrom: [options.Pike],
    swapTo: options.Banner,
  },
  AxeOfLossarnachForBanner: {
    key: "AxeOfLossarnachForBanner",
    name: "Banner (Replaces Axe of Lossarnach)",
    swapFrom: [options.AxeOfLossarnach],
    swapTo: options.Banner,
  },
  SpearAndShieldForBanner: {
    key: "SpearAndShieldForBanner",
    name: "Banner (Replaces Spear & Shield)",
    swapFrom: [options.Spear, options.Shield],
    swapTo: options.Banner,
  },
  AxeForTwoHandedAxeAndDagger: {
    key: "SpearAndShieldForBanner",
    name: "Two Handed Axe & Dagger (Replaces Axe)",
    swapFrom: [options.Axe],
    swapTo: options.TwoHandedAxeAndDagger,
  },
  ShieldForTwoHandedWeapon: {
    key: "ShieldForTwoHandedWeapon",
    name: "Two Handed Weapon (Replaces Shield)",
    swapFrom: [options.Shield],
    swapTo: options.TwoHandedWeapon,
  },
};

export const optionChoice: { [key: string]: iOption } = {
  SwordOrAxe: {
    key: "SwordOrAxe",
    name: "Sword or Axe (Choose)",
    choices: [options.Sword, options.Axe],
  },
  DaggerOrAxeOrHammer: {
    key: "DaggerOrAxeOrHammer",
    name: "Dagger or Axe or Hammer",
    choices: [options.Dagger, options.Axe, options.Hammer],
  },
  SwordOrPick: {
    key: "SwordOrPick",
    name: "Sword or Pick",
    choices: [options.Sword, options.Pick],
  },
  HandAndAHalfSwordOrHandAndAHalfClubOrHandAndAHalfHammer: {
    key: "HandAndAHalfSwordOrHandAndAHalfClubOrHandAndAHalfHammer",
    name: "HandAndAHalfSword Or HandAndAHalfClub Or HandAndAHalfHammer",
    choices: [
      options.HandAndAHalfSword,
      options.HandAndAHalfClub,
      options.HandAndAHalfHammer,
    ],
  },
};

export const optionUpgrades = {
  Hearthguard: {
    key: "Hearthguard",
    name: "Hearthguard",
    isUpgrade: true,
    changes: {
      stats: {
        Mv: 8,
      },
    },
  },
};
// export const wargearEffects = {};
