import "./assets/css/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import Drawer from "./components/common/Drawer";
import Router from "./router/router";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import { useLayoutEffect } from "react";
import CONSTANTS from "./constants/constants";
import { useSetRecoilState } from "recoil";
import { themeIsDark } from "./store/themeIsDark";
import "./index.css";

const App = (): JSX.Element => {
  const setIsDark = useSetRecoilState(themeIsDark);

  useLayoutEffect(() => {
    const theme = localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY.THEME);
    const root = document.documentElement;
    root.dataset.theme = theme;

    if (theme === CONSTANTS.THEME.DARK) {
      root.classList.add(theme);
      setIsDark(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <input type="checkbox" id="side-menu" className="drawer-toggle" />
      <section className="drawer-content">
        <Nav />
        <section className="main pt-16">
          <Router />
        </section>
        <Footer />
      </section>
      <Drawer />
    </BrowserRouter>
  );
};

export default App;
