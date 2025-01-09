import CategoryMenu from "../menu/CategoryMenu.tsx";
import fruits from "../assets/fruits.png";
import grocery from "../assets/grocery.png";
import liquor from "../assets/liquor.png";
import meals from "../assets/fast-food.png";
import softdrinks from "../assets/drink.png";
import vegetable from "../assets/vegetable.png";
import React from "react";

const MenuDetailHeader: React.FC = () => {
    return (
        <div className="grid grid-cols-6 gap-10">
            <div className="col-span-1">
                <a href="/dashboard"
                   className="flex flex-row justify-center gap-2 items-center bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-400">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"/>
                        </svg>
                    </div>
                    <span>Back</span>
                </a>
            </div>
            <div className="col-span-4 gap-10 flex justify-center">
                <div className="flex flex-row gap-5">
                    <CategoryMenu icon={fruits} title="fruits"/>
                    <CategoryMenu icon={grocery} title="grocery"/>
                    <CategoryMenu icon={liquor} title="liquor"/>
                    <CategoryMenu active={true} icon={meals} title="meals"/>
                    <CategoryMenu icon={softdrinks} title="soft drinks"/>
                    <CategoryMenu icon={vegetable} title="vegetables"/>
                </div>
            </div>
            <div className="col-span-1"></div>
        </div>
    )
}
export default MenuDetailHeader;