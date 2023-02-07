import { iModel } from "./models";

export interface iOption {
  key: string;
  name: string; // the name of the upgrade
  changes?: iModel; // any changes overwrite the base model when this upgrade it taken
  cost?: number;
  swapFrom?: iOption[];
  swapTo?: iOption[];
  choices?: iOption[];
  isUpgrade?: boolean; // so we know whether to show it as an item or not, etc.
  countsAsBow?: boolean; // for the purpose of calculating army bow limits, etc.
}

export const options: { [key: string]: iOption } = {
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
  WardrumMordorUrukHai: {
    key: "WardrumMordorUrukHai",
    name: "WardrumMordorUrukHai",
  },
  WardrumIsengardUrukHai: {
    key: "WardrumIsengardUrukHai",
    name: "WardrumIsengardUrukHai",
  },
  WardrumIsengard: {
    key: "WardrumIsengard",
    name: "WardrumIsengard",
  },
  WardrumEasterling: {
    key: "WardrumEasterling",
    name: "WardrumEasterling",
  },
  FellBeast: { key: "FellBeast", name: "FellBeast" },
  CrownOfMorgul: { key: "CrownOfMorgul", name: "CrownOfMorgul" },
  MorgulBlade: { key: "MorgulBlade", name: "MorgulBlade" },
  TwoHandedFlail: { key: "TwoHandedFlail", name: "TwoHandedFlail" },
  LargeVenemousFangs: { key: "LargeVenemousFangs", name: "LargeVenemousFangs" },
  VenemousFangs: { key: "VenemousFangs", name: "VenemousFangs" },
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
  TrollChain: { key: "TrollChain", name: "TrollChain" },
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
  ClawsAndTeeth: { key: "ClawsAndTeeth", name: "ClawsAndTeeth" },
  Club: { key: "Club", name: "Club" },
  Mace: { key: "Mace", name: "Mace" },
  Dagger: { key: "Dagger", name: "Dagger" },
  Daggers: { key: "Daggers", name: "Daggers" },
  ElfBow: { key: "ElfBow", name: "Elf bow", countsAsBow: true },
  ElvenCloak: { key: "ElvenCloak", name: "Elven Cloak" },
  ElvenMadeDaggers: { key: "ElvenMadeDaggers", name: "Elven made daggers" },
  ElvenMadeHandAndAHalfSword: {
    key: "ElvenMadeHandAndAHalfSword",
    name: "ElvenMadeHandAndAHalfSword",
  },
  ElvenMadeSword: { key: "ElvenMadeSword", name: "Elven made sword" },

  Felarof: { key: "Felarof", name: "Felarof" },
  Glamdring: { key: "Glamdring", name: "Glamdring" },
  TwoHandedMace: { key: "TwoHandedMace", name: "TwoHandedMace" },
  GripFangAndWolf: { key: "GripFangAndWolf", name: "Grip, Fang and Wolf" },
  Hammer: { key: "Hammer", name: "Hammer" },
  Hadhafang: { key: "Hadhafang", name: "Hadhafang" },

  HandAndAHalfClub: { key: "HandAndAHalfClub", name: "HandAndAHalfClub" },
  HandAndAHalfSword: { key: "HandAndAHalfSword", name: "HandAndAHalfSword" },
  HandAndAHalfHammer: { key: "HandAndAHalfHammer", name: "HandAndAHalfHammer" },
  HandAndAHalfAxe: { key: "HandAndAHalfAxe", name: "HandAndAHalfAxe" },
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
  MithrilCrown: { key: "MithrilCrown", name: "Mithril Crown" },
  Narsil: { key: "Narsil", name: "Narsil" },
  Narya: { key: "Narya", name: "Narya" },
  Nenya: { key: "Nenya", name: "Nenya" },
  NoldorinDaggers: { key: "NoldorinDaggers", name: "NoldorinDaggers" },
  OrcBow: { key: "OrcBow", name: "Orc Bow", countsAsBow: true },
  UrukHaiBow: { key: "UrukHaiBow", name: "Uruk-hai bow", countsAsBow: true },
  Pick: { key: "Pick", name: "Pick" },
  Pike: { key: "Pike", name: "Pike" },
  Blowpipe: { key: "Blowpipe", name: "Blowpipe" },
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
  ShieldOfCirithUngol: {
    key: "ShieldOfCirithUngol",
    name: "ShieldOfCirithUngol",
  },
  ThrowingSpears: { key: "ThrowingSpears", name: "ThrowingSpears" },
  TwoAxes: { key: "TwoAxes", name: "TwoAxes" },
  Kalazal: { key: "Kalazal", name: "Kalazal" },
  TwoHandedAxe: { key: "TwoHandedAxe", name: "TwoHandedAxe" },
  HugeClawsAndTeeth: { key: "HugeClawsAndTeeth", name: "HugeClawsAndTeeth" },
  ShadeWargear: { key: "ShadeWargear", name: "ShadeWargear" },
  TwoHandedScythePick: {
    key: "TwoHandedScythePick",
    name: "Two Handed Scythe (pick)",
  },
  TwoHandedWeapon: { key: "TwoHandedWeapon", name: "Two Handed Weapon" },
  TwoHandedClub: { key: "TwoHandedClub", name: "Two Handed Club" },
  TwoHandedSword: { key: "TwoHandedSword", name: "TwoHandedSword" },
  TwoHandedStaff: { key: "TwoHandedStaff", name: "TwoHandedStaff" },
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
  GiantFlamingSword: { key: "GiantFlamingSword", name: "GiantFlamingSword" },
  FieryLash: { key: "FieryLash", name: "FieryLash" },
  Tentacles: { key: "Tentacles", name: "Tentacles" },
  MoriaBlackshieldDrum: {
    key: "MoriaBlackshieldDrum",
    name: "MoriaBlackshieldDrum",
  },
  RidingDagger: { key: "RidingDagger", name: "RidingDagger" },
  Crossbow: { key: "Crossbow", name: "Crossbow", countsAsBow: true },
  BerserkerBlade: { key: "BerserkerBlade", name: "BerserkerBlade" },
  DurtuzTheSilverFalchion: {
    key: "DurtuzTheSilverFalchion",
    name: "DurtuzTheSilverFalchion",
  },
  EasterlingGlaive: { key: "EasterlingGlaive", name: "EasterlingGlaive" },
  EasterlingBattleStave: {
    key: "EasterlingBattleStave",
    name: "EasterlingBattleStave",
  },
  KhandishChariot: {
    key: "KhandishChariot",
    name: "KhandishChariot",
  },
  TheSerpentBanner: { key: "TheSerpentBanner", name: "TheSerpentBanner" },
  BowWithPoisonedArrows: {
    key: "BowWithPoisonedArrows",
    name: "BowWithPoisonedArrows",
  },
  TheGoldenThrone: { key: "TheGoldenThrone", name: "TheGoldenThrone" },
  TwinBlades: { key: "TwinBlades", name: "TwinBlades" },
  WarCamel: { key: "WarCamel", name: "WarCamel" },
  SmokeBombs: { key: "SmokeBombs", name: "SmokeBombs" },
  Pavise: { key: "Pavise", name: "Pavise" },
  Knife: { key: "Knife", name: "Knife" },
};

export const optionSwaps: { [key: string]: iOption } = {
  SpearForLongbow: {
    key: "SpearForLongbow",
    name: "Longbow (Replaces Spear)",
    swapFrom: [options.Spear],
    swapTo: [options.Longbow],
  },
  SpearForBanner: {
    key: "SpearForBanner",
    name: "Banner (Replaces Spear)",
    swapFrom: [options.Spear],
    swapTo: [options.Banner],
  },
  SwordForSpear: {
    key: "SwordForSpear",
    name: "Spear (Replaces Sword)",
    swapFrom: [options.Sword],
    swapTo: [options.Spear],
  },
  ShieldForWardrumIsengard: {
    key: "ShieldForWardrumIsengard",
    name: "Wardrum (Replaces Shield)",
    swapFrom: [options.Shield],
    swapTo: [options.WardrumIsengard],
  },
  PikeForBanner: {
    key: "PikeForBanner",
    name: "Banner (Replaces Pike)",
    swapFrom: [options.Pike],
    swapTo: [options.Banner],
  },
  AxeOfLossarnachForBanner: {
    key: "AxeOfLossarnachForBanner",
    name: "Banner (Replaces Axe of Lossarnach)",
    swapFrom: [options.AxeOfLossarnach],
    swapTo: [options.Banner],
  },
  SpearAndShieldForBanner: {
    key: "SpearAndShieldForBanner",
    name: "Banner (Replaces Spear & Shield)",
    swapFrom: [options.Spear, options.Shield],
    swapTo: [options.Banner],
  },
  AxeForTwoHandedAxeAndDagger: {
    key: "AxeForTwoHandedAxeAndDagger",
    name: "Two Handed Axe & Dagger (Replaces Axe)",
    swapFrom: [options.Axe],
    swapTo: [options.TwoHandedAxe, options.Dagger],
  },
  TwoHandedAxeForAxeAndShield: {
    key: "TwoHandedAxeForAxeAndShield",
    name: "Axe & Shield (Replaces Two Handed Axe)",
    swapFrom: [options.TwoHandedAxe],
    swapTo: [options.Axe, options.Shield],
  },
  AxeForDaggerAndBow: {
    key: "AxeForDaggerAndBow",
    name: "Dagger & Bow (Replaces Axe)",
    swapFrom: [options.Axe],
    swapTo: [options.Bow, options.Dagger],
  },
  EasterlingGlaiveForArmouredHorseAndSword: {
    key: "EasterlingGlaiveForArmouredHorseAndSword",
    name: "Armoured Horse & Sword (Replaces Easterling Glaive)",
    swapFrom: [options.EasterlingGlaive],
    swapTo: [options.ArmouredHorse, options.Sword],
  },
  ShieldForTwoHandedWeapon: {
    key: "ShieldForTwoHandedWeapon",
    name: "Two Handed Weapon (Replaces Shield)",
    swapFrom: [options.Shield],
    swapTo: [options.TwoHandedWeapon],
  },
  SpearForHandAndAHalfHammer: {
    key: "SpearForHandAndAHalfHammer",
    name: "Hand And A Half Hammer (Replaces Spear)",
    swapFrom: [options.Spear],
    swapTo: [options.HandAndAHalfHammer],
  },
  HandAndAHalfAxeForBow: {
    key: "HandAndAHalfAxeForBow",
    name: "Bow (Replaces Hand and a half Axe)",
    swapFrom: [options.HandAndAHalfAxe],
    swapTo: [options.Bow],
  },
};

export const optionChoice: { [key: string]: iOption } = {
  SwordOrAxe: {
    key: "SwordOrAxe",
    name: "Sword or Axe (Choose)",
    choices: [options.Sword, options.Axe],
  },
  TwinBladesOrBowWithPoisonedArrows: {
    key: "TwinBladesOrBowWithPoisonedArrows",
    name: "Twin Blades or Bow with poisoned arrows (Choose)",
    choices: [options.TwinBlades, options.BowWithPoisonedArrows],
  },
  SwordOrDagger: {
    key: "SwordOrDagger",
    name: "Sword or Dagger (Choose)",
    choices: [options.Sword, options.Dagger],
  },
  KnifeOrClub: {
    key: "KnifeOrClub",
    name: "Knife or Club (Choose)",
    choices: [options.Knife, options.Club],
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
  SwordOrMaceOrAxe: {
    key: "SwordOrMaceOrAxe",
    name: "Sword or Mace or Axe (Choose)",
    choices: [options.Sword, options.Mace, options.Axe],
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

export const optionUpgrades: { [key: string]: any } = {
  Hearthguard: {
    key: "Hearthguard",
    name: "Hearthguard",
    isUpgrade: true,
    changes: {
      name: "Hearthguard",
      stats: {
        Mv: 8,
      },
    },
  },

  VenomBackSpider: {
    key: "VenomBackSpider",
    name: "VenomBackSpider",
    isUpgrade: true,
    changes: {
      name: "VenomBackSpider",
      // todo gets a new special rule
    },
  },

  EasterlingWarriorBlackDragon: {
    key: "EasterlingWarriorBlackDragon",
    name: "UpgradeToBlackDragon",
    isUpgrade: true,
    changes: {
      name: "Black Dragon (Easterling Warrior)",
      stats: {
        F1: 4,
        C: 4,
      },
    },
  },

  EasterlingKatapraktBlackDragon: {
    key: "EasterlingKatapraktBlackDragon",
    name: "UpgradeToBlackDragon",
    isUpgrade: true,
    changes: {
      name: "Black Dragon (Easterling Kataprakt)",
      stats: {
        F1: 4,
        C: 4,
      },
    },
  },

  BreatheFire: {
    key: "BreatheFire",
    name: "BreatheFire",
    isUpgrade: true,
  },
  Fly: {
    key: "Fly",
    name: "Fly",
    isUpgrade: true,
  },
  ToughHide: {
    key: "ToughHide",
    name: "ToughHide",
    isUpgrade: true,
  },
  Wyrmtongue: {
    key: "Wyrmtongue",
    name: "Wyrmtongue",
    isUpgrade: true,
  },
  WarMumakOfHaradGnarledHide: {
    key: "WarMumakOfHaradGnarledHide",
    name: "GnarledHide",
    isUpgrade: true,
    changes: {
      stats: {
        D: 8,
      },
    },
  },
  WarMumakOfHaradMahudBeastmasterChieftan: {
    key: "WarMumakOfHaradMahudBeastmasterChieftan",
    name: "MahudBeastmasterChieftan",
    isUpgrade: true,
  },
  WarMumakOfHaradRapellingLines: {
    key: "WarMumakOfHaradRapellingLines",
    name: "RapellingLines",
    isUpgrade: true,
  },
  WarMumakOfHaradFoulTemperament: {
    key: "WarMumakOfHaradFoulTemperament",
    name: "FoulTemperament",
    isUpgrade: true,
  },
  WarMumakOfHaradRocks: {
    key: "WarMumakOfHaradRocks",
    name: "Rocks",
    isUpgrade: true,
  },
  WarMumakOfHaradSigilsOfDefiance: {
    key: "WarMumakOfHaradSigilsOfDefiance",
    name: "SigilsOfDefiance",
    isUpgrade: true,
  },
  WarMumakOfHaradTuskWeapons: {
    key: "WarMumakOfHaradTuskWeapons",
    name: "TuskWeapons",
    isUpgrade: true,
  },
};
