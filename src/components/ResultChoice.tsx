type Props = {
  value: number;
  stdValue: number;
};

export const ResultChoice = ({ value, stdValue }: Props) => {
  const style = {
    "--goodness": stdValue,
  } as React.CSSProperties;
  return (
    <td className="result-choice" style={style}>
      {value}
    </td>
  );
};
