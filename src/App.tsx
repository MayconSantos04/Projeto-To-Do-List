import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageConponents from "./pages/page";
import PageHome from "./pages/Page-home";
import LayoutMain from "./pages/Layout-main";

export default function App() {
  return (
    <BrowserRouter basename="/Projeto-To-Do-List">
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="componentes" element={<PageConponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}