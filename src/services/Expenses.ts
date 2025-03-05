import axios from "axios";

export const getExpenses = async () => {
  const response = await axios.get(
    "https://tip-transactions.vercel.app/api/transactions?page=1"
  );

  return response.data.transactions;
};
