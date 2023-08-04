import { HomePage } from "core/app/pages/HomePage";
import { ResumePage } from "core/app/pages/Resume";
import { Route, Routes } from "react-router-dom";

const Pages = {
  Home: HomePage,
  ResumePage: ResumePage,
};

const Layout = () => {
  return (
    <Routes>
      <Route path="/" Component={Pages.Home} />
      <Route path="/resume" Component={Pages.ResumePage} />
    </Routes>
  );
};

export default Layout;
