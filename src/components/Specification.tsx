import React from "react";

type Props = {
  name: string;
  value: string | number;
};

export const Specification = ({ value }: Props) => {
  return <td className="specification">{value}</td>;
};
