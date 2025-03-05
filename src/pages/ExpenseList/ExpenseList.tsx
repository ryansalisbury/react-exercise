import { useGetExpenseData } from "./hooks/useGetExpenseData/useGetExpenseData";

const ExpenseList: React.FC = () => {
  const { data } = useGetExpenseData();
  console.log(data);
  return <>Some Data Table rendered here</>;
};

export default ExpenseList;
