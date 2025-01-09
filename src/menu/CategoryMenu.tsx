import React from "react";

interface IProps {
    title: string;
    icon: string;
}
const CategoryMenu: React.FC<IProps> = (props: IProps) => {
    return (
        <div
            className="group px-2 bg-white gap-1.5 drop-shadow-xl rounded-lg cursor-pointer hover:bg-amber-400 flex items-center">
            <div>
                <img src={props.icon} alt="grocery" height={20} width={20}/>
            </div>
            <span className="capitalize group-hover:text-amber-950 text-gray-950 font-medium">{props.title}</span>
        </div>
    );
}
export default CategoryMenu;