import { signInFields, signUpFields } from "./authFormFields";

import classes from "./AuthForm.module.css";

interface AuthFormProps {
  hasAccount: boolean;
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthForm: React.FC<AuthFormProps> = ({ hasAccount, setHasAccount }) => {
  const fields = hasAccount ? signInFields : signUpFields;

  const transformLabelsToShowThemProperly = (notTransformedlabel: string) => {
    let transformedLabel =
      notTransformedlabel[0].toUpperCase() +
      notTransformedlabel
        .slice(1)
        .replace(/([A-Z])/g, " $1")
        .trim();

    return transformedLabel;
  };

  const transformPlaceHolderToShowThemProperly = (notTransformedPL: string) => {
    if (notTransformedPL === "confirmPassword") {
      return "Confirm your Password";
    }

    let transformedPL =
      "Enter your " +
      notTransformedPL
        .slice(0)
        .replace(/([A-Z])/g, " $1")
        .trim();
    return transformedPL;
  };

  const swapHandler = () => {
    setHasAccount((prevState) => !prevState);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Form Submitted!");
  };

  return (
    <>
      <div className={classes.componentContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h1 className={classes.formTitle}>
            {hasAccount ? "Sign in to your account" : "Create your account"}
          </h1>
          {fields.map((field) => (
            <div className={classes.field} key={field.name}>
              <label className={classes.label}>
                {transformLabelsToShowThemProperly(field.name)}
              </label>
              <input
                className={classes.input}
                name={field.name}
                type={field.type}
                placeholder={transformPlaceHolderToShowThemProperly(field.name)}
              />
            </div>
          ))}
          <button className={classes.submitButton} type="submit">
            {hasAccount ? "Sign In" : "Sign Up"}
          </button>
          <div className={classes.changeFormFieldContainer}>
            <span className={classes.span}>
              {hasAccount ? "Already have account?" : "Dont have account?"}
            </span>
            <button
              className={classes.changeFormSubmit}
              onClick={swapHandler}
              type="button"
            >
              {hasAccount ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <button className={classes.googleButton} type="submit">
            Sign in with Google
          </button>
        </form>
        <div className={classes.description}>
          <h1>Desciption</h1>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
