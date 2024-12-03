import classes from "./AuthForm.module.css";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const FormComponent: React.FC<FormProps> = ({ children, ...props }) => {
  return (
    <form {...props} className={classes.form}>
      {children}
    </form>
  );
};

export default FormComponent;
