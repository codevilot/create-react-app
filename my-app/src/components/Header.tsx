import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { state } from "../type/type";
import { changeMode } from "../store/DarkmodeReducer";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Header() {

  const state = useSelector((state: state) => state);
  const isDark = state.darkState.darkMode;
  const basketNum = <>{state.basketState.all}</>;
  const dispatch = useDispatch();
  const handleToggleMode = () => {
    dispatch(changeMode());
  };

  useEffect(() => {
    document.documentElement.setAttribute("class", isDark);
  }, [isDark]);

  return (
    <div className="fixed w-full dark:bg-stone-900 dark:text-white p-2 flex justify-center z-10 h-15">
      <div className="flex justify-between max-w-screen-xl w-full font-bold">
        <div className="flex items-center">
          <div className="drawer-content">

            <label htmlFor="my-drawer" className="drawer-button">
              <img src="../../public/icon/menu.png" className="w-5 h-5 mr-5 invert-0 brightness-0 dark:invert" />
            </label>
          </div>
          <Link className="pr-7 text-xl" to="/">
            React Shop
          </Link>
          <div className="hidden md:flex">

            <Link className="pr-7 text-sm" to="/fashion">
              패션
            </Link>
            <Link className="pr-7 text-sm" to="/accessory">
              악세서리
            </Link>
            <Link className="pr-7 text-sm" to="/digital">
              디지털
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <div onClick={handleToggleMode}>
            <img src="../../public/icon/sun.png" className="w-5 h-5 invert-0 brightness-0 dark:invert" />
          </div>
          <input type="text" />
          <div>
            <Link to="/basket" className="relative"> <img src="../../public/icon/bag.png" className="w-5 h-5 mr-5 invert-0 brightness-0 dark:invert" />
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
