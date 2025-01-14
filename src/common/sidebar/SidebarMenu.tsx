import React, {ReactNode} from "react";
import {NavLink} from "react-router-dom";

interface IProps {
    route: string;
    name: string;
    icon: ReactNode;
}
const SidebarMenu: React.FC<IProps> = (props: IProps) => {
    return (
        <li className="py-1 px-4">
            <NavLink to={props.route}
                     className={({isActive}) =>
                         `${isActive ? 'bg-app-50 hover:bg-app-100 font-medium text-app-700' : 'hover:bg-gray-100'} capitalize flex gap-2 items-center px-3 py-3 rounded-lg`
                     }>
                {props.icon}
                <span>{props.name}</span>
            </NavLink>
        </li>
    );
}
export default SidebarMenu;