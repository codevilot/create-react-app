import { Route, Routes } from 'react-router-dom';
import Banner from './Banner'
export default function MainBanner() {
    return (
        <Routes>
            <Route path="/" element={<Banner />} />
        </Routes>
    )
}

