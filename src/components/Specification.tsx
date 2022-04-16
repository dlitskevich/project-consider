import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { setItemSpecWeight } from "../redux/reducers/itemsSlice";
import { Spec } from "../types/CriterionItem";
import { SpecificationSelector } from "./SpecificationSelector";

type Props = {
  itemName: string;
  spec: Spec;
  isCustom?: boolean;
};

export const Specification = ({ itemName, spec, isCustom }: Props) => {
  const dispatch = useAppDispatch();

  const setWeight = (newWeight: number) => {
    dispatch(setItemSpecWeight({ itemName, ...spec, weight: newWeight }));
  };

  return (
    <td>
      <div className="specification">
        <div className="specification-value">{spec.value}</div>
        {isCustom === true ? (
          <SpecificationSelector setWeight={setWeight} weight={spec.weight} />
        ) : (
          <>
            <div className="specification-weight">
              {Number.isInteger(spec.weight)
                ? spec.weight
                : spec.weight.toPrecision(2)}
            </div>
          </>
        )}
      </div>
    </td>
  );
};
