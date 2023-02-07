import { proxy } from "valtio";
import { ArmyKey } from "./data/armies";
import { iHeroModelInArmy, iModel, iModelInArmy } from "./data/models";
import { nanoid } from "nanoid";
import { iOption } from "./data/wargear";
import { getDefaultChoiceWargearChoices } from "./utils";

export interface iState {
  selectedAddForceArmyKey: ArmyKey;
  armyForces: ArmyKey[];
  yourArmyHeroes: iHeroModelInArmy[];
}

export const initialState: iState = {
  selectedAddForceArmyKey: "Mordor",
  armyForces: [],
  yourArmyHeroes: [],
};

export const state = proxy<iState>({
  ...initialState,
});

export const addWarbandWarriorToHero = (
  warriorModel: iModel,
  heroId: string
) => {
  const heroIndex = state.yourArmyHeroes.findIndex((h) => h.id === heroId);

  state.yourArmyHeroes[heroIndex].warband.push({
    ...warriorModel,
    equippedWargear: [],
    id: nanoid(),
    quantity: 1,
    wargearFromChoices: getDefaultChoiceWargearChoices(
      (warriorModel.wargear || []).filter((w) => w.choices)
    ),
  });
};

export const toggleWargearToHero = (
  isOn: boolean,
  wargear: iOption,
  hero: iHeroModelInArmy
) => {
  const heroIndex = state.yourArmyHeroes.findIndex((h) => h.id === hero.id);

  if (isOn) {
    state.yourArmyHeroes[heroIndex].equippedWargear.push({
      ...wargear,
    });
  } else {
    // removing it
    state.yourArmyHeroes[heroIndex].equippedWargear = state.yourArmyHeroes[
      heroIndex
    ].equippedWargear.filter((w) => w.name !== wargear.name);
  }
};

export const toggleUpgradeToHero = (
  isOn: boolean,
  wargear: iOption,
  hero: iHeroModelInArmy
) => {
  const heroIndex = state.yourArmyHeroes.findIndex((h) => h.id === hero.id);

  if (state.yourArmyHeroes[heroIndex].wargearFromUpgrades === undefined) {
    state.yourArmyHeroes[heroIndex].wargearFromUpgrades = [];
  }

  if (isOn) {
    state.yourArmyHeroes[heroIndex].wargearFromUpgrades!.push({
      ...wargear,
    });
  } else {
    // removing it
    state.yourArmyHeroes[heroIndex].wargearFromUpgrades = state.yourArmyHeroes[
      heroIndex
    ].wargearFromUpgrades!.filter((w) => w.name !== wargear.name);
  }
};

export const toggleWargearToWarbandWarrior = (
  isOn: boolean,
  wargear: iOption,
  warbandWarrior: iModelInArmy,
  hero: iHeroModelInArmy
) => {
  const heroIndex = state.yourArmyHeroes.findIndex((h) => h.id === hero.id);
  const warbandWarriorIndex = state.yourArmyHeroes[heroIndex].warband.findIndex(
    (x) => x.id === warbandWarrior.id
  );

  if (isOn) {
    state.yourArmyHeroes[heroIndex].warband[
      warbandWarriorIndex
    ].equippedWargear.push({
      ...wargear,
    });
  } else {
    state.yourArmyHeroes[heroIndex].warband[
      warbandWarriorIndex
    ].equippedWargear = state.yourArmyHeroes[heroIndex].warband[
      warbandWarriorIndex
    ].equippedWargear.filter((w) => w.name !== wargear.name);
  }
};

export const toggleUpgradeToWarbandWarrior = (
  isOn: boolean,
  wargear: iOption,
  warbandWarrior: iModelInArmy,
  hero: iHeroModelInArmy
) => {
  const heroIndex = state.yourArmyHeroes.findIndex((h) => h.id === hero.id);
  const warbandWarriorIndex = state.yourArmyHeroes[heroIndex].warband.findIndex(
    (x) => x.id === warbandWarrior.id
  );

  if (
    state.yourArmyHeroes[heroIndex].warband[warbandWarriorIndex]
      .wargearFromUpgrades === undefined
  ) {
    state.yourArmyHeroes[heroIndex].warband[
      warbandWarriorIndex
    ].wargearFromUpgrades = [];
  }

  if (isOn) {
    state.yourArmyHeroes[heroIndex].warband[
      warbandWarriorIndex
    ].wargearFromUpgrades!.push({
      ...wargear,
    });
  } else {
    state.yourArmyHeroes[heroIndex].warband[
      warbandWarriorIndex
    ].wargearFromUpgrades = state.yourArmyHeroes[heroIndex].warband[
      warbandWarriorIndex
    ].wargearFromUpgrades!.filter((w) => w.name !== wargear.name);
  }
};

export const increaseWarbandWarriorQuantity = (
  warrior: iModelInArmy,
  hero: iHeroModelInArmy
) => {
  const heroIndex = state.yourArmyHeroes.findIndex((h) => h.id === hero.id);
  const warbandWarriorIndex = state.yourArmyHeroes[heroIndex].warband.findIndex(
    (x) => x.id === warrior.id
  );

  state.yourArmyHeroes[heroIndex].warband[warbandWarriorIndex].quantity += 1;
};

export const decreaseWarbandWarriorQuantity = (
  warrior: iModelInArmy,
  hero: iHeroModelInArmy
) => {
  const heroIndex = state.yourArmyHeroes.findIndex((h) => h.id === hero.id);
  const warbandWarriorIndex = state.yourArmyHeroes[heroIndex].warband.findIndex(
    (x) => x.id === warrior.id
  );

  state.yourArmyHeroes[heroIndex].warband[warbandWarriorIndex].quantity -= 1;
};

export const addHeroToArmy = (hero: iModel) => {
  state.yourArmyHeroes = [
    ...state.yourArmyHeroes,
    {
      ...hero,
      id: nanoid(),
      warband: [],
      equippedWargear: [],
      quantity: 1,
      wargearFromChoices: getDefaultChoiceWargearChoices(
        (hero.wargear || []).filter((w) => w.choices)
      ),
    },
  ];
};

export const setHeroChoiceWargear = (
  choice: iOption,
  wargearChoice: iOption,
  hero: iHeroModelInArmy
) => {
  // remove all the choices from wargear choice on the hero
  // then add in the choice
  const heroIndex = state.yourArmyHeroes.findIndex((h) => h.id === hero.id);
  state.yourArmyHeroes[heroIndex].wargearFromChoices = [];
  state.yourArmyHeroes[heroIndex].wargearFromChoices = [{ ...choice }];
};

export const setWarriorChoiceWargear = (
  choice: iOption,
  wargearChoice: iOption,
  hero: iHeroModelInArmy,
  warrior: iModelInArmy
) => {
  // remove all the choices from wargear choice on the hero
  // then add in the choice
  const heroIndex = state.yourArmyHeroes.findIndex((h) => h.id === hero.id);
  const warriorIndex = state.yourArmyHeroes[heroIndex].warband.findIndex(
    (w) => w.id === warrior.id
  );

  state.yourArmyHeroes[heroIndex].warband[warriorIndex].wargearFromChoices = [];
  state.yourArmyHeroes[heroIndex].warband[warriorIndex].wargearFromChoices = [
    { ...choice },
  ];
};

export const duplicateWarriorInWarband = (
  model: iModelInArmy,
  hero: iHeroModelInArmy
) => {
  const heroIndex = state.yourArmyHeroes.findIndex((h) => h.id === hero.id);
  const modelIndex = state.yourArmyHeroes[heroIndex].warband.findIndex(
    (w) => w.id === model.id
  );

  state.yourArmyHeroes[heroIndex].warband.splice(modelIndex, 0, {
    ...model,
    id: nanoid(),
  });
};

export const deleteWarriorFromWarband = (
  model: iModelInArmy,
  hero: iHeroModelInArmy
) => {
  const heroIndex = state.yourArmyHeroes.findIndex((h) => h.id === hero.id);
  const warriorIndex = state.yourArmyHeroes[heroIndex].warband.findIndex(
    (w) => w.id === model.id
  );

  state.yourArmyHeroes[heroIndex].warband.splice(warriorIndex, 1);
};

export const increaseHeroicStat = (
  hero: iHeroModelInArmy,
  heroicStat: "mi" | "wi" | "fa"
) => {
  const heroIndex = state.yourArmyHeroes.findIndex((h) => h.id === hero.id);
  // initialise them all
  state.yourArmyHeroes[heroIndex].extraMi = state.yourArmyHeroes[heroIndex]
    .extraMi
    ? state.yourArmyHeroes[heroIndex].extraMi
    : 0;
  state.yourArmyHeroes[heroIndex].extraWi = state.yourArmyHeroes[heroIndex]
    .extraWi
    ? state.yourArmyHeroes[heroIndex].extraWi
    : 0;
  state.yourArmyHeroes[heroIndex].extraFa = state.yourArmyHeroes[heroIndex]
    .extraFa
    ? state.yourArmyHeroes[heroIndex].extraFa
    : 0;

  switch (heroicStat) {
    case "mi":
      state.yourArmyHeroes[heroIndex].extraMi! += 1;
      break;
    case "wi":
      state.yourArmyHeroes[heroIndex].extraWi! += 1;
      break;
    case "fa":
      state.yourArmyHeroes[heroIndex].extraFa! += 1;
      break;
  }

  if (
    state.yourArmyHeroes[heroIndex].extraMi! +
      state.yourArmyHeroes[heroIndex].stats!.Mi! >
    state.yourArmyHeroes[heroIndex].maxMi!
  ) {
    state.yourArmyHeroes[heroIndex].extraMi =
      state.yourArmyHeroes[heroIndex].maxMi! -
      state.yourArmyHeroes[heroIndex].stats!.Mi!;
  }

  if (
    state.yourArmyHeroes[heroIndex].extraWi! +
      state.yourArmyHeroes[heroIndex].stats!.Wi! >
    state.yourArmyHeroes[heroIndex].maxWi!
  ) {
    state.yourArmyHeroes[heroIndex].extraWi =
      state.yourArmyHeroes[heroIndex].maxWi! -
      state.yourArmyHeroes[heroIndex].stats!.Wi!;
  }

  if (
    state.yourArmyHeroes[heroIndex].extraFa! +
      state.yourArmyHeroes[heroIndex].stats!.Fa! >
    state.yourArmyHeroes[heroIndex].maxFa!
  ) {
    state.yourArmyHeroes[heroIndex].extraFa =
      state.yourArmyHeroes[heroIndex].maxFa! -
      state.yourArmyHeroes[heroIndex].stats!.Fa!;
  }
};

export const decreaseHeroicStat = (
  hero: iHeroModelInArmy,
  heroicStat: "mi" | "wi" | "fa"
) => {
  const heroIndex = state.yourArmyHeroes.findIndex((h) => h.id === hero.id);
  // initialise them all
  state.yourArmyHeroes[heroIndex].extraMi = state.yourArmyHeroes[heroIndex]
    .extraMi
    ? state.yourArmyHeroes[heroIndex].extraMi
    : 0;
  state.yourArmyHeroes[heroIndex].extraWi = state.yourArmyHeroes[heroIndex]
    .extraWi
    ? state.yourArmyHeroes[heroIndex].extraWi
    : 0;
  state.yourArmyHeroes[heroIndex].extraFa = state.yourArmyHeroes[heroIndex]
    .extraFa
    ? state.yourArmyHeroes[heroIndex].extraFa
    : 0;

  switch (heroicStat) {
    case "mi":
      state.yourArmyHeroes[heroIndex].extraMi! -= 1;
      break;
    case "wi":
      state.yourArmyHeroes[heroIndex].extraWi! -= 1;
      break;
    case "fa":
      state.yourArmyHeroes[heroIndex].extraFa! -= 1;
      break;
  }

  if (state.yourArmyHeroes[heroIndex].extraMi! < 0) {
    state.yourArmyHeroes[heroIndex].extraMi = 0;
  }
  if (state.yourArmyHeroes[heroIndex].extraWi! < 0) {
    state.yourArmyHeroes[heroIndex].extraWi = 0;
  }
  if (state.yourArmyHeroes[heroIndex].extraFa! < 0) {
    state.yourArmyHeroes[heroIndex].extraFa = 0;
  }
};
