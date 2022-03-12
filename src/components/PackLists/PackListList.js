import React from "react"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllGear } from "../../modules/GearManager";
import { GearCard } from "../Gear/gearCard";
import { getAllListNames,addNewListName } from "../../modules/GearManager";
import { PackListCard } from "./packListCard";
import { PackListForm } from "./PackListForm";

export const PackListList = () => {
    const [listName, setListName] = useState([{
        id: null,
        name: ""
    }]);
    const [showResults, setShowResults] = useState(false)
    const unHideForm = () => setShowResults(true)

    const getListNames = () => {
        return getAllListNames().then(listsFromAPI => {
            setListName(listsFromAPI)
        } );
    }

    useEffect(() => {
        getListNames()
    }, [showResults]);



    return (
        <>
        <h2 className="page__title">Packing Lists</h2>
        <div className="big__btns">
            <button type="button" className="big__btn btn" id="big__btn" onClick={unHideForm} >Create New List</button>
            { showResults ? <PackListForm
                                setShowResults={setShowResults}
                                 /> : null }
        </div>

        <div className="packList_cards">
            {listName.map(l =>
                <PackListCard
                key={l.id}
                listName={l}
                />
            )}
        </div>  

        </>

    )
}