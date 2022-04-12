export type CriterionItem = {
  version: number;
  items: Item[];
  criteria: Criterion[];
};

export type Item = {
  name: string;
  specs: Spec[];
};

export type Spec = {
  name: string;
  value: string | number;
  weight: number;
};

export type Criterion = {
  name: string;
  weight: number;
  meta?: string;
};
