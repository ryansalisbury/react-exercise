import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../../../../services/Expenses";

export const useGetExpenseData = () => {
  const query = useQuery({ queryKey: ["expenses"], queryFn: getExpenses });
  return query;
};
