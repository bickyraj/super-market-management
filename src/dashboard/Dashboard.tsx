import fastFood from '../assets/fast-food.png';
import liquor from '../assets/liquor.png';
import softDrink from '../assets/drink.png';
import grocery from '../assets/grocery.png';
import fruits from '../assets/fruits.png';
import vegetable from '../assets/vegetable.png';
import order from '../assets/order.png';
import MenuCard from "../common/MenuCard.tsx";
import {useEffect} from "react";
import {pageHeaderStore} from "../store/PageHeaderStore.ts";
import { observer } from 'mobx-react-lite';

const Dashboard = () => {
    useEffect(() => {
        pageHeaderStore.setTitle("App");
    }, [])
    return (
        <>
            <div className="pt-10 grid grid-cols-3 gap-10">
                <MenuCard link="/order/food" icon={order} title=""/>
                <MenuCard icon={fruits} title="Fruits"/>
                <MenuCard icon={grocery} title="Grocery"/>
                <MenuCard icon={liquor} title="Liquor"/>
                <MenuCard icon={fastFood} title="meals"/>
                <MenuCard icon={softDrink} title="Soft Drinks"/>
                <MenuCard icon={vegetable} title="Vegetables"/>
            </div>
        </>
    )
}

export default observer(Dashboard);
