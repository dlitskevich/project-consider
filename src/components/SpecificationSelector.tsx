import React from "react";

type Props = {
  setWeight: (w: number) => void;
  weight: number;
};

export const SpecificationSelector = ({ setWeight, weight }: Props) => {
  const weights = [
    { value: 1, type: "good" },
    { value: 0, type: "ok" },
    { value: -1, type: "bad" },
  ];
  return (
    <div className="specification-selector">
      {weights.map((w) => (
        <div
          key={w.type}
          className={
            "specification-weight" +
            " " +
            w.type +
            " " +
            (weight === w.value ? "active" : "")
          }
          onClick={() => setWeight(w.value)}
        >
          {w.value}
        </div>
      ))}
    </div>
  );
};
