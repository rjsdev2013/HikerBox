import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {getAllGear} from "./../../modules/GearManager"
import { GearCard } from "./gearCard";



export const GearList = () => {
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
        <h2 className="page__title">Gear List</h2>
        <div className="big__btns">
            <button type="button" className="big__btn btn" id="big__btn" onClick={() => {navigate("/gearform")}} >Add New Gear</button>
        </div>
        <div className="gearItem_card">
            {gearItems.map(gearItem =>
                <GearCard
                key={gearItem.id}
                gearItem={gearItem}
                />
            )}
        </div>

        </>

    )
}