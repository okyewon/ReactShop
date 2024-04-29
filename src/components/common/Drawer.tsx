import { Link } from "react-router-dom";
import { MENUS } from "../../constants/category";

const Drawer = ({ closeOverlay }: any): JSX.Element => {
  return (
    <div className="drawer-side">
      <label htmlFor="side-menu" className="drawer-overlay"></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        {Object.entries(MENUS).map((menu) => {
          if (menu[0] !== "HOME")
            return (
              <li key={menu[0]}>
                <Link
                  to={`/${menu[0].toLowerCase()}`}
                  onClick={closeOverlay}
                  className="!text-gray-700 active:!text-white dark:!text-white"
                >
                  {menu[1]}
                </Link>
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default Drawer;
