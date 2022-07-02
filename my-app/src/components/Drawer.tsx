import { Link } from "react-router-dom";
export default function Drawer() {
    return (
        <div className="absolute">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side w-screen">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content h-screen">
                    <li>
                        <Link className="pr-7 text-sm" to="/fashion">
                            패션
                        </Link>
                    </li>
                    <li>
                        <Link className="pr-7 text-sm" to="/accessory">
                            악세서리
                        </Link>
                    </li>
                    <li>
                        <Link className="pr-7 text-sm" to="/digital">
                            디지털
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

