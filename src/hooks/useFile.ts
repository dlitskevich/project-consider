import { useState } from "react";
import { CriterionItem } from "../types/CriterionItem";

type Args = {
  url: string;
};

export const useFile = ({ url }: Args) => {
  const [data, setData] = useState<CriterionItem>();
  const [isLoading, setIsLoading] = useState(true);
  import(`../${url}`).then((data) => {
    setData(data.default as CriterionItem);
    setIsLoading(false);
  });

  return { data, isLoading };
};
