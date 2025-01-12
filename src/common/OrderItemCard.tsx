import React from "react";
import {CheckCircleIcon} from "@heroicons/react/24/solid";

interface IProps {
    title: string;
    image: string;
    link?: string;
    addHandler?: () => void;
    removeHandler?: () => void;
    showCheck?: boolean;
}

const OrderItemCard: React.FC<IProps> = (props: IProps) => {
    return (
        <>
            <div
                className="bg-white rounded-md drop-shadow-xl px-4 pb-2 pt-2 cursor-pointer h-50 w-50 flex items-center justify-center text-white">
                <div className="grid items-center">
                    <div className="flex items-center gap-1.5 text-sm text-left font-semibold group-hover:text-amber-900 uppercase text-gray-700">
                        <span>{props.title}</span>
                        {props.showCheck ? (<><CheckCircleIcon className="h-5 w-auto text-green-500" /></>): null}
                    </div>
                    <div className="grid grid-cols-3 mb-2 items-center">
                        <div className="col-span-2 text-xs text-gray-500 text-left group-hover:text-gray-900">Salmon,
                            riz, carrot, avocado
                        </div>
                        <div className="text-sm text-gray-500 text-right group-hover:text-amber-900 font-medium">€ 2.5
                        </div>
                    </div>
                    <div className="grid grid-cols-5 mb-2 items-center">
                        <div className="col-span-4">
                            <img
                                alt=""
                                src={props.image}
                                className="h-52 w-auto rounded-md"
                            />
                        </div>
                        <div className="col-span-1 pl-3">
                            <div className="flex flex-col items-center justify-center gap-3">
                                <button onClick={props.addHandler} className="hover:bg-amber-400 hover:text-amber-900 font-medium h-32 w-12 rounded-md bg-amber-300 hover:drop-shadow-2xl drop-shadow-xl text-gray-800">+</button>
                                <button onClick={props.removeHandler} className="hover:bg-red-500 hover:text-white font-medium h-16 w-12 bg-red-100 rounded-md hover:drop-shadow-2xl drop-shadow-xl text-gray-800">-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default OrderItemCard;