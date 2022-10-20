import { models } from "./models";

// good or evil needs to be a tag, not a subtype
export const armies = {
  TheFellowship: {
    name: "The Fellowship",
    mayField: [
      models.FrodoBaggins,
      models.SamwiseGamgee,
      models.MeriadocBrandybuck,
      models.PeregrinTook,
      models.GandalfTheGrey,
      models.AragornStrider,
      models.BoromirOfGondor,
    ],
  },
  TheShire: { name: "TheShire", mayField: [] },
  TheRangers: { name: "TheRangers", mayField: [] },
  Numenor: {
    name: "Numenor",
    mayField: [
      models.ElendilHighKingOfGondorAndArnor,
      models.Isildur,
      models.CaptainOfNumenor,
      models.WarriorOfNumenor,
    ],
  },
  MinisTirith: {
    name: "Minas Tirith",
    mayField: [
      models.AragornKingElessar,
      models.GandalfTheWhite,
      models.DenethorStewardOfGondon,
      models.BoromirCaptainOfTheWhiteTower,
      models.CitadelGuard,
      models.GuardOfTheFountainCourt,
      models.OsgiliathVeteran,
    ],
  },
  TheFiefdoms: { name: "TheFiefdoms", mayField: [] },
  TheDeadOfDunharrow: {
    name: "TheDeadOfDunharrow",
    mayField: [models.TheKingOfTheDead, models.WarriorOfTheDead],
  },
  Arnor: { name: "Arnor", mayField: [] },
  Rohan: { name: "Rohan", mayField: [models.TheodenKingOfRohan] },
  WildmenOfDruadan: { name: "WildmenOfDruadan", mayField: [] },
  Rivendell: {
    name: "Rivendell",
    mayField: [
      models.GilGaladHighKingOfTheElves,
      models.ElrondMasterOfRivendell,
      models.GlorfindelLordOfTheWest,
      models.Erestor,
      models.ElladanAndElrohir,
      models.ArwenUndomiel,
      models.LindirOfRivendell,
      models.Cirdan,
      models.GildorInglorion,
      models.BilboBaggins,
      models.HighElfCaptain,
      models.HighElfStormCaller,
      models.HighElfWarrior,
      models.RivendellKnight,
    ],
  },
  Lothlorien: { name: "Lothlorien", mayField: [] },
  Fangorn: { name: "Fangorn", mayField: [] },
  TheMistyMountains: { name: "TheMistyMountains", mayField: [] },
  TheKingdomOfKhazadDum: {
    name: "TheKingdomOfKhazadDum",
    mayField: [
      models.KingsChampion,
      models.DwarfWarrior,
      models.VaultWardenTeam,
    ],
  },
  WanderersInTheWild: { name: "WanderersInTheWild", mayField: [] },
  BaradDur: {
    name: "BaradDur",
    mayField: [models.TheDarkLordSauron, models.OrcCaptain, models.OrcWarrior],
  },
  Angmar: { name: "Angmar", mayField: [] },
  Mordor: { name: "Mordor", mayField: [] },
  Moria: { name: "Moria", mayField: [] },
};

export type ArmyKey = keyof typeof armies;
