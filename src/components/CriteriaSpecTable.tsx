import React from "react";
import { CriteriaSpecFooter } from "./CriteriaSpecFooter";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { addCriteria } from "../redux/reducers/criteriaSlice";
import { addItem } from "../redux/reducers/itemsSlice";

import { CriteriaSpecRow } from "./CriteriaSpecRow";
import { CriterionItem } from "../types/CriterionItem";

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
          <CriteriaSpecRow
            key={criterion.name}
            criterion={criterion}
            items={selectedItems}
          />
        ))}
      </tbody>
      <CriteriaSpecFooter items={selectedItems} criteria={selectedCriteria} />
    </table>
  );
};
