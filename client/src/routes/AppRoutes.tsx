import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthPage from "../MainSocialMediaApp/Auth/page/AuthPage";
import ResetPasswordPage from "../MainSocialMediaApp/ResetPassword/page/ResetPasswordPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/page" element={<h1>Page</h1>} />
        <Route path="resetPassword" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
