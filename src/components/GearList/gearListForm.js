import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllGear, getListNameById } from "../../modules/GearManager";
import { GearListSelectCard } from "./gearListSelectCard";
import { addGearListItem} from "../../modules/GearManager";

export const GearListForm = () => {
    const [gearItems, setGearItems] = useState([]);
    const [gearListItems, setGearListItems] = useState([]);
    const [listName, setListName] = useState([])
    const navigate = useNavigate();
    const sessionUser = JSON.parse(window.sessionStorage.getItem("hikerbox_user"))
    const sessionUserId = sessionUser.id
    const {listNameId} = useParams();


    const getGearItems = () => {
        return getAllGear(sessionUserId).then(gearFromAPI => {
            setGearItems(gearFromAPI)
        } );
    }

    const getListName = (id) => {
        return getListNameById(id).then(listName => {
            setListName(listName)
        })
    }


    useEffect(() => {
        getGearItems()
        getListName(listNameId)
       
    }, []);


    

    const handleSubmit = (event) => {
        const promises = []
        const listNameIdINT = parseInt(listNameId)
        for (const e of gearListItems){
            const newGearListItem = {
            userId: sessionUserId,
            gearId: e,
            listId: listNameIdINT
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
        <h2 className="page__title">Gear Options for {listName.name}</h2>
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