import { BrowserRouter, Routes, Route } from "react-router-dom";
import WikiListPage from "./page/WikiListPage";

const AppRouter = () => {
  return (
    <BrowserRouter basename="/wikiList">
      <Routes>
        <Route path="/" element={<WikiListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
