import React, {useState} from "react";
import Header from "../common/Header.tsx";
import {Outlet, useNavigate} from "react-router-dom";
import logo from "../assets/shopping.png";
import {ArrowTurnDownRightIcon, ChevronRightIcon, HomeModernIcon} from "@heroicons/react/16/solid";
import {ArrowPathRoundedSquareIcon, BuildingOffice2Icon, ShoppingBagIcon} from "@heroicons/react/24/outline";
type SubMenuState = {
    [key: string]: boolean;
};
const AdminLayoutRTL: React.FC = () => {
    const navigate = useNavigate();
    const logoHandleClick = () => {
        navigate(`/dashboard`);
    }

    const [openSubMenus, setOpenSubMenus] = useState<SubMenuState>({
        projects: false,
        team: false,
        reports: false,
    });

    const toggleSubMenu = (menu: keyof SubMenuState) => {
        setOpenSubMenus((prev: SubMenuState) => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };

    return (
        <>
            <div className="flex min-h-screen">
                <aside className="w-72 bg-white border-r-[1px] border-b-gray-50">
                    <div className="p-6">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Super Manager</span>
                                <div onClick={() => logoHandleClick()} className="flex gap-2 align-middle">
                                    <img
                                        alt=""
                                        src={logo}
                                        className="h-7 w-auto"
                                    />
                                    <div className="font-bold text-gray-800 text-xl">Super Manager</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <nav className="">
                        <ul className="text-sm text-gray-500">
                            <li className="py-1 px-4">
                                <a href="#"
                                   className="flex gap-2 items-center bg-app-50 hover:bg-app-100 font-medium text-app-700 px-3 py-3 rounded-lg">
                                    <HomeModernIcon className="h-6 w-6"/>
                                    <span>App</span>
                                </a>
                            </li>
                            <li className="mb-1 px-4">
                                <a href="#"
                                   className="flex gap-2 items-center hover:bg-gray-100 px-3 py-3 rounded-lg">
                                    <ShoppingBagIcon className="h-6 w-6"/>
                                    <span>Product Management</span>
                                </a>
                            </li>
                            <li className="mb-1 px-4">
                                <button
                                    onClick={() => toggleSubMenu('projects')}
                                    className={`flex w-full gap-2 items-center hover:bg-gray-100 ${openSubMenus.projects ?'bg-gray-100': ''} px-3 py-3 rounded-lg`}
                                >
                                    <BuildingOffice2Icon className="h-6 w-6"/>
                                    <span>Warehouse</span>
                                    <ChevronRightIcon
                                        className={`h-5 w-5 ml-auto transform transition-transform ${
                                            openSubMenus.projects ? 'rotate-90' : ''
                                        }`}
                                    />
                                </button>
                                {openSubMenus.projects && (
                                    <ul className="mt-2 ml-4">
                                        <li className="mb-1 px-4">
                                            <a href=""
                                               className="flex gap-2 items-center hover:bg-gray-100 px-3 py-3 rounded-lg">
                                                <ArrowTurnDownRightIcon className="h-4 w-4"/>
                                                Add Warehouse
                                            </a>
                                        </li>
                                        <li className="mb-1 px-4">
                                            <a href=""
                                               className="flex gap-2 items-center hover:bg-gray-100 px-3 py-3 rounded-lg">
                                                <ArrowTurnDownRightIcon className="h-4 w-4"/>
                                                All Warehouse
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="mb-1 px-4">
                                <a href="#"
                                   className="flex gap-2 items-center hover:bg-gray-100 px-3 py-3 rounded-lg">
                                    <ArrowPathRoundedSquareIcon className="h-6 w-6"/>
                                    <span>Supplier</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <div className="flex-1">
                    <Header/>
                    <main>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative top-20">
                            <Outlet/>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default AdminLayoutRTL;