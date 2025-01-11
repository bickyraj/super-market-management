import React from "react";
import food10 from "../assets/food/food10.jpg";

const SideBarOrder: React.FC = () => {
    return (
        <div className="bg-white py-4 px-4 w-80 h-full fixed right-0 drop-shadow-md">
            <table className="min-w-full text-left border-spacing-4">
                <thead>
                <tr className="border-b border-gray-200 text-gray-900">
                    <th className="w-1/12 text-sm/6 font-medium pb-2 mb-2">
                        Sn
                    </th>
                    <th className="w-1/4 text-sm/6 font-medium pb-2 mb-2">
                        Item
                    </th>
                    <th className="w-1/12 text-sm/6 font-medium pb-2 mb-2">
                        Qty
                    </th>
                    <th className="w-1/4 text-sm/6 font-medium pb-2 mb-2 text-right">
                        Price
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="pt-2 pb-2 text-sm/6">1</td>
                    <td className="pt-2 pb-2">
                        <div className="flex min-w-0 gap-x-2.5">
                            <img alt="" src={food10}
                                 className="size-12 rounded-md flex-none bg-gray-50"/>
                            <div className="min-w-0 flex justify-center items-center">
                                <p className="text-sm/6 font-medium text-gray-900">Ramen</p>
                            </div>
                        </div>
                    </td>
                    <td className="pt-2 pb-2">
                        <div className="flex text-sm/6 font-medium text-gray-900">5</div>
                    </td>
                    <td className="pt-2 pb-2"><p
                        className="text-sm/6 font-medium text-gray-900 text-right">€50.99</p></td>
                </tr>
                <tr>
                    <td className="pt-2 pb-2 text-sm/6">2</td>
                    <td className="pt-2 pb-2">
                        <div className="flex min-w-0 gap-x-2.5">
                            <img alt="" src={food10}
                                 className="size-12 flex-none rounded-md bg-gray-50"/>
                            <div className="min-w-0 flex justify-center items-center">
                                <p className="text-sm/6 font-medium text-gray-900">Ramen</p>
                            </div>
                        </div>
                    </td>
                    <td className="pt-2 pb-2">
                        <div className="flex text-sm/6 font-medium text-gray-900">5</div>
                    </td>
                    <td className="pt-2 pb-2"><p
                        className="text-sm/6 font-medium text-gray-900 text-right">€50.99</p></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
export default SideBarOrder;