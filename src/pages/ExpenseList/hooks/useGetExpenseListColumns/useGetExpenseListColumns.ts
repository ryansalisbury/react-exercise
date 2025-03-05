import { useMemo } from "react";

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

export const useGetExpenseListColumns = () => {
  return useMemo(() => columns, []);
};
