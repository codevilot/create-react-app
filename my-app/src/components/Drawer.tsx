import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { state } from "../type/type";
import { AppDispatch } from "../store/Store";
import { getAllCategories } from "../store/ListReducer";

export default function Drawer() {
  const state = useSelector((state: state) => state);
  const inputRef = useRef<HTMLInputElement>(null);
  function handleClick() {
    if (inputRef.current instanceof HTMLElement) {
      inputRef.current.click();
    }
  }

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
    <div className="absolute">
      <input
        id="my-drawer"
        ref={inputRef}
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-side w-screen">
        <label htmlFor="my-drawer" className="drawer-overlay z-10"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content h-screen">
          {state.listState.categories.map((element, idx) => (
            <li key={idx}>
              <Link
                className="pr-7 text-sm w-full"
                to={"/" + element}
                onClick={handleClick}
              >
                {element}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
