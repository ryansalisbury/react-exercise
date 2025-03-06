import { MUIDataTableOptions } from "mui-datatables";
import { useMemo } from "react";

interface Props {
  isLoading: boolean;
  isError: boolean;
}

const baseOptions: MUIDataTableOptions = {
  filter: false,
  search: false,
  print: false,
  download: false,
  viewColumns: false,
  selectableRows: "none",
};

export const useGetDataTableOptions = ({
  isLoading,
  isError,
}: Props): MUIDataTableOptions =>
  useMemo<MUIDataTableOptions>(() => {
    return {
      ...baseOptions,
      textLabels: {
        ...baseOptions.textLabels,
        body: {
          ...baseOptions.textLabels?.body,
          noMatch: isLoading
            ? "Loading..."
            : isError
            ? "Error loading data"
            : "Sorry, no matching records found",
        },
      },
    };
  }, [baseOptions, isLoading, isError]);
