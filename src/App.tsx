import "./assets/css/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import Drawer from "./components/common/Drawer";
import Router from "./router/router";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import { useLayoutEffect, useRef } from "react";
import CONSTANTS from "./constants/constants";
import { useSetRecoilState } from "recoil";
import { themeIsDark } from "./store/themeIsDark";
import "./index.css";

const App = (): JSX.Element => {
  const setIsDark = useSetRecoilState(themeIsDark);
  const hamburgerButton = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const theme = localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY.THEME);
    const root = document.documentElement as HTMLElement;

    if (theme !== null) {
      root.dataset.theme = theme;
    }

    if (theme === CONSTANTS.THEME.DARK) {
      root.classList.add(theme);
      setIsDark(true);
    }
  }, []);

  const closeOverlay = () => {
    console.log("is closed?", hamburgerButton);
    hamburgerButton.current?.click();
  };

  return (
    <BrowserRouter>
      <input type="checkbox" id="side-menu" className="drawer-toggle" ref={hamburgerButton} />
      <section className="drawer-content">
        <Nav />
        <section className="main pt-16">
          <Router />
        </section>
        <Footer />
      </section>
      <Drawer closeOverlay={closeOverlay} />
    </BrowserRouter>
  );
};

export default App;
