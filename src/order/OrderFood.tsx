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
            <div className="grid grid-cols-7">
                <div className="col-span-6">
                    <div className="py-6 bg-gray-light fixed z-[1] w-full">
                        <div className="flex gap-7">
                            <div className="">
                                <a href="/dashboard"
                                   className="flex flex-row justify-center gap-2 items-center bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-400">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                             stroke="currentColor" className="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"/>
                                        </svg>
                                    </div>
                                    <span>Back</span>
                                </a>
                            </div>
                            <MenuDetailHeader/>
                        </div>
                    </div>
                    <div className="grid mt-6">
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
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <SideBarOrder/>
                </div>
            </div>
        </>
    )
}
export default OrderFood