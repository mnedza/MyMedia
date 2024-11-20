import { useState } from "react";
import AuthForm from "../components/AuthForm";

const AuthPage: React.FC = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(false);
  return (
    <>
      <AuthForm hasAccount={hasAccount} setHasAccount={setHasAccount} />
    </>
  );
};

export default AuthPage;
