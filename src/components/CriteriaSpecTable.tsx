import React from "react";
import { Item, CriterionItem, CriterionType } from "../types/CriterionItem";
import { Criterion } from "./Criterion";
import { ResultChoice } from "./ResultChoice";
import { Specification } from "./Specification";

import { addCriteria } from "../redux/reducers/criteriaSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addItem } from "../redux/reducers/itemsSlice";

type Props = {
  data: CriterionItem;
};

export const CriteriaSpecTable = ({ data }: Props) => {
  const dispatch = useAppDispatch();
  data.criteria.forEach((crit) => dispatch(addCriteria(crit)));
  data.items.forEach((item) => dispatch(addItem(item)));

  const selectedItems = useAppSelector((state) => state.items.items);
  const selectedCriteria = useAppSelector((state) => state.criteria.criteria);

  return (
    <table className="criteria-spec-table">
      <thead>
        <tr>
          <th>Criterias</th>
          {selectedItems.map((item) => (
            <th key={item.name}>{item.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {selectedCriteria.map((criterion) => (
          <tr key={criterion.name}>
            <Criterion criterion={criterion} key={criterion.name} />
            {selectedItems.map((item) => {
              const spec = item.specs.find(
                (spec) => spec.name === criterion.name
              ) || { name: criterion.name, value: "", weight: 0 };
              return (
                <Specification
                  itemName={item.name}
                  name={spec.name}
                  value={spec.value}
                  weight={spec.weight}
                  key={item.name + spec.name}
                />
              );
            })}
          </tr>
        ))}
      </tbody>
      <Footer items={selectedItems} criteria={selectedCriteria} />
    </table>
  );
};

type FooterProps = {
  items: Item[];
  criteria: CriterionType[];
};

const Footer = ({ items, criteria }: FooterProps) => {
  return (
    <tfoot>
      <tr>
        <th>Result</th>
        {items.map((item) => (
          <ResultChoice key={item.name} item={item} criteria={criteria} />
        ))}
      </tr>
    </tfoot>
  );
};
