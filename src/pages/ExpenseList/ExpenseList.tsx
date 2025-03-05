import { Skeleton, Stack } from "@mui/material";
import { useGetExpenseData } from "./hooks/useGetExpenseData/useGetExpenseData";
import { useGetExpenseListColumns } from "./hooks/useGetExpenseListColumns/useGetExpenseListColumns";
import MUIDataTable from "mui-datatables";

const ExpenseList: React.FC = () => {
  const { data, isLoading } = useGetExpenseData();
  const columns = useGetExpenseListColumns();

  return (
    <Stack padding={10}>
      <MUIDataTable
        title="Expenses"
        data={isLoading ? [] : data}
        columns={columns}
      />
      {isLoading && (
        <div className="table-overlay">
          <Skeleton variant="rectangular" width="100%"></Skeleton>
        </div>
      )}
    </Stack>
  );
};

export default ExpenseList;
