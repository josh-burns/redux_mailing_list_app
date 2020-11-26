export const INFO_SUBMITTED = "INFO_SUBMITTED";

export const submitFinalUserInfo = (email, name) => ({
  type: INFO_SUBMITTED,
  email: email,
  name: name,
});

export const DUPLICATE = "DUPLICATE";

export const duplicateSetAction = (bool) => ({
  type: DUPLICATE,
  isDuplicate: bool,
});
