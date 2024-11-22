import { signInFields, signUpFields } from "./authFormFields";

interface AuthFormProps {
  hasAccount: boolean;
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
}

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
