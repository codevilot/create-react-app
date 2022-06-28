import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { state } from "../type/type";
import { changeMode } from "../store/DarkmodeReducer";
import { Link } from "react-router-dom";

export default function Header() {
  const state = useSelector((state: state) => state);
  const isDark = state.globalState.darkMode;
  const dispatch = useDispatch();
  console.log(isDark);
  const handleToggleMode = () => {
    dispatch(changeMode());
  };
  useEffect(() => {
    document.documentElement.setAttribute("class", isDark);
  }, [isDark]);

  return (
    <div className="dark:bg-stone-900 dark:text-white pt-5 pb-5 flex justify-center">
      <div className="flex justify-between max-w-screen-xl w-full">
        <div className="flex items-center">
          <Link className="pr-3 text-xl" to="/">
            React Shop
          </Link>
          <Link className="pr-3 text-sm" to="/fashion">
            패션
          </Link>
          <Link className="pr-3 text-sm" to="/accessory">
            악세서리
          </Link>
          <Link className="pr-3 text-sm" to="/digital">
            디지털
          </Link>
        </div>
        <div className="flex">
          <div onClick={handleToggleMode}>☀️</div>
          <input type="text" />
          <div>
            <Link to="/basket">👜</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
