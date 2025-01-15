import React from "react";
import Header from "../common/Header.tsx";
import {Outlet} from "react-router-dom";
import Aside from "../common/sidebar/Aside.tsx";
import PageHeader from "../common/PageHeader.tsx";
import sidebarStore from "../store/SidebarStore.ts";
import {observer} from "mobx-react-lite";

const AdminLayoutRTL: React.FC = () => {
    const { isCollapsed } = sidebarStore;
    return (
        <>
            <div className="flex min-h-screen">
                <Aside/>
                <div className="flex-1">
                    <Header/>
                    <main>
                        <PageHeader title="Dashboard"/>
                        <div
                            className={`transition-all duration-300 ease-in-out mx-auto ${isCollapsed ? 'lg:ml-42 md:ml-28' : 'lg:ml-64 md:ml-72'} px-4 sm:px-6 relative top-0`}>
                            <Outlet/>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default observer(AdminLayoutRTL);