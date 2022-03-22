import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllGearListItems, getAllGear, getAllListNames, getGearOnThisList } from "../../modules/GearManager";
import { GearListSelectCard } from "./gearListSelectCard";

export const GearListDetails = () => {
    const [gearItems, setGearItems] = useState([]);
    const [gearListItems, setGearListItems] = useState([]);
    const navigate = useNavigate();
    const sessionUser = JSON.parse(window.sessionStorage.getItem("hikerbox_user"))
    const sessionUserId = sessionUser.id
    const {listNameId} = useParams(); 


    const getGearListItems = () => {
        return getGearOnThisList(listNameId).then(gearFromAPI => {
            setGearListItems(gearFromAPI)
        } );
    }

    useEffect(() => {
        getGearListItems()

    }, []);

    // const gearIdsOnThisList = () => {
    //     let gearIdsOnThisList = []
    //     const listNameIdINT = parseInt(listNameId)
    //     for(const gearListItem of gearListItems){
    //         if (gearListItem.listId === listNameIdINT){
    //             gearIdsOnThisList.push(gearListItem.gearId)
    //         }
    //     }
    //     return gearIdsOnThisList

    //     }
        

    return (
        <>
        <h2 className="page__title">List Number{listNameId}</h2>
        <div className="">
            
            {gearListItems.map(gearItem => {
               return  <h2>{gearItem.gear.name}</h2>
            })}
            {console.log(gearListItems)}
        </div>
        </>
    )
}