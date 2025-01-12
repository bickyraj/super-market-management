import React from "react";

export interface IOrder {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface IProps {
    orders: IOrder[];
}

const SideBarOrder: React.FC<IProps> = (props: IProps) => {
    return (
        <>
            <div className="bg-white w-[430px] h-full fixed z-20 right-0 top-20">
                <h1 className="bg-amber-400 text-amber-900 font-semibold px-4 py-3">Order</h1>
                <div className="py-7 px-4">
                    <table className="min-w-full text-left border-spacing-4">
                        <thead>
                            <tr className="border-b border-gray-200 text-gray-900">
                            <th className="w-[5%] text-sm/6 font-medium pb-2 mb-2">
                                Sn
                            </th>
                            <th className="w-1/4 text-sm/6 font-medium pb-2 mb-2">
                                Item
                            </th>
                            <th className="w-1/12 text-sm/6 font-medium pb-2 mb-2 text-right">
                                Qty
                            </th>
                            <th className="w-1/12 text-sm/6 font-medium pb-2 mb-2 text-right">
                                Price
                            </th>
                            <th className="w-1/12 text-sm/6 font-medium pb-2 mb-2 text-right">
                                Amount
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {props.orders.length > 0 ? (props.orders.map((order: IOrder) => (
                                <tr key={order.id} className="border-b border-gray-200 text-gray-900">
                                    <td className="pt-2 pb-2 text-sm/6">1</td>
                                    <td className="pt-2 pb-2">
                                        <div className="flex min-w-0 gap-x-1">
                                            <img alt="" src={order.image}
                                                 className="size-7 rounded-md flex-none bg-gray-50"/>
                                            <div className="min-w-0 flex justify-center items-center">
                                                <p className="text-xs leading-[1.2] font-medium text-gray-900 capitalize">{order.name}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pt-2 pb-2">
                                        <div className="flex text-sm/6 font-medium text-gray-900 justify-end">x {order.quantity}</div>
                                    </td>
                                    <td className="pt-2 pb-2">
                                        <p className="text-sm/6 font-medium text-gray-900 text-right">{order.price}</p>
                                    </td>
                                    <td className="pt-2 pb-2">
                                        <p className="text-sm/6 font-medium text-gray-900 text-right">{order.price * order.quantity}</p>
                                    </td>
                                </tr>
                            ))) : (
                                <tr className="border-b border-gray-200 text-gray-900">
                                    <td colSpan={5} className="pt-2 pb-2 text-sm">No items in order.</td>
                                </tr>
                            )}
                            <tr>
                                <td></td>
                                <td colSpan={3} className="pt-2 pb-2 text-sm/6 font-semibold col-span-4">Total Amount</td>
                                <td className="pt-2 pb-2 text-sm/6 col-span-1 font-semibold text-right">
                                    € {props.orders.reduce((acc, item) => (acc + item.quantity * item.price), 0)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default SideBarOrder;