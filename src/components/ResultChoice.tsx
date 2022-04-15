import React from "react";
import { CriterionType, Item } from "../types/CriterionItem";

type Props = {
  item: Item;
  criteria: CriterionType[];
};

export const ResultChoice = ({ item, criteria }: Props) => {
  const res = criteria.reduce((acc, crit) => {
    return acc + crit.weight * getItemWeight(item, crit);
  }, 0);
  return <td className="result-choice">{res}</td>;
};

const getItemWeight = (item: Item, criteria: CriterionType) => {
  const spec = item.specs.find((v) => v.name === criteria.name);
  if (spec) {
    return spec.weight;
  }
  return 0;
};
