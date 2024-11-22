import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthPage from "../MainSocialMediaApp/Auth/page/AuthPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/page" element={<h1>Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
