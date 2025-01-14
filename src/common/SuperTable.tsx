import React from "react";

interface TableItem {

}

interface IProps {
    data?: TableItem[];
}

const SuperTable: React.FC<IProps> = (props: IProps) => {
    return (
        <div className="bg-white p-6">
            <table className="lg:w-full text-left border-spacing-4">
                <thead>
                <tr className="border-b border-gray-200 text-gray-900">
                    <th className="w-[5%] text-sm font-medium pb-2 mb-2">
                        Sn
                    </th>
                    <th className="w-1/4 text-sm font-medium pb-2 mb-2">
                        Item
                    </th>
                    <th className="w-1/12 text-sm font-medium pb-2 mb-2 text-right">
                        Qty
                    </th>
                    <th className="w-1/12 text-sm font-medium pb-2 mb-2 text-right">
                        Price
                    </th>
                    <th className="w-1/12 text-sm font-medium pb-2 mb-2 text-right">
                        Amount
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-gray-200 text-gray-900">
                    <td className="pt-2 pb-2 text-sm">1</td>
                    <td className="pt-2 pb-2">
                        <div className="flex min-w-0 gap-x-2">
                            {/*<img alt="" src={food1}*/}
                            {/*     className="w-24 rounded-md flex-none bg-gray-50"/>*/}
                            <div className="min-w-0 flex justify-center items-center">
                                <p className="text-sm leading-[1.2] font-medium text-gray-900 capitalize">sushi</p>
                            </div>
                        </div>
                    </td>
                    <td className="pt-2 pb-2">
                        <div
                            className="flex text-sm font-medium text-gray-900 justify-end">x 3
                        </div>
                    </td>
                    <td className="pt-2 pb-2">
                        <p className="text-sm font-medium text-gray-900 text-right">20</p>
                    </td>
                    <td className="pt-2 pb-2">
                        <p className="text-sm font-medium text-gray-900 text-right">20</p>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td colSpan={2} className="pt-2 pb-2 text-sm font-semibold col-span-4 text-right">Total Amount</td>
                    <td className="pt-2 pb-2 text-sm col-span-1 font-semibold text-right">
                        € 500
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
export default SuperTable;