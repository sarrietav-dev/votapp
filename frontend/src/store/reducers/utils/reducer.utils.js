/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-underscore-dangle */
export const getElection = (elections, _id) =>
  elections.filter((election) => election._id !== _id);

export const deleteOne = (elections, _id) =>
  elections.filter((election) => election._id !== _id);

export const editElection = (elections, data) => {
  const electionsWithoutTarget = deleteOne(elections, data._id);

  const targetElection = { ...data };

  return [...electionsWithoutTarget, targetElection];
};
