import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GearCard } from "../Gear/gearCard";
import { getAllGear } from "../../modules/GearManager";
import { GearListSelectCard } from "./gearListSelectCard";
import { addGearListItem, getAllGearListItems } from "../../modules/GearManager";

export const GearListForm = () => {
    const [gearItems, setGearItems] = useState([]);
    const [gearListItems, setGearListItems] = useState([]);
    const navigate = useNavigate();
    const sessionUser = JSON.parse(window.sessionStorage.getItem("hikerbox_user"))
    const sessionUserId = sessionUser.id
    const {listNameId} = useParams();


    const getGearItems = () => {
        return getAllGear(sessionUserId).then(gearFromAPI => {
            setGearItems(gearFromAPI)
        } );
    }

    useEffect(() => {
        getGearItems()
    }, []);



    //THIS SHOULD BE USED WHEN NEW BOXES ARE CHECKED AFTER LIST HAS RENDERED
    // const handleInputChange = (event) => {
    //     const newGearItem = {...gearItem}
    //     let selectedVal = event.target.value
    //     newGearItem[event.target.id] = selectedVal
    //     setGearItem(newGearItem)
    

    const handleSubmit = (event) => {
        const promises = []
        for (const e of gearListItems){
            const newGearListItem = {
            userId: sessionUserId,
            gearId: e,
            listId: listNameId
            }
    
        promises.push(addGearListItem(newGearListItem))
        }
        Promise.all(promises).then(navigate("/"))
    }

    
    const isSelected = (event) => {
        console.log('we got to the setState Function!')
        const checkedGear =[...gearListItems]
        let selectedVal = parseInt(event.target.value)
        checkedGear.push(selectedVal)
        setGearListItems(checkedGear)
    }

    return (
        <>
        <h2 className="page__title">Gear Options for ListNameGoesHere</h2>
        <div className="form__input crud__btn">
                    <button className="submit__btn" onClick={handleSubmit}>
                        Save Gear to List
                    </button>
                </div>
        <div className="gearListSelectItem_card">
            {gearItems.map(gearItem =>
                <GearListSelectCard
                key={gearItem.id}
                gearItem={gearItem}
                isSelected={isSelected}
                />
            )}
        </div>
        </>

    )
}