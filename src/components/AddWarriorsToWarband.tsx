import { iHeroModelInArmy, iModel } from "../data/models";
import * as State from "../state";

export interface iAddWarriorsToWarbandProps {
  choices: iModel[];
  hero: iHeroModelInArmy;
}
export const AddWarriorsToWarband = (props: iAddWarriorsToWarbandProps) => {
  const { choices, hero } = props;

  return (
    <div className="">
      {choices.map((m) => {
        return (
          <button
            key={`${hero.id}-${m.name}`}
            className="inline-block bg-stone-200 px-4 py-2 text-xs hover:scale-105 hover:bg-stone-300 active:scale-95"
            onClick={() => {
              State.addWarbandWarriorToHero(m, hero.id);
            }}
          >
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <p>{m.name}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
};
