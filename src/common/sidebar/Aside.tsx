import logo from "../../assets/shopping.png";
import {ChevronRightIcon} from "@heroicons/react/16/solid";
import {
    ArrowPathRoundedSquareIcon,
    BuildingOffice2Icon, HomeModernIcon,
    ShoppingBagIcon,
    Squares2X2Icon
} from "@heroicons/react/24/outline";
import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import SubMenu, {SubMenuType} from "./SubMenu.tsx";
import SidebarMenu from "./SidebarMenu.tsx";
import BillingIcon from "../../icon/BillingIcon.tsx";

type SubMenuState = {
    [key: string]: boolean;
};
const Aside: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const logoHandleClick = () => {
        navigate(`/dashboard`);
    }

    const productMenus: SubMenuType[] = [
        {
            name: 'Add New Product',
            route: '/product/add',
        },
        {
            name: 'All Product',
            route: '/product/all',
        },
        {
            name: 'Unit',
            route: '/unit/add',
        },
    ];

    const wareHouseMenus: SubMenuType[] = [
        {
            name: 'Add New Warehouse',
            route: '/warehouse/add',
        },
        {
            name: 'All Warehouse',
            route: '/',
        }
    ];

    const [openSubMenus, setOpenSubMenus] = useState<SubMenuState>({
        productManagement: false,
        warehouseManagement: false,
        supplierManagement: false,
    });
    const isSubMenuActive = (paths: string[]) => {
        return paths.some((path) => location.pathname.startsWith(path));

    };
    const toggleSubMenu = (menu: keyof SubMenuState) => {
        setOpenSubMenus((prev: SubMenuState) => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };
    return (
        <aside className="lg:w-72 fixed h-full z-30 md:w-72 bg-white border-r-[1px] border-b-gray-50">
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
                    <SidebarMenu
                        name="app"
                        route="/dashboard"
                        icon={<HomeModernIcon className="h-6 w-6"/>}
                    />
                    <li className="mb-1 px-4">
                        <button
                            onClick={() => toggleSubMenu('productManagement')}
                            className={`${
                                isSubMenuActive(['/product/all', '/product/add', '/unit/add']) ? 'bg-app-50 hover:bg-app-100 font-medium text-app-700' : 'hover:bg-gray-100'
                            } flex w-full gap-2 items-center hover:bg-gray-100 ${openSubMenus.productManagement ? 'bg-gray-100' : ''} px-3 py-3 rounded-lg`}
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
                            <SubMenu subMenus={productMenus}/>
                        )}
                    </li>
                    <SidebarMenu
                        name="Category"
                        route="/product-category/add"
                        icon={<Squares2X2Icon className="h-6 w-6"/>}
                    />
                    <li className="mb-1 px-4">
                        <button
                            onClick={() => toggleSubMenu('warehouseManagement')}
                            className={`${
                                isSubMenuActive(['/warehouse/all', '/warehouse/add']) ? 'bg-app-50 hover:bg-app-100 font-medium text-app-700' : 'hover:bg-gray-100'
                            } flex w-full gap-2 items-center ${openSubMenus.warehouseManagement ? 'bg-gray-100' : ''} px-3 py-3 rounded-lg`}
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
                            <SubMenu subMenus={wareHouseMenus}/>
                        )}
                    </li>
                    <SidebarMenu
                        name="Supplier"
                        route="/supplier/add"
                        icon={<ArrowPathRoundedSquareIcon className="h-6 w-6"/>}
                    />
                    <SidebarMenu
                        name="Billing"
                        route="/billing"
                        icon={<BillingIcon className="h-6 w-6"/>}
                    />
                </ul>
            </nav>
        </aside>
    )
}
export default Aside