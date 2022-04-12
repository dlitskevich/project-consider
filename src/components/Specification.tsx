import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { setItemSpecWeight } from "../redux/reducers/itemsSlice";
import { SpecificationSelector } from "./SpecificationSelector";

type Props = {
  itemName: string;
  name: string;
  value: string | number;
  weight: number;
};

export const Specification = ({ itemName, name, value, weight }: Props) => {
  const dispatch = useAppDispatch();

  const setWeight = (newWeight: number) => {
    dispatch(setItemSpecWeight({ itemName, name, value, weight: newWeight }));
  };

  return (
    <td>
      <div className="specification">
        <div className="specification-value">{value}</div>
        <SpecificationSelector setWeight={setWeight} weight={weight} />
      </div>
    </td>
  );
};
