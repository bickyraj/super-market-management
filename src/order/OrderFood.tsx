import MenuDetailHeader from "../common/MenuDetailHeader.tsx";
import React from "react";
import OrderItemCard from "../common/OrderItemCard.tsx";
import food2 from "../assets/food/food2.jpg";
import food10 from "../assets/food/food10.jpg";
import ramen1 from "../assets/food/ramen1.jpg";
import ramen2 from "../assets/food/ramen2.jpg";

const OrderFood:React.FC = () => {
    return (
        <>
            <MenuDetailHeader/>
            <div className="my-20 grid grid-cols-3 gap-10">
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
        </>
    )
}
export default OrderFood