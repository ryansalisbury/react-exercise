import axios from "axios";

export const getExpenses = async () => {
  // NOTE: Ideally data would be strongly typed to leverage TS type safety
  try {
    const response = await axios.get(
      "https://tip-transactions.vercel.app/api/transactions?page=1"
    );

    return response.data.transactions;
  } catch (error) {
    console.error(error);
    return [];
  }
};
