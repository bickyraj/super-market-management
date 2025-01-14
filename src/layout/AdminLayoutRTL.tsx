import React from "react";
import Header from "../common/Header.tsx";
import {Outlet} from "react-router-dom";
import Aside from "../common/sidebar/Aside.tsx";

const AdminLayoutRTL: React.FC = () => {

    return (
        <>
            <div className="flex min-h-screen">
                <Aside/>
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