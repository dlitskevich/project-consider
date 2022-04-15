import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { setCriteriaWeight } from "../redux/reducers/criteriaSlice";
import { CriterionType } from "../types/CriterionItem";

type Props = {
  criterion: CriterionType;
};

export const Criterion = ({ criterion }: Props) => {
  const dispatch = useAppDispatch();

  const setWeight = (
    event: React.ChangeEvent<HTMLInputElement>,
    weight: string
  ) => {
    const newWeight =
      weight === "" ? 0 : Math.min(Math.max(parseInt(weight), 0), 100);
    dispatch(
      setCriteriaWeight({
        ...criterion,
        weight: newWeight,
      })
    );
    event.target.value = newWeight.toString();
  };
  return (
    <>
      <th>
        <div className="criterion">
          <div className="criterion-name">{criterion.name}</div>
          <input
            type="number"
            className="criterion-weight"
            value={criterion.weight}
            min={0}
            max={100}
            onChange={(e) => setWeight(e, e.target.value)}
          />
        </div>
      </th>
    </>
  );
};
