import { signInFields } from "./authFormFields";
import { signUpFields } from "./authFormFields";

import classes from "./AuthForm.module.css";
import FormComponent from "./FormComponent";
import FormField from "./FormField";
import FormButton from "./FormButton";
import { Link } from "react-router-dom";

interface AuthFormProps {
  hasAccount: boolean;
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthForm: React.FC<AuthFormProps> = ({ hasAccount, setHasAccount }) => {
  const fields = hasAccount ? signInFields : signUpFields;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Sign up Form Submitted!");
  };

  const swapHandler = () => {
    setHasAccount((prevState) => !prevState);
  };

  const LinkClickedHandler = () => {
    setHasAccount(true);
  };

  return (
    <FormComponent onSubmit={handleSubmit}>
      <h1 className={classes.logo}>MyMedia</h1>
      <h2 className={classes.formTitle}>
        {hasAccount ? "Sign in to your account" : "Create your account"}
      </h2>
      {fields.map((field) => (
        <FormField key={field.name} name={field.name} type={field.type} />
      ))}

      {hasAccount && (
        <>
          <Link
            to="/reset-password"
            onClick={LinkClickedHandler}
            className={classes.forgotPasswordButton}
          >
            Forgot password?
          </Link>
        </>
      )}
      <FormButton className={classes.submitButton} type="submit">
        {hasAccount ? "Sign In" : "Sign Up"}
      </FormButton>
      <div className={classes.changeFormFieldContainer}>
        <span className={classes.span}>
          {hasAccount ? "Dont have account?" : "Already have account?"}
        </span>

        <FormButton
          className={classes.changeFormSubmit}
          onClick={swapHandler}
          type="button"
        >
          {hasAccount ? "Sign Up" : "Sign In"}
        </FormButton>
      </div>
      <FormButton className={classes.googleButton} type="submit">
        Sign in with Google
      </FormButton>
    </FormComponent>
  );
};

export default AuthForm;
