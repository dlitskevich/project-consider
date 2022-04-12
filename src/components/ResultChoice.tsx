import React from "react";
import { Criterion, Item } from "../types/CriterionItem";

type Props = {
  item: Item;
  criteria: Criterion[];
};

export const ResultChoice = ({ item, criteria }: Props) => {
  const res = criteria.reduce((acc, crit) => {
    return acc + crit.weight * getItemWeight(item, crit);
  }, 0);
  return <td className="result-choice">{res}</td>;
};

const getItemWeight = (item: Item, criteria: Criterion) => {
  const spec = item.specs.find((v) => v.name === criteria.name);
  if (spec) {
    return spec.weight;
  }
  return 0;
};
