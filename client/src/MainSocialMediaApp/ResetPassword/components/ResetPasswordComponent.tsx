import styles from "./ResetPassword.module.css";
import classes from "../../Auth/components/AuthForm.module.css";
import FormComponent from "../../Auth/components/FormComponent";
import FormButton from "../../Auth/components/FormButton";
import FormField from "../../Auth/components/FormField";
import { Link } from "react-router-dom";

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  console.log("Reset Password Form Submitted!");
};

const ResetPasswordComponent = () => {
  return (
    <>
      <FormComponent onSubmit={handleSubmit}>
        <h1 className={classes.logo}>MyMedia</h1>
        <h2 className={`${classes.formTitle} ${styles.formTitle}`}>
          Forgot your password?
        </h2>
        <div className={`${classes.changeFormFieldContainer} ${styles.input}`}>
          <p className={classes.span}>
            Remember your password?
            <Link to="/" className={classes.changeFormSubmit}>
              Login here
            </Link>
          </p>
        </div>

        <FormField key="email" name="email" type="email" />

        <FormButton
          className={`${classes.submitButton} ${styles.submitButton}`}
          type="submit"
        >
          Reset Password
        </FormButton>
      </FormComponent>
    </>
  );
};

export default ResetPasswordComponent;
