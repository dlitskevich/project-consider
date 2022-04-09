import React from "react";

type Props = {
  name: string;
};

export const Criteria = ({ name }: Props) => {
  return <p>{name}</p>;
};
