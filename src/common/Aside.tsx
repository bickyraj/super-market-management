import logo from "../assets/shopping.png";
import {ArrowTurnDownRightIcon, ChevronRightIcon, HomeModernIcon} from "@heroicons/react/16/solid";
import {
    ArrowPathRoundedSquareIcon,
    BuildingOffice2Icon,
    ShoppingBagIcon,
    Squares2X2Icon
} from "@heroicons/react/24/outline";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

type SubMenuState = {
    [key: string]: boolean;
};
const Aside: React.FC = () => {
    const navigate = useNavigate();
    const logoHandleClick = () => {
        navigate(`/dashboard`);
    }

    const [openSubMenus, setOpenSubMenus] = useState<SubMenuState>({
        productManagement: false,
        warehouseManagement: false,
        supplierManagement: false,
    });

    const toggleSubMenu = (menu: keyof SubMenuState) => {
        setOpenSubMenus((prev: SubMenuState) => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };
    return (
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
                        <button
                            onClick={() => toggleSubMenu('productManagement')}
                            className={`flex w-full gap-2 items-center hover:bg-gray-100 ${openSubMenus.productManagement ? 'bg-gray-100' : ''} px-3 py-3 rounded-lg`}
                        >
                            <ShoppingBagIcon className="h-6 w-6"/>
                            <span>Product Management</span>
                            <ChevronRightIcon
                                className={`h-5 w-5 ml-auto transform transition-transform ${
                                    openSubMenus.productManagement ? 'rotate-90' : ''
                                }`}
                            />
                        </button>
                        {openSubMenus.productManagement && (
                            <ul className="mt-2 ml-4">
                                <li className="mb-1 px-4">
                                    <a href=""
                                       className="flex gap-2 items-center hover:bg-gray-100 px-3 py-3 rounded-lg">
                                        <ArrowTurnDownRightIcon className="h-4 w-4"/>
                                        Add Product
                                    </a>
                                </li>
                                <li className="mb-1 px-4">
                                    <a href=""
                                       className="flex gap-2 items-center hover:bg-gray-100 px-3 py-3 rounded-lg">
                                        <ArrowTurnDownRightIcon className="h-4 w-4"/>
                                        All Products
                                    </a>
                                </li>
                                <li className="mb-1 px-4">
                                    <a href=""
                                       className="flex gap-2 items-center hover:bg-gray-100 px-3 py-3 rounded-lg">
                                        <ArrowTurnDownRightIcon className="h-4 w-4"/>
                                        Units
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="mb-1 px-4">
                        <a href="#"
                           className="flex gap-2 items-center hover:bg-gray-100 px-3 py-3 rounded-lg">
                            <Squares2X2Icon className="h-6 w-6"/>
                            <span>Category</span>
                        </a>
                    </li>
                    <li className="mb-1 px-4">
                        <button
                            onClick={() => toggleSubMenu('warehouseManagement')}
                            className={`flex w-full gap-2 items-center hover:bg-gray-100 ${openSubMenus.warehouseManagement ? 'bg-gray-100' : ''} px-3 py-3 rounded-lg`}
                        >
                            <BuildingOffice2Icon className="h-6 w-6"/>
                            <span>Warehouse</span>
                            <ChevronRightIcon
                                className={`h-5 w-5 ml-auto transform transition-transform ${
                                    openSubMenus.warehouseManagement ? 'rotate-90' : ''
                                }`}
                            />
                        </button>
                        {openSubMenus.warehouseManagement && (
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
    )
}
export default Aside