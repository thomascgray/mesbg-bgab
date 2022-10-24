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
      // all the default stuff WITHOUT choices
      // and THEN all the stuff from choices array
      ...wargearFromChoices,
      // all the equipped wargear thats NOT a swap, just add it on
      ...equippedWargear.filter(
        (ew) => ew.swapFrom === undefined && ew.swapTo === undefined
      ),
    ];
  }

  // do any swaps
  equippedWargear
    .filter((ew) => !(ew.swapFrom === undefined && ew.swapTo === undefined))
    .forEach((swapWargear) => {
      const indexesToSwapOut = swapWargear.swapFrom?.map((s) => {
        return activeWargear.findIndex((a) => a.key === s.key);
      });

      if (indexesToSwapOut) {
        activeWargear[indexesToSwapOut[0]] = {
          ...swapWargear.swapTo!,
        };

        if (indexesToSwapOut[1]) {
          delete activeWargear[indexesToSwapOut[1]];
        }
        if (indexesToSwapOut[2]) {
          delete activeWargear[indexesToSwapOut[2]];
        }
        if (indexesToSwapOut[3]) {
          delete activeWargear[indexesToSwapOut[3]];
        }
      }
    });

  // if we're excluding, we need to add back in the swaps
  if (excludeDefault) {
    equippedWargear
      .filter((ew) => !(ew.swapFrom === undefined && ew.swapTo === undefined))
      .forEach((swapWargear) => {
        activeWargear.push(swapWargear);
      });
  }

  //TODO order them by the order they appear on the model

  return activeWargear;
};

export const calculatePointsForWarband = (hero: iHeroModelInArmy) => {
  let cost = hero.cost;

  hero.equippedWargear.forEach((w) => {
    cost += w.cost || 0;
  });

  hero.warband.forEach((warrior) => {
    let warriorCost = warrior.cost;
    warrior.equippedWargear.forEach((w) => {
      warriorCost += w.cost || 0;
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
    if (hero.profiles) {
      hero.profiles.forEach((p) => {
        modelCount += p.effectiveQuantity ? p.effectiveQuantity : 1;
      });
    } else {
      modelCount += hero.effectiveQuantity ? hero.effectiveQuantity : 1;
    }
  }

  hero.warband.forEach((warrior) => {
    let effectiveSingularCount: number = 0;
    if (warrior.profiles) {
      //loop over each profile - 1 each, unless its got an effective quantity
      warrior.profiles.forEach((p) => {
        effectiveSingularCount += p.effectiveQuantity ? p.effectiveQuantity : 1;
      });
    } else {
      effectiveSingularCount = warrior.effectiveQuantity
        ? warrior.effectiveQuantity
        : 1;
    }

    modelCount += effectiveSingularCount * warrior.quantity;
  });

  return modelCount;
};

export const calculateBowCountForWarband = (hero: iHeroModelInArmy) => {
  let bowCount = 0;

  hero.warband.forEach((warrior) => {
    if (getActiveWargear(warrior).some((wg) => wg.countsAsBow)) {
      bowCount += 1 * warrior.quantity;
    }
  });

  return bowCount;
};

// get the stats for a model, and take into account war gear and stuff
export const getModelActiveStats = (model: iHeroModelInArmy | iModelInArmy) => {
  return {
    ...model.stats,
  };
};

export const getProfileActiveStats = (
  profile: iModelProfile,
  model: iHeroModelInArmy | iModelInArmy
) => {
  if (profile.stats !== undefined) {
    return {
      ...profile.stats,
    };
  } else {
    return getModelActiveStats(model);
  }
};

export const groupHeroes = (heroes: iModel[]) => {
  return [
    {
      name: "Legend",
      heroes: [...heroes.filter((h) => h.heroLevel === eHeroLevel.Legend)],
    },
    {
      name: "Valour",
      heroes: [...heroes.filter((h) => h.heroLevel === eHeroLevel.Valour)],
    },
    {
      name: "Fortitude",
      heroes: [...heroes.filter((h) => h.heroLevel === eHeroLevel.Fortitude)],
    },
    {
      name: "Minor",
      heroes: [...heroes.filter((h) => h.heroLevel === eHeroLevel.Minor)],
    },
    {
      name: "Independent",
      heroes: [...heroes.filter((h) => h.heroLevel === eHeroLevel.Independent)],
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
