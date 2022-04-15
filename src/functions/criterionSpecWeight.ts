export const criterionSpecWeight = (
  value: string,
  type: "bool" | "linear" | "gauss"
) => {
  const functionTypes = {
    bool: boolFunc,
    linear: linearFunc,
    gauss: gaussFunc,
  };
  return functionTypes[type];
};

const boolFunc = (
  value: string,
  parameters: { true: string[]; false: string[] }
) => {
  const boolValues = {
    true: ["да"].concat(parameters.true),
    false: ["нет"].concat(parameters.false),
  };
  const testValue = value.toLowerCase().trim();
  if (boolValues.true.includes(testValue)) {
    return true;
  }
  if (boolValues.false.includes(testValue)) {
    return false;
  }
  return testValue === "" ? false : true;
};
const linearFunc = (value: string, parameters = { a: 1, b: 0 }) => {
  try {
    const testValue = parseInt(value);
    return parameters.a * testValue + parameters.b;
  } catch {
    return parameters.b;
  }
};
const gaussFunc = (value: string, parameters = { mean: 0, s: 1 }) => {
  try {
    const testValue = parseInt(value);
    return (testValue - parameters.mean) / parameters.mean;
  } catch {
    return parameters.mean;
  }
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
