import React from "react";
import {useNavigate} from "react-router-dom";

interface IProps {
    title: string;
    icon: string;
    link?: string;
}

const MenuCard: React.FC<IProps> = (props: IProps) => {
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
                className="group bg-white rounded-xl drop-shadow-md border border-gray-50 cursor-pointer hover:bg-amber-400 p-4 h-40 w-50 flex items-center justify-center text-white">
                <div className="flex flex-col items-center">
                    <div className="text-sm font-semibold pb-2 group-hover:text-amber-900 uppercase text-gray-950">
                        {props.title}
                    </div>
                    <img
                        alt=""
                        src={props.icon}
                        className="h-20 w-auto"
                    />
                </div>
            </div>
        </>
    );
}
export default MenuCard;