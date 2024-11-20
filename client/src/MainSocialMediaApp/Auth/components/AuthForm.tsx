import { useState } from "react";

interface AuthFormProps {
  hasAccount: boolean;
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
}

const signInFields = [
  { name: "email", type: "email" },
  { name: "password", type: "password" },
];

const signUpFields = [
  { name: "username", type: "text" },
  ...signInFields,
  { name: "confirmPassword", type: "password" },
];

const AuthForm: React.FC<AuthFormProps> = ({ hasAccount, setHasAccount }) => {
  const fields = hasAccount ? signInFields : signUpFields;

  const swapHandler = () => {
    setHasAccount((prevState) => !prevState);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Form Submitted!");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name}>
            <label>{field.name}</label>
            <input name={field.name} type={field.type} />
          </div>
        ))}
        <div>
          <span>Try to </span>
          <button onClick={swapHandler} type="button">
            {hasAccount ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AuthForm;


// now make validation