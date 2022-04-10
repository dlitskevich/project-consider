import React from "react";

type Props = {
  name: string;
  value: number;
};

export const Criteria = ({ name, value }: Props) => {
  return (
    <>
      <th className="criteria">
        <div className="criteria-name">{name}</div>
        <div className="criteria-value">{value}</div>
      </th>
    </>
  );
};
