import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { state } from "../type/type";
import { changeMode } from "../store/DarkmodeReducer";
import { AppDispatch } from "../store/Store";
import { Link } from "react-router-dom";
import { getAllCategories } from "../store/ListReducer";
import Search from "./Search"
export default function Header() {
  const [keyword, setKeyword] = useState("");
  const [open, setOpen] = useState(false)
  const state = useSelector((state: state) => state);
  const isDark = state.darkState.darkMode;
  const basketNum = <>{state.basketState.all}</>;
  const dispatch = useDispatch<AppDispatch>();

  const openIt = {
    opacity: "100%",
    top: "3rem",
    width: "100%",
    left: "0",
    borderRadius: "0"
  };
  const closeIt = {}
  const handleToggleMode = () => {
    dispatch(changeMode());
  };
  const toggleSearch = () => {
    setOpen(!open);
  }
  useEffect(() => {
    document.documentElement.setAttribute("class", isDark);
  }, [isDark]);
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
    <div className="fixed w-full dark:bg-stone-900 dark:text-white p-2 flex justify-center z-10 bg-white drop-shadow">
      <div className="flex justify-between max-w-screen-xl w-full font-bold h-10">
        <div className="flex items-center">
          <div className="drawer-content lg:hidden flex items-center ">
            <label htmlFor="my-drawer" className="drawer-button ">
              <img
                src="../../public/icon/menu.png"
                className="w-5 h-5 mr-5 invert-0 brightness-0 dark:invert"
              />
            </label>
          </div>
          <Link className="pr-7 text-xl whitespace-nowrap" to="/">
            React Shop
          </Link>
          <div className="hidden lg:flex ">
            {state.listState.categories.map((element, idx) => (
              <div key={idx}>
                <Link className="pr-7 text-sm" to={"/category/" + element}>
                  {element}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center lg:min-w-1/4 justify-end relative">
          <div onClick={handleToggleMode} className="pr-5">
            <img
              src="../../public/icon/sun.png"
              className="max-w-7 max-h-7 invert-0 brightness-0 dark:invert "
            />
          </div>
          <div className="block sm:hidden pr-5" onClick={toggleSearch}>
            <img
              src="../../public/icon/search.png"
              className="max-w-7 max-h-7 invert-0 brightness-0 dark:invert "
            />
          </div>
          <input className="fixed top-[-5rem] opacity-0 sm:opacity-100 sm:static input mr-5 h-10 rounded-lg dark:bg-slate-500 dark:text-white bg-slate-200"
            placeholder="검색" type="text" onChange={(event) => setKeyword(event.target.value.trim())} style={open ? openIt : closeIt}
          />
          <Search keyword={keyword} />
          <div>
            <Link to="/basket" className="relative">
              <img
                src="../../public/icon/bag.png"
                className="max-w-7 max-h-7 invert-0 brightness-0 dark:invert"
              />
              <div className="bg-red-500 w-5 h-5 flex justify-center items-center rounded-lg text-xs absolute bottom-1/2 left-1/2">
                {basketNum}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
