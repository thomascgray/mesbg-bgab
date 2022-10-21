import { iHeroModelInArmy, iModel } from "../data/models";
import * as State from "../state";

export interface iAddWarriorsToWarbandProps {
  choices: iModel[];
  hero: iHeroModelInArmy;
}
export const AddWarriorsToWarband = (props: iAddWarriorsToWarbandProps) => {
  const { choices, hero } = props;

  return (
    <div>
      {choices.map((m) => {
        return (
          <button
            key={`${hero.id}-${m.name}`}
            className="mr-2 inline-block bg-stone-200 px-4 py-2 text-xs hover:scale-105 hover:bg-stone-300 active:scale-95"
            onClick={() => {
              State.addWarbandWarriorToHero(m, hero.id);
            }}
          >
            <p>{m.name}</p>
          </button>
        );
      })}
    </div>
  );
};
