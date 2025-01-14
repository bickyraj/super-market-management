import {NavLink} from "react-router-dom";
import {ArrowTurnDownRightIcon} from "@heroicons/react/16/solid";
import React from "react";

export interface SubMenuType {
    route: string;
    name: string;
}
interface IProps {
    subMenus: SubMenuType[]
}
const SubMenu: React.FC<IProps> = (props: IProps) => {
    const {subMenus} = props;
    return (
        <ul className="mt-2 ml-4">
            {subMenus && subMenus.map((menu: SubMenuType) => (
                <li className="mb-1">
                    <NavLink
                        to={menu.route}
                        className={({isActive}) =>
                            `${isActive ? 'bg-gray-100 text-gray-950 font-medium' : ''} flex gap-2 items-center hover:bg-gray-100 px-3 py-3 rounded-lg`
                        }
                    >
                        <ArrowTurnDownRightIcon className="h-4 w-4"/>
                        {menu.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}
export default SubMenu;