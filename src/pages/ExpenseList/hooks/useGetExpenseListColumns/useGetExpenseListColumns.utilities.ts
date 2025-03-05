export const convertUTCToDateString = (isoDateString: string): string => {
  const newDate = new Date(isoDateString);

  const hours = newDate.getHours().toString().padStart(2, "0");
  const minutes = newDate.getMinutes().toString().padStart(2, "0");
  const day = newDate.getDate().toString().padStart(2, "0");
  const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
  const year = newDate.getFullYear().toString().padStart(2, "0");

  return `${hours}:${minutes} - ${day}/${month}/${year}`;
};
