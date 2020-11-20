export const submitFinalUserInfo = (email, name, isCreated) => ({
  type: "FINAL_INFO_SUBMITTED",
  email: email,
  name: name,
});
