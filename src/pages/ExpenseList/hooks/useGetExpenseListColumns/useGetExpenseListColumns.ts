import { MUIDataTableColumn } from "mui-datatables";
import { useMemo } from "react";
import { isUndefined, startCase } from "lodash";
import { convertUTCToDateString } from "./useGetExpenseListColumns.utilities";
interface Props {
  data: any;
  isLoading: boolean | undefined;
}
const columns = [
  {
    name: "id",
    label: "ID",
    options: { filter: true },
  },
  {
    name: "date",
    label: "Date",
    options: { filter: true },
  },
  {
    name: "amount",
    label: "Amount",
    options: { filter: true },
  },
  {
    name: "merchant",
    label: "Merchant",
    options: { filter: true },
  },
  {
    name: "category",
    label: "Category",
    options: { filter: true },
  },
];

const columnsObj: Record<string, MUIDataTableColumn> = {
  id: {
    name: "id",
    label: "ID",
    options: { filter: true },
  },
  date: {
    name: "date",
    label: "Date",
    options: { filter: true },
  },
  amount: {
    name: "amount",
    label: "Amount",
    options: { filter: true },
  },
  merchant: {
    name: "merchant",
    label: "Merchant",
    options: { filter: true },
  },
  category: {
    name: "category",
    label: "Category",
    options: { filter: true },
  },
};

export const useGetExpenseListColumns = ({ data, isLoading }: Props) => {
  return isUndefined(isLoading) || isLoading
    ? useMemo(() => columns, [])
    : useMemo(() => {
        const dateColumnWithOverrides: MUIDataTableColumn = {
          ...columnsObj.date,
          options: {
            ...columnsObj.date.options,
            customBodyRenderLite: (dataIndex) => {
              return convertUTCToDateString(data[dataIndex].date);
            },
          },
        };
        const amountColumnWithOverrides: MUIDataTableColumn = {
          ...columnsObj.amount,
          options: {
            ...columnsObj.amount.options,
            customBodyRenderLite: (dataIndex) => {
              return `£${data[dataIndex].amount}`;
            },
          },
        };
        const categoryColumnWithOverrides: MUIDataTableColumn = {
          ...columnsObj.category,
          options: {
            ...columnsObj.category.options,
            customBodyRenderLite: (dataIndex) => {
              return startCase(data[dataIndex].category);
            },
          },
        };

        return [
          columnsObj.id,
          dateColumnWithOverrides,
          amountColumnWithOverrides,
          columnsObj.merchant,
          categoryColumnWithOverrides,
        ];
      }, []);
};
