import logo from "../../assets/shopping.png";
import {ArrowsRightLeftIcon, ChevronRightIcon} from "@heroicons/react/16/solid";
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
import sidebarStore from "../../store/SidebarStore.ts";
import {observer} from "mobx-react-lite";
import useMediaQuery from "../../utils/useMediaQuery.ts";

type SubMenuState = {
    [key: string]: boolean;
};
const Aside: React.FC = () => {
    const { isCollapsed, toggleSidebar } = sidebarStore;
    const navigate = useNavigate();
    const location = useLocation();
    const logoHandleClick = () => {
        navigate(`/dashboard`);
    }

    // const isMobile = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
    // const isDesktop = useMediaQuery('(min-width: 1025px)');

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
        <aside
            className={`transition-all duration-300 ease-in-out lg:w-${isCollapsed ? '[100px]' : '72'} w-${isCollapsed ? '[100px]' : '72'} md:w-${isCollapsed ? '[100px]' : '72'} fixed h-full z-30 bg-white border-r-[1px] border-b-gray-50`}>
            <button
                className="absolute z-40 top-6 right-[-10px] text-white"
                onClick={toggleSidebar}
            >
                <ArrowsRightLeftIcon className="size-6 p-1 hover:bg-gray-100 text-gray-600 rounded-full bg-white drop-shadow-md"/>
            </button>
            <div className="p-6">
                <div className={`flex lg:flex-1 ${isCollapsed && 'justify-center'}`}>
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Super Manager</span>
                        <div onClick={() => logoHandleClick()} className={`flex gap-2 align-middle`}>
                            <img
                                alt=""
                                src={logo}
                                className="h-7 w-auto"
                            />
                            {!isCollapsed && ((
                                <div className="font-bold text-gray-800 text-xl">Super Manager</div>
                            ))}
                        </div>
                    </a>
                </div>
            </div>
            <nav>
                <ul className="text-sm text-gray-500">
                    <SidebarMenu
                        short={isCollapsed}
                        name="app"
                        route="/dashboard"
                        icon={<HomeModernIcon className="h-6 w-6"/>}
                    />
                    <li
                        onMouseEnter={isCollapsed && !isTablet ? () => toggleSubMenu('productManagement') : undefined}
                        onMouseLeave={isCollapsed && !isTablet ? () => toggleSubMenu('productManagement') : undefined}
                        className="mb-1 px-4 relative"
                    >
                        <button
                            onClick={isCollapsed && !isTablet ? undefined : () => toggleSubMenu('productManagement')}
                            className={`${
                                isSubMenuActive(['/product/all', '/product/add', '/unit/add']) ? 'bg-app-50 hover:bg-app-100 font-medium text-app-700' : 'hover:bg-gray-100'
                            } flex ${isCollapsed && 'justify-center flex-col'} w-full gap-2 items-center hover:bg-gray-100 ${openSubMenus.productManagement ? 'bg-gray-100' : ''} ${isCollapsed && 'justify-center'} px-3 py-3 rounded-lg`}
                        >
                            <ShoppingBagIcon className="h-6 w-6"/>
                            <span className={`${isCollapsed && 'text-xs'}`}>Product {!isCollapsed && 'Management'}</span>
                            {!isCollapsed && ((
                                <>
                                    <ChevronRightIcon
                                        className={`h-5 w-5 ml-auto transform transition-transform ${
                                            openSubMenus.productManagement ? 'rotate-90' : ''
                                        }`}
                                    />
                                </>
                            ))}
                        </button>
                        {openSubMenus.productManagement && (
                            <SubMenu short={isCollapsed}  subMenus={productMenus}/>
                        )}
                    </li>
                    <SidebarMenu
                        short={isCollapsed}
                        name="Category"
                        route="/product-category/add"
                        icon={<Squares2X2Icon className="h-6 w-6"/>}
                    />
                    <li
                        onMouseEnter={isCollapsed && !isTablet ? () => toggleSubMenu('warehouseManagement') : undefined}
                        onMouseLeave={isCollapsed && !isTablet ? () => toggleSubMenu('warehouseManagement') : undefined}
                        className="mb-1 px-4 relative"
                    >
                        <button
                            onClick={isCollapsed && !isTablet ? undefined : () => toggleSubMenu('warehouseManagement')}
                            className={`${
                                isSubMenuActive(['/warehouse/all', '/warehouse/add']) ? 'bg-app-50 hover:bg-app-100 font-medium text-app-700' : 'hover:bg-gray-100'
                            } flex ${isCollapsed && 'justify-center flex-col'} w-full gap-2 items-center ${openSubMenus.warehouseManagement ? 'bg-gray-100' : ''} ${isCollapsed && 'justify-center'} px-3 py-3 rounded-lg`}
                        >
                            <BuildingOffice2Icon className="h-6 w-6"/>
                            <span
                                className={`${isCollapsed && 'text-xs'}`}>Warehouse</span>
                            {!isCollapsed && ((
                                <>
                                    <ChevronRightIcon
                                        className={`h-5 w-5 ml-auto transform transition-transform ${
                                            openSubMenus.warehouseManagement ? 'rotate-90' : ''
                                        }`}
                                    />
                                </>
                            ))}
                        </button>
                        {openSubMenus.warehouseManagement && (
                            <SubMenu short={isCollapsed} subMenus={wareHouseMenus}/>
                        )}
                    </li>
                    <SidebarMenu
                        short={isCollapsed}
                        name="Supplier"
                        route="/supplier/add"
                        icon={<ArrowPathRoundedSquareIcon className="h-6 w-6"/>}
                    />
                    <SidebarMenu
                        short={isCollapsed}
                        name="Billing"
                        route="/billing"
                        icon={<BillingIcon className="h-6 w-6"/>}
                    />
                </ul>
            </nav>
        </aside>
    )
}
export default observer(Aside);