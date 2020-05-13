export const renderRate = (times) => {
  let rate = "";
  while (times--) rate = `${rate} ⭐`;
  return rate;
};
