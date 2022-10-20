import { iModelInArmy } from "../data/models";
import { getActiveWargear } from "../utils";

export const ActiveWargear = ({ model }: { model: iModelInArmy }) => {
  return (
    <ul>
      {getActiveWargear(model).map((x) => {
        return <li>{x.name}</li>;
      })}
    </ul>
  );
};
