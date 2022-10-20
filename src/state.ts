import { proxy } from "valtio";
import { ArmyKey } from "./data/armies";
import { iHeroModelInArmy, iModel, iModelInArmy } from "./data/models";
import { nanoid } from "nanoid";
import { iWargear } from "./data/wargear";
import { getDefaultChoiceWargearChoices } from "./utils";

export interface iState {
  selectedAddForceArmyKey: ArmyKey;
  armyForces: ArmyKey[];
  yourArmyHeroes: iHeroModelInArmy[];
}

export const initialState: iState = {
  selectedAddForceArmyKey: "Rivendell",
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
      warriorModel.wargear.filter((w) => w.choices)
    ),
  });
};

export const toggleWargearToHero = (
  isOn: boolean,
  wargear: iWargear,
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

export const toggleWargearToWarbandWarrior = (
  isOn: boolean,
  wargear: iWargear,
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
        hero.wargear.filter((w) => w.choices)
      ),
    },
  ];
};

export const setHeroChoiceWargear = (
  choice: iWargear,
  wargearChoice: iWargear,
  hero: iHeroModelInArmy
) => {
  // remove all the choices from wargear choice on the hero
  // then add in the choice
  const heroIndex = state.yourArmyHeroes.findIndex((h) => h.id === hero.id);
  state.yourArmyHeroes[heroIndex].wargearFromChoices = [];
  state.yourArmyHeroes[heroIndex].wargearFromChoices = [{ ...choice }];
};

export const setWarriorChoiceWargear = (
  choice: iWargear,
  wargearChoice: iWargear,
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

  state.yourArmyHeroes[heroIndex].warband.push({ ...model, id: nanoid() });
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
