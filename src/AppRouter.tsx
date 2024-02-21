import { BrowserRouter, Routes, Route } from "react-router-dom";
import WikiListPage from "./page/WikiListPage";
import WikiDetailPage from "./page/WikiDetailPage";

const AppRouter = () => {
  return (
    <BrowserRouter basename="/wikiList">
      <Routes>
        <Route path="/" element={<WikiListPage />} />
        <Route path="/detail" element={<WikiDetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
