import { Crit, Spec } from "../types/CriterionItem";

export const criterionSpecWeight = (values: string[], type: string) => {
  const crit = Crit[type as keyof typeof Crit];
  const data = values.map((v) => (isNaN(parseFloat(v)) ? 0 : parseFloat(v)));
  const functionTypes = {
    [Crit.bool]: boolFunc({}),
    [Crit.linear]: linearFunc(data),
    [Crit.normal]: normalFunc(data),
  };
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!functionTypes[crit]) {
    return (spec: Spec) => spec.weight;
  }

  return functionTypes[crit];
};

const boolFunc = (parameters: { true?: string[]; false?: string[] }) => {
  const boolValues = {
    true: ["да"].concat(parameters.true ? parameters.true : []),
    false: ["нет"].concat(parameters.false ? parameters.false : []),
  };

  return (spec: Spec) => {
    const testValue = spec.value.toLowerCase().trim();
    if (boolValues.true.includes(testValue)) {
      return 1;
    }
    if (boolValues.false.includes(testValue)) {
      return -1;
    }
    return testValue === "" ? -1 : 1;
  };
};

// const boolFuncP = (
//   value: string,
//   parameters: { true: string[]; false: string[] }
// ) => {};

const linearFunc = (data: number[]) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const mean = (max - min) / data.length;
  const a = Math.max(mean - min, max - mean);
  return (spec: Spec) => {
    const testValue = parseFloat(spec.value);
    return isNaN(testValue) ? mean / a : (testValue - mean) / a;
  };
};

const normalFunc = (data: number[]) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const mean = (max - min) / data.length;
  const a = Math.max(mean - min, max - mean);
  return (spec: Spec) => {
    const testValue = parseFloat(spec.value);
    return isNaN(testValue) ? mean / a : (testValue - mean) / a;
  };
};

// type boolArgs = {
//   true: string[];
//   false: string[];
// };
// type linearArgs = {
//   a: number;
//   b: number;
// };

// type gaussArgs = {
//   mean: number;
//   s: number;
// };
