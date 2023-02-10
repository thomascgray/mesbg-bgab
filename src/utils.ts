import { iOption, options } from "./data/wargear";
import * as _ from "lodash";
import {
  eHeroLevel,
  iHeroModelInArmy,
  iModel,
  iModelInArmy,
  iModelProfile,
} from "./data/models";

export const isWargearOptionEquipped = (
  wargearOption: iOption,
  equippedWargear: iOption[]
) => {
  const keysOfEquippedWargear = equippedWargear.map((w) => w.name);
  return keysOfEquippedWargear.includes(wargearOption.name);
};

export const isWargearChoiceSelected = (
  choice: iOption,
  wargearChoice: iOption,
  hero: iModelInArmy
) => {
  if (hero.wargearFromChoices) {
    return hero.wargearFromChoices.map((c) => c.key).includes(choice.key);
  }
  return false;

  // const keysOfEquippedWargear = equippedWargear.map((w) => w.name);
  // return keysOfEquippedWargear.includes(wargearOption.name);
};

export const isWargearUpgradeSelected = (
  option: iOption,
  model: iModelInArmy
) => {
  if (model.wargearFromUpgrades) {
    return model.wargearFromUpgrades.map((c) => c.key).includes(option.key);
  }
  return false;
};

export const getDefaultChoiceWargearChoices = (wargearChoices: iOption[]) => {
  const defaultWargear = wargearChoices.map((wc) => {
    return wc.choices ? wc.choices[0] : [];
  });

  return _.flatten(defaultWargear);
};

export interface getActiveWargearOptions {
  excludeDefault?: boolean;
}

export const getActiveWargear = (
  model: iModelInArmy,
  options?: getActiveWargearOptions
) => {
  const { wargear, equippedWargear, wargearFromChoices = [] } = model;

  const { excludeDefault = false } = options || {};

  let activeWargear: iOption[] = [];

  if (excludeDefault === false) {
    activeWargear = [
      // all the default stuff WITHOUT choices
      ...(wargear || []).filter((dw) => dw.choices === undefined),
      // and THEN all the stuff from choices array
      ...wargearFromChoices,
      // all the equipped wargear thats NOT a swap, just add it on
      ...equippedWargear.filter(
        (ew) => ew.swapFrom === undefined && ew.swapTo === undefined
      ),
    ];
  } else {
    activeWargear = [
      // we're excluding defaults, so just add on the stuff from choices array
      ...wargearFromChoices,
      // plus all the equipped wargear thats NOT a swap, just add it on
      ...equippedWargear.filter(
        (ew) => ew.swapFrom === undefined && ew.swapTo === undefined
      ),
    ];
  }

  // do any swaps
  // eg find the indexes in the active wargear that we're swapping from, remove
  // them, and then add in the swapped to wargear
  equippedWargear
    .filter((ew) => !(ew.swapFrom === undefined && ew.swapTo === undefined))
    .forEach((swapWargear) => {
      // find if we've got anything to remove from the existing active stuff
      // this is because the thing we're swapping FROM might be default, and therefore
      // not in here (if we've exluded default gear, for example)
      const indexesToSwapOut = swapWargear.swapFrom?.map((s) => {
        return activeWargear.findIndex((a) => a.key === s.key);
      });

      indexesToSwapOut?.forEach((i) => {
        activeWargear.splice(i, 1);
      });

      swapWargear.swapTo?.forEach((s) => {
        activeWargear.push(s);
      });
    });

  //TODO order them by the order they appear on the model

  return activeWargear;
};

export const calculatePointsForWarband = (hero: iHeroModelInArmy) => {
  let cost = Array.isArray(hero.cost) ? hero.cost[0] : hero.cost;

  hero.equippedWargear.forEach((w) => {
    cost += (Array.isArray(w.cost) ? w.cost[0] : w.cost) || 0;
  });

  // needs to account for increases in mi, wi and fa
  cost += (hero.extraMi || 0) * 5;
  cost += (hero.extraWi || 0) * 5;
  cost += (hero.extraFa || 0) * 5;

  hero.warband.forEach((warrior) => {
    let warriorCost = Array.isArray(warrior.cost)
      ? warrior.cost[0]
      : warrior.cost;

    warrior.equippedWargear.forEach((w) => {
      warriorCost += (Array.isArray(w.cost) ? w.cost[0] : w.cost) || 0;
    });

    // this needs to account for wargear upgrades too
    (warrior.wargearFromUpgrades || []).forEach((w) => {
      warriorCost += (Array.isArray(w.cost) ? w.cost[0] : w.cost) || 0;
    });

    warriorCost *= warrior.quantity;

    cost += warriorCost;
  });

  return cost;
};

export const calculateModelCountForWarband = (
  hero: iHeroModelInArmy,
  includeHero: boolean
) => {
  let modelCount = 0;

  if (includeHero) {
    if (hero.effectiveQuantity == null && hero.profiles) {
      hero.profiles.forEach((p) => {
        modelCount += p.effectiveQuantity != null ? p.effectiveQuantity : 1;
      });
    } else {
      modelCount += hero.effectiveQuantity != null ? hero.effectiveQuantity : 1;
    }
  }

  hero.warband.forEach((warrior) => {
    let effectiveSingularCount: number = 0;
    if (warrior.profiles && warrior.effectiveQuantity == undefined) {
      //loop over each profile - 1 each, unless its got an effective quantity
      warrior.profiles.forEach((p) => {
        effectiveSingularCount +=
          p.effectiveQuantity != null ? p.effectiveQuantity : 1;
      });
    } else {
      effectiveSingularCount =
        warrior.effectiveQuantity != null ? warrior.effectiveQuantity : 1;
    }

    modelCount += effectiveSingularCount * warrior.quantity;
  });

  return modelCount;
};

export const calculateBowCountForHeroAndWarband = (hero: iHeroModelInArmy) => {
  let bowCount = 0;

  hero.warband.forEach((warrior) => {
    if (warrior.effectiveBowQuantity != null) {
      bowCount += warrior.effectiveBowQuantity * warrior.quantity;
    } else if (getActiveWargear(warrior).some((wg) => wg.countsAsBow)) {
      bowCount += 1 * warrior.quantity;
    }
  });

  return bowCount;
};

// get the stats for a model, and take into account war gear and stuff
export const getModelActiveData = (
  model: iHeroModelInArmy | iModelInArmy
): iHeroModelInArmy | iModelInArmy => {
  let baseModel = { ...model };

  if (model.wargearFromUpgrades) {
    // take into account upgrades
    model.wargearFromUpgrades.forEach((wfu) => {
      if (wfu.changes?.name) {
        baseModel.name = wfu.changes.name;
      }
      if (wfu.changes?.stats) {
        baseModel.stats = {
          ...baseModel.stats,
          ...wfu.changes.stats,
        };
      }
    });
  }

  // console.log("baseModel", JSON.stringify(baseModel, null, 2));

  // // extra heroic stats
  // if (model.extraMi != null) {
  //   baseModel.stats!.Mi = (baseModel.stats!.Mi || 0) + model.extraMi;
  // }
  // if (model.extraWi != null) {
  //   baseModel.stats!.Wi = (baseModel.stats!.Wi || 0) + model.extraWi;
  // }
  // if (model.extraFa != null) {
  //   baseModel.stats!.Fa = (baseModel.stats!.Fa || 0) + model.extraFa;
  // }

  return baseModel;
};

export const getProfileActiveData = (
  profile: iModelProfile,
  model: iHeroModelInArmy | iModelInArmy
): iHeroModelInArmy | iModelInArmy => {
  let baseModel = getModelActiveData(model);

  if (profile.stats) {
    baseModel.stats = {
      ...baseModel.stats,
      ...profile.stats,
    };
  }
  if (profile.effectiveQuantity != null) {
    baseModel.effectiveQuantity = profile.effectiveQuantity;
  }
  if (profile.name) {
    baseModel.name = profile.name;
  }
  if (profile.wargear) {
    baseModel.wargear = profile.wargear;
  }

  return baseModel;
};

export const groupHeroes = (heroes: iModel[]) => {
  return [
    {
      name: "Heroes of Legend",
      heroes: [...heroes.filter((h) => h.heroLevel === eHeroLevel.Legend)],
    },
    {
      name: "Heroes of Valour",
      heroes: [...heroes.filter((h) => h.heroLevel === eHeroLevel.Valour)],
    },
    {
      name: "Heroes of Fortitude",
      heroes: [...heroes.filter((h) => h.heroLevel === eHeroLevel.Fortitude)],
    },
    {
      name: "Minor Heroes",
      heroes: [...heroes.filter((h) => h.heroLevel === eHeroLevel.Minor)],
    },
    {
      name: "Independent Heroes",
      heroes: [...heroes.filter((h) => h.heroLevel === eHeroLevel.Independent)],
    },

    {
      name: "Siege Engines",
      heroes: [...heroes.filter((h) => h.heroLevel === eHeroLevel.Siege)],
    },
  ];
};

export const hasPickableOptions = (model: iModelInArmy) => {
  return (
    (model.wargearOptions && model.wargearOptions.length >= 1) ||
    (model.wargearFromChoices && model.wargearFromChoices.length >= 1) ||
    (model.wargearUpgrades && model.wargearUpgrades.length >= 1)
  );
};

export const getMaxUnitsForHero = (model: iHeroModelInArmy) => {
  if (model.disableWarbandAdding) {
    return 0;
  }
  switch (model.heroLevel) {
    case eHeroLevel.Legend:
      return 18;
    case eHeroLevel.Valour:
      return 15;
    case eHeroLevel.Fortitude:
      return 12;
    case eHeroLevel.Minor:
      return 6;
    default:
      return 0;
  }
};
