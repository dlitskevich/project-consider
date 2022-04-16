import React from "react";
import { criterionSpecWeight } from "../functions/criterionSpecWeight";
import { CriterionType, Item, Spec } from "../types/CriterionItem";
import { Criterion } from "./Criterion";
import { Specification } from "./Specification";

type Props = {
  criterion: CriterionType;
  items: Item[];
};

export const CriteriaSpecRow = ({ criterion, items }: Props) => {
  const itemsSpec = items.map((item) => ({
    itemName: item.name,
    spec: getSpec(item, criterion),
  }));
  const func = getWeightFunc(
    criterion,
    itemsSpec.map((i) => i.spec)
  );
  return (
    <tr>
      <Criterion criterion={criterion} key={criterion.name} />
      {itemsSpec.map((i) => {
        return (
          <Specification
            key={i.itemName + i.spec.name}
            itemName={i.itemName}
            spec={{ ...i.spec, weight: func(i.spec) }}
            isCustom={criterion.type === "custom"}
          />
        );
      })}
    </tr>
  );
};

const getSpec = (item: Item, criterion: CriterionType) => {
  return (
    item.specs.find((spec) => spec.name === criterion.name) || {
      name: criterion.name,
      value: "",
      weight: 0,
    }
  );
};

const getWeightFunc = (criterion: CriterionType, specs: Spec[]) => {
  const values = specs.map((s) => s.value);
  const func = criterionSpecWeight(values, criterion.type);

  return func;
};
