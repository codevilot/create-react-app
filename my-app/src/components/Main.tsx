import { Route, Routes } from 'react-router-dom';
import Home from "../page/Home"
import Fashion from "../page/Fashion"
import ProductHome from '../page/ProductHome';
export default function Main() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/product/:productId" element={<ProductHome />} />
        </Routes>

    )
}

