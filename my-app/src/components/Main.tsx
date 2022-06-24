import { Route, Routes } from 'react-router-dom';
import Home from "../page/Home"
import Fashion from "../page/Fashion"
export default function Main() {


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fashion" element={<Fashion />} />
            {/* <Route path="/profiles/:username" element={<Profile />} /> */}
        </Routes>

    )
}

