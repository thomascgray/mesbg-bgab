import { iModel } from "../data/models";
import * as State from "../state";

export interface iAddHeroToArmyProps {
  hero: iModel;
}

export const AddHeroToArmy = (props: iAddHeroToArmyProps) => {
  const { hero } = props;
  return (
    <button
      className="block w-full bg-stone-200 px-4 py-2 text-sm hover:scale-105 hover:bg-stone-300 active:scale-95"
      onClick={() => {
        State.addHeroToArmy(hero);
      }}
    >
      <span className="text-center">
        <span className="block">{hero.name}</span>
        <span className="block text-xs font-bold">{hero.cost}pts</span>
      </span>
    </button>
  );
};
