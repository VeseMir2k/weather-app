// ~ timestampToDate
export const timestampToDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const month = date.getMonth() - 1;
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
