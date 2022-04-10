export type CriteriaItem = {
  version: number;
  items: Item[];
  criterias: Criteria[];
};

type Item = {
  name: string;
  specs: Spec[];
};

type Spec = {
  name: string;
  value: string | number;
};

type Criteria = {
  name: string;
  value: number;
};
