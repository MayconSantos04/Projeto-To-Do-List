import Header from "../Core-components/header";
import { Outlet } from "react-router";
import MainContent from "../Core-components/main-content";
import Footer from "../Core-components/Footer";

export default function LayoutMain() {
  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
}
