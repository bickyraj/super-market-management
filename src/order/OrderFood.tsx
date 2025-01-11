import MenuDetailHeader from "../common/MenuDetailHeader.tsx";
import React from "react";
import OrderItemCard from "../common/OrderItemCard.tsx";
import food2 from "../assets/food/food2.jpg";
import food10 from "../assets/food/food10.jpg";
import ramen1 from "../assets/food/ramen1.jpg";
import ramen2 from "../assets/food/ramen2.jpg";
import SideBarOrder from "./SideBarOrder.tsx";
const OrderFood:React.FC = () => {
    return (
        <>
            <MenuDetailHeader/>
            <div className="grid grid-cols-7">
                <div className="my-20 grid col-span-6 grid-cols-3 gap-5">
                    <OrderItemCard title="sushi" image={food2}/>
                    <OrderItemCard title="ramen" image={food10}/>
                    <OrderItemCard title="sushi" image={ramen1}/>
                    <OrderItemCard title="ramen" image={ramen2}/>
                    <OrderItemCard title="sushi" image={food2}/>
                    <OrderItemCard title="ramen" image={food10}/>
                    <OrderItemCard title="sushi" image={food2}/>
                    <OrderItemCard title="ramen" image={food10}/>
                    <OrderItemCard title="sushi" image={food2}/>
                    <OrderItemCard title="ramen" image={food10}/>
                    <OrderItemCard title="sushi" image={food2}/>
                    <OrderItemCard title="ramen" image={food10}/>
                    <OrderItemCard title="sushi" image={food2}/>
                    <OrderItemCard title="ramen" image={food10}/>
                    <OrderItemCard title="sushi" image={food2}/>
                    <OrderItemCard title="ramen" image={food10}/>
                </div>
                <div className="col-span-1">
                    <SideBarOrder/>
                </div>
            </div>
        </>
    )
}
export default OrderFood