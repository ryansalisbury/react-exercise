import { Skeleton, Stack, Typography } from "@mui/material";
import { useGetExpenseData } from "./hooks/useGetExpenseData/useGetExpenseData";
import { useGetExpenseListColumns } from "./hooks/useGetExpenseListColumns/useGetExpenseListColumns";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";

const options: MUIDataTableOptions = {
  filter: false,
  search: false,
  print: false,
  download: false,
  viewColumns: false,
  selectableRows: "none",
};

const ExpenseList: React.FC = () => {
  const { data, isLoading } = useGetExpenseData();
  const columns = useGetExpenseListColumns({ data, isLoading });

  return (
    <Stack padding={10}>
      <MUIDataTable
        title={
          <Typography variant="h4" fontWeight="bold" padding={2}>
            Expenses
          </Typography>
        }
        data={isLoading ? [] : data}
        columns={columns}
        options={options}
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
