import { Link } from "react-router-dom";
import { CART_ITEM, MENUS } from "../../constants/category";
import ThemeBtn from "./ThemeBtn";
import InputSearch from "./InputSearch";
import { useRecoilValue } from "recoil";
import { cartState } from "../../store/cart";

export default function Nav() {
  const totalItems = useRecoilValue(cartState);
  const itemCount = totalItems.items ? Object.keys(totalItems.items).length : 0;

  return (
    <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
      <div className="flex w-full xl:container xl:m-auto">
        <label htmlFor="side-menu" className="flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-gray-700 dark:stroke-current"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
        <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
          <Link to="/" className="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap">
            React Shop
          </Link>
        </h1>
        <div className="flex-none hidden md:flex md:flex-1 ml-2">
          {Object.entries(MENUS).map(([key, value]) => {
            if (key !== "HOME")
              return (
                <Link
                  to={`/${key.toLowerCase()}`}
                  key={key}
                  className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
                >
                  {value}
                </Link>
              );
          })}
        </div>
        <div className="flex items-center px-2">
          <ThemeBtn />
          <InputSearch />
          <Link className="btn btn-ghost w-10 sm:w-12 ml-1" to="/cart">
            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-gray-700 dark:stroke-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                ></path>
              </svg>
              <span className="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2">
                {itemCount}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
