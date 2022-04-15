export type CriterionItem = {
  version: number;
  items: Item[];
  criteria: CriterionType[];
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

export type CriterionType = {
  name: string;
  weight: number;
  meta?: string;
  type: string;
};
