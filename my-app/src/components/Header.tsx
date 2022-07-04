import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { state } from "../type/type";
import { changeMode } from "../store/DarkmodeReducer";
import { AppDispatch } from "../store/Store";
import { Link } from "react-router-dom";
import { getAllCategories } from "../store/ListReducer";

export default function Header() {
  const state = useSelector((state: state) => state);
  const isDark = state.darkState.darkMode;
  const basketNum = <>{state.basketState.all}</>;
  const dispatch = useDispatch<AppDispatch>();
  const handleToggleMode = () => {
    dispatch(changeMode());
  };

  useEffect(() => {
    document.documentElement.setAttribute("class", isDark);
  }, [isDark]);
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
    <div className="fixed w-full dark:bg-stone-900 dark:text-white p-2 flex justify-center z-10 h-20">
      <div className="flex justify-between max-w-screen-xl w-full font-bold">
        <div className="flex items-center">
          <div className="drawer-content lg:hidden">
            <label htmlFor="my-drawer" className="drawer-button">
              <img
                src="../../public/icon/menu.png"
                className="w-7 h-7 mr-5 invert-0 brightness-0 dark:invert"
              />
            </label>
          </div>
          <Link className="pr-7 text-xl " to="/">
            React Shop
          </Link>
          <div className="hidden md:flex">
            {state.listState.categories.map((element, idx) => (
              <div key={idx}>
                <Link className="pr-7 text-sm" to={"/" + element}>
                  {element}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <div onClick={handleToggleMode} className="pr-5">
            <img
              src="../../public/icon/sun.png"
              className="w-7 h-7 invert-0 brightness-0 dark:invert "
            />
          </div>
          <input type="text" className="mr-5" />
          <div>
            <Link to="/basket" className="relative">
              <img
                src="../../public/icon/bag.png"
                className="w-7 h-7 mr-5 invert-0 brightness-0 dark:invert"
              />
              <div className="bg-red-500 w-5 h-5 flex justify-center items-center rounded-lg text-xs absolute bottom-1/2 left-1/4">
                {basketNum}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
