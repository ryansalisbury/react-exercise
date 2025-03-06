import { MUIDataTableOptions } from "mui-datatables";
import { useMemo } from "react";

interface Props {
  isLoading: boolean;
  isError: boolean;
}

export const useGetDataTableOptions = ({
  isLoading,
  isError,
}: Props): MUIDataTableOptions =>
  useMemo<MUIDataTableOptions>(() => {
    return {
      filter: false,
      search: false,
      print: false,
      download: false,
      viewColumns: false,
      selectableRows: "none",
      textLabels: {
        body: {
          noMatch: isLoading
            ? "Loading..."
            : isError
            ? "Error loading data"
            : "Sorry, no matching records found",
        },
      },
    };
  }, [isLoading, isError]);
