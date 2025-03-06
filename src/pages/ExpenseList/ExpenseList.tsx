import { Stack, Typography } from "@mui/material";
import { useGetExpenseData } from "./hooks/useGetExpenseData/useGetExpenseData";
import { useGetExpenseListColumns } from "./hooks/useGetExpenseListColumns/useGetExpenseListColumns";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import ErrorAlert from "./components/ErrorAlert";
import LoadingAlert from "./components/LoadingAlert";
import { useGetDataTableOptions } from "./hooks/useGetDataTableOptions/useGetDataTableOptions";

const ExpenseList: React.FC = () => {
  const { data, isLoading, isError, refetch } = useGetExpenseData();
  const columns = useGetExpenseListColumns({ data, isLoading });
  const options: MUIDataTableOptions = useGetDataTableOptions({
    isLoading,
    isError,
  });

  return (
    <Stack padding={10}>
      <MUIDataTable
        title={
          <Typography variant="h4" fontWeight="bold" padding={2}>
            Expenses
          </Typography>
        }
        data={isLoading || isError ? [] : data}
        columns={columns}
        options={options}
      />
      {isLoading && <LoadingAlert />}
      {isError && <ErrorAlert onRetry={refetch} />}
    </Stack>
  );
};

export default ExpenseList;
