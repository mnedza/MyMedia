import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

interface AuthPageData {
  isLoggedIn: boolean;
}

const AuthPage: React.FC = () => {
  const [loginData, setLoginData] = useState<AuthPageData>({
    isLoggedIn: false,
  });

  const authHandler = () => {
    setLoginData((prevState) => ({
      ...prevState,
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  return (
    <div>
      {loginData.isLoggedIn && <SignIn />}
      {!loginData.isLoggedIn && <SignUp />}
      <button onClick={authHandler}>sign in / sign up</button>
    </div>
  );
};

export default AuthPage;
