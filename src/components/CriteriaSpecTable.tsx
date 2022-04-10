import React from "react";
import { CriteriaItem } from "../types/CriteriaItem";
import { Criteria } from "./Criteria";
import { Specification } from "./Specification";

type Props = {
  data: CriteriaItem;
};
export const CriteriaSpecTable = ({ data }: Props) => {
  const selectedItems = data.items;
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
        {data.criterias.map((criteria) => (
          <tr key={criteria.name}>
            <Criteria
              name={criteria.name}
              value={criteria.value}
              key={criteria.name}
            />
            {selectedItems.map((item) => {
              const spec = item.specs.find(
                (spec) => spec.name === criteria.name
              ) || { name: "", value: "" };
              return (
                <Specification
                  name={spec.name}
                  value={spec.value}
                  key={item.name + spec.name}
                />
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
