import React from "react";
import Header from "../common/Header.tsx";
import {Outlet} from "react-router-dom";

const AdminLayout: React.FC = () => {
    return (
        <>
            <Header/>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default AdminLayout;