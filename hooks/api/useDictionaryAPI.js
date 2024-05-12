import { useQuery } from "react-query";
import dictionaryServices from "../../services/dictionaryServices";

export const useGetMeaning = (word) => {
  return useQuery({
    queryKey: ["meaning", word],
    queryFn: dictionaryServices.getWordMeaning,
    enabled: false,
  });
};
