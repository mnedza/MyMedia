export const signInFields = [
  { name: "email", type: "email" },
  { name: "password", type: "password" },
];

export const signUpFields = [
  { name: "username", type: "text" },
  ...signInFields,
  { name: "confirmPassword", type: "password" },
];