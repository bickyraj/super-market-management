import MenuDetailHeader from "../common/MenuDetailHeader.tsx";
import React, {useState} from "react";
import OrderItemCard from "../common/OrderItemCard.tsx";
import food2 from "../assets/food/food2.jpg";
import food10 from "../assets/food/food10.jpg";
import SideBarOrder, {IOrder} from "./SideBarOrder.tsx";

interface ICardItems {
    id: number;
    name: string;
    price: number;
    image: string;
}

const foods: ICardItems[] = [
    {
        id: 1,
        name: "sushi",
        price: 20,
        image: food2
    },
    {
        id: 2,
        name: "ramen",
        price: 15,
        image: food10
    },
    {
        id: 3,
        name: "new ramen",
        price: 25,
        image: food10
    }
]
const OrderFood:React.FC = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const removeFromOrderList = (food: ICardItems) => {
        setOrders((prevOrders: IOrder[]) => {
            const existingOrder = prevOrders.find((order) => order.id === food.id);
            if (existingOrder && existingOrder.quantity > 1) {
                return prevOrders.map((order) =>
                    order.id === food.id
                        ? { ...order, quantity: order.quantity - 1 }
                        : order
                );
            } else {
                return prevOrders.filter(order => order.id !== food.id);
            }
        });
    }
    const addToOrderList = (food: ICardItems) => {
        setOrders((prevOrders: IOrder[]) => {
            const existingOrder = prevOrders.find((order) => order.id === food.id);
            if (existingOrder) {
                return prevOrders.map((order) =>
                    order.id === food.id
                        ? { ...order, quantity: order.quantity + 1 }
                        : order
                );
            } else {
                const newOrder: IOrder = {
                    id: food.id,
                    name: food.name,
                    price: food.price,
                    quantity: 1,
                    image: food.image,

                }
                return [...prevOrders, newOrder];
            }
        });
    }

    return (
        <>
            <div className="grid grid-cols-8 lg:grid-cols-8 md:grid-cols-10">
                <div className="col-span-6 lg:col-span-6 md:col-span-7">
                    <div className="py-6 bg-gray-light fixed z-[1] w-full">
                        <div className="flex gap-7">
                            <div className="">
                                <a href="/dashboard"
                                   className="flex flex-row justify-center gap-2 items-center bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-400">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                             stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
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
                            {foods.length > 0 ? (foods.map((food: ICardItems) => (
                                <div className="relative">
                                    {orders.find((order) => order.id === food.id) && (
                                        <span className="absolute right-4 text-md top-0.5 text-green-500 font-semibold z-20">
                                            <sub>x</sub> {orders.find((order) => order.id === food.id)?.quantity || 0}
                                        </span>
                                    )}
                                    <OrderItemCard
                                        addHandler={() => addToOrderList(food)}
                                        removeHandler={() => removeFromOrderList(food)}
                                        title={food.name}
                                        image={food.image}
                                    />
                                </div>
                            ))): (
                                    <div>No item to show</div>
                            )}
                        </div>
                        <div className="col-span-1">
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <SideBarOrder orders={orders} />
                </div>
            </div>
        </>
    )
}
export default OrderFood