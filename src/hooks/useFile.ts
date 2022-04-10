import { useState } from "react";
import { CriteriaItem } from "../types/CriteriaItem";

type Args = {
  url: string;
};

export const useFile = ({ url }: Args) => {
  const [data, setData] = useState<CriteriaItem>();
  const [isLoading, setIsLoading] = useState(true);
  import(`../${url}`).then((data) => {
    setData(data.default as CriteriaItem);
    setIsLoading(false);
  });

  return { data, isLoading };
};
