import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { setCriteriaWeight } from "../redux/reducers/criteriaSlice";

type Props = {
  name: string;
  weight: number;
};

export const Criterion = ({ name, weight }: Props) => {
  const dispatch = useAppDispatch();

  const setWeight = (
    event: React.ChangeEvent<HTMLInputElement>,
    weight: string
  ) => {
    const res =
      weight === "" ? 0 : Math.min(Math.max(parseInt(weight), 0), 100);
    dispatch(
      setCriteriaWeight({
        name,
        weight: res,
      })
    );
    event.target.value = res.toString();
  };
  return (
    <>
      <th>
        <div className="criterion">
          <div className="criterion-name">{name}</div>
          <input
            type="number"
            className="criterion-weight"
            value={weight}
            min={0}
            max={100}
            onChange={(e) => setWeight(e, e.target.value)}
          />
        </div>
      </th>
    </>
  );
};
