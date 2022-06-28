import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Fashion from "../page/Fashion";
import Basket from "../page/Basket";
import ProductHome from "../page/ProductHome";
export default function Section() {
  return (
    <div className="dark:bg-gray-800">
      <div className="max-w-screen-xl w-full mx-auto pb-20 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/product/:productId" element={<ProductHome />} />
        </Routes>
      </div>
    </div>
  );
}
