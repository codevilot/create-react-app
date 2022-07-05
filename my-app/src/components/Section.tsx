import { Route, Routes } from "react-router-dom";
import Category from "../page/Category";
import Home from "../page/Home";
import Basket from "../page/Basket";
import ProductHome from "../page/ProductHome";
import Error from "../page/Error"
import styled from "styled-components";
export default function Section() {
  const Section = styled.div`
    min-height: calc(100vh - 15rem);
  `;
  return (
    <Section className="dark:bg-gray-800">
      <div className="max-w-screen-xl w-full mx-auto pb-20 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/product/:productId" element={<ProductHome />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Section>
  );
}
