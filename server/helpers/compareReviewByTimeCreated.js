import moment from "moment";

export const compareReviewByTimeCreated = (dateTimeA, dateTimeB) => {
  var momentA = moment(dateTimeA.createdAt).valueOf();
  var momentB = moment(dateTimeB.createdAt).valueOf();
  return momentA.valueOf() > momentB.valueOf() ? -1 : 1;
};
