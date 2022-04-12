import React from "react";

type Props = {
  setWeight: (w: number) => void;
  weight: number;
};

export const SpecificationSelector = ({ setWeight, weight }: Props) => {
  const weights = [
    { value: 1, text: "good" },
    { value: 0, text: "ok" },
    { value: -1, text: "bad" },
  ];
  return (
    <div className="specification-selector">
      {weights.map((w) => (
        <div
          key={w.text}
          className={
            "specification-selector-" +
            w.text +
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
