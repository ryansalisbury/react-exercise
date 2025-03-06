import { MUIDataTableColumn } from "mui-datatables";
import { useMemo } from "react";
import { isUndefined, startCase } from "lodash";
import { convertUTCToDateString } from "./useGetExpenseListColumns.utilities";
interface Props {
  data: any;
  isLoading: boolean | undefined;
}
let columns: MUIDataTableColumn[] = [
  {
    name: "id",
    label: "ID",
    options: { filter: false },
  },
  {
    name: "date",
    label: "Date",
    options: { filter: false },
  },
  {
    name: "amount",
    label: "Amount",
    options: { filter: false },
  },
  {
    name: "merchant",
    label: "Merchant",
    options: { filter: false },
  },
  {
    name: "category",
    label: "Category",
    options: { filter: false },
  },
];

export const useGetExpenseListColumns = ({ data, isLoading }: Props) => {
  return useMemo(() => {
    if (isUndefined(isLoading) || isLoading) {
      return columns;
    }

    columns.forEach((column) => {
      if (!isUndefined(column.options)) {
        switch (column.name) {
          case "date":
            column.options.customBodyRenderLite = (dataIndex) =>
              convertUTCToDateString(data[dataIndex].date);
            break;
          case "amount":
            column.options.customBodyRenderLite = (dataIndex) =>
              `£${data[dataIndex].amount}`;
            break;
          case "category":
            column.options.customBodyRenderLite = (dataIndex) =>
              startCase(data[dataIndex].category);
            break;
          default:
            break;
        }
      }
    });
    return columns;
  }, [isLoading, data]);
};
