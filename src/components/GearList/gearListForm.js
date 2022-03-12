import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GearCard } from "../Gear/gearCard";
import { getAllGear } from "../../modules/GearManager";
import { GearListSelectCard } from "./gearListSelectCard";

export const GearListForm = () => {
    const [gearItems, setGearItems] = useState([]);
    const navigate = useNavigate();


    const getGearItems = () => {
        return getAllGear().then(gearFromAPI => {
            setGearItems(gearFromAPI)
        } );
    }

    useEffect(() => {
        getGearItems()
    }, []);

    return (
        <>
        <h2 className="page__title">Gear Options for ListNameGoesHere</h2>
        <div className="form__input crud__btn">
                    <button className="submit__btn">
                        Save Gear to List
                    </button>
                </div>
        <div className="gearListSelectItem_card">
            {gearItems.map(gearItem =>
                <GearListSelectCard
                key={gearItem.id}
                gearItem={gearItem}
                />
            )}
        </div>
        </>

    )
}