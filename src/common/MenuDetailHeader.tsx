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
            <div className="flex flex-row gap-5">
                <CategoryMenu icon={fruits} title="fruits"/>
                <CategoryMenu icon={grocery} title="grocery"/>
                <CategoryMenu icon={liquor} title="liquor"/>
                <CategoryMenu active={true} icon={meals} title="meals"/>
                <CategoryMenu icon={softdrinks} title="soft drinks"/>
                <CategoryMenu icon={vegetable} title="vegetables"/>
            </div>
    )
}
export default MenuDetailHeader;