import React, {useEffect} from "react";
import {pageHeaderStore} from "../store/PageHeaderStore.ts";
import {observer} from "mobx-react-lite";

const AllProduct: React.FC = () => {
    useEffect(() => {
        pageHeaderStore.setTitle("All Products");
    }, [])
    return (
        <>
            <h1>All Products</h1>
        </>
    );
}
export default observer(AllProduct);