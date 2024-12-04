import { useState } from "react";
import AuthForm from "../components/AuthForm";
import Background from "../../../GeneralComponents/Background/Background";

const AuthPage: React.FC = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(false);
  return (
    <>
      <Background>
        <AuthForm hasAccount={hasAccount} setHasAccount={setHasAccount} />
      </Background>
    </>
  );
};

export default AuthPage;
