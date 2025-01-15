import React, {useEffect} from "react";
import {pageHeaderStore} from "../store/PageHeaderStore.ts";
import {observer} from "mobx-react-lite";
import ProductTable from "./ProductTable.tsx";

const AllProduct: React.FC = () => {
    useEffect(() => {
        pageHeaderStore.setTitle("All Products");
    }, [])
    return (
        <>
            <ProductTable/>
        </>
    );
}
export default observer(AllProduct);