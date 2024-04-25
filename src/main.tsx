import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { cartState } from "./store/cart";
import { CART_ITEM } from "./constants/category";

const container: HTMLElement = document.getElementById("app")!;
const root = createRoot(container);
const initialValue = JSON.parse(localStorage.getItem(CART_ITEM) as string) ?? {};

root.render(
  <React.StrictMode>
    {/* Recoil이나 Redux를 사용하시면 됩니다. 현업에서는 Redux-toolkit이 가장 많습니다. */}
    <RecoilRoot initializeState={() => Object.assign(cartState, initialValue)}>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
