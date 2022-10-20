import { iHeroModelInArmy, iModelInArmy } from "../data/models";
import * as State from "../state";

export interface iWarriorButtonsProps {
  model: iModelInArmy;
  hero: iHeroModelInArmy;
}
export const WarriorButtons = (props: iWarriorButtonsProps) => {
  const { model, hero } = props;

  return (
    <div className=" flex flex-row items-center space-x-2">
      {/* incrase */}
      <button
        onClick={() => {
          State.increaseWarbandWarriorQuantity(model, hero);
        }}
        className="block rounded-full bg-stone-300 p-1 text-sm hover:scale-105 hover:bg-stone-400 active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>

      {/* decrease */}
      <button
        onClick={() => {
          State.decreaseWarbandWarriorQuantity(model, hero);
        }}
        disabled={model.quantity <= 1}
        className="block rounded-full bg-stone-300 p-1 text-sm hover:scale-105 hover:bg-stone-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12h-15"
          />
        </svg>
      </button>

      {/* duplicate */}
      <button
        onClick={() => {
          State.duplicateWarriorInWarband(model, hero);
        }}
        className="block rounded-full bg-stone-300 p-1 text-sm hover:scale-105 hover:bg-stone-400 active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
          />
        </svg>
      </button>

      {/* delete */}
      <button
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this warrior?")) {
            State.deleteWarriorFromWarband(model, hero);
          }
        }}
        className="block rounded-full bg-red-200 p-1 text-sm hover:scale-105 hover:bg-red-300 active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};
