import React from "react";
import { CriterionType, Item } from "../types/CriterionItem";
import { ResultChoice } from "./ResultChoice";

type FooterProps = {
  items: Item[];
  criteria: CriterionType[];
};

export const CriteriaSpecFooter = ({ items, criteria }: FooterProps) => {
  const itemResults = items.map((item) => getItemResult(item, criteria));
  const toStd = toStandart(itemResults);
  return (
    <tfoot>
      <tr>
        <th>Result</th>
        {itemResults.map((item) => (
          <ResultChoice key={item} value={item} stdValue={toStd(item)} />
        ))}
      </tr>
    </tfoot>
  );
};

const toStandart = (array: number[]) => {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const delta = max - min;
  return (e: number) => (e - min) / delta;
};

const getItemResult = (item: Item, criteria: CriterionType[]) => {
  return criteria.reduce((acc, crit) => {
    return acc + crit.weight * getItemWeight(item, crit);
  }, 0);
};

const getItemWeight = (item: Item, criteria: CriterionType) => {
  const spec = item.specs.find((v) => v.name === criteria.name);
  if (spec) {
    return spec.weight;
  }
  return 0;
};
