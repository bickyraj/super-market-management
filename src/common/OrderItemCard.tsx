import React from "react";
import {useNavigate} from "react-router-dom";

interface IProps {
    title: string;
    image: string;
    link?: string;
}

const OrderItemCard: React.FC<IProps> = (props: IProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (props.link) {
            navigate(`${props.link}`);
        } else {
            navigate(`/menu/details`);  // Navigate to the detail page with an ID
        }
    };
    return (
        <>
            <div
                onClick={() => handleClick()}
                className="group bg-white rounded-md drop-shadow-xl cursor-pointer hover:bg-amber-400 p-4 h-50 w-50 flex items-center justify-center text-white">
                <div className="grid items-center">
                    <div className="text-sm text-left font-semibold group-hover:text-amber-900 uppercase text-gray-700">
                        {props.title}
                    </div>
                    <div className="grid grid-cols-2 mb-2 items-center">
                        <div className="text-xs text-gray-500 text-left group-hover:text-gray-900 font-medium">Salmon,
                            riz, carrot, avocado
                        </div>
                        <div className="text-sm text-gray-500 text-right group-hover:text-amber-900 font-medium">€ 2.5
                        </div>
                    </div>
                    <img
                        alt=""
                        src={props.image}
                        className="h-45 w-auto rounded-md"
                    />
                </div>
            </div>
        </>
    );
}
export default OrderItemCard;