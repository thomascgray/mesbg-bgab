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
  Numenor: { name: "Numenor", mayField: [] },
  MinisTirith: { name: "MinisTirith", mayField: [] },
  TheFiefdoms: { name: "TheFiefdoms", mayField: [] },
  TheDeadOfDunharrow: { name: "TheDeadOfDunharrow", mayField: [] },
  Arnor: { name: "Arnor", mayField: [] },
  Rohan: { name: "Rohan", mayField: [] },
  WildmenOfDruadan: { name: "WildmenOfDruadan", mayField: [] },
  Rivendell: { name: "Rivendell", mayField: [] },
  Lothlorien: { name: "Lothlorien", mayField: [] },
  Fangorn: { name: "Fangorn", mayField: [] },
  TheMistyMountains: { name: "TheMistyMountains", mayField: [] },
  TheKingdomOfKhazadDum: { name: "TheKingdomOfKhazadDum", mayField: [] },
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
