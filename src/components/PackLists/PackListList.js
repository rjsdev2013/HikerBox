import React from "react"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllGear } from "../../modules/GearManager";
import { GearCard } from "../Gear/gearCard";
import { getAllListNames,addNewListName } from "../../modules/GearManager";
import { PackListCard } from "./packListCard";

export const PackListList = () => {
    const [listName, setListName] = useState([{
        id: null,
        name: ""
    }]);
    const [showResults, setShowResults] = useState(false)
    const unHideForm = () => setShowResults(true)
    
    const navigate = useNavigate();


    const getListNames = () => {
        return getAllListNames().then(listsFromAPI => {
            setListName(listsFromAPI)
        } );
    }

    useEffect(() => {
        getListNames()
    }, []);

    const handleInputChange = (event) => {
        const newListName = {...listName}
        let selectedVal = event.target.value
        newListName[event.target.id] = selectedVal
        setListName(newListName)
    }

    const handleKeyPress = (event) => {
        const newListName = {...listName}
        let selectedVal = event.target.value
        newListName[event.target.value] = selectedVal
        
        if(event.key === 'Enter'){
            console.log('Enter was Pressed!')
          addNewListName(newListName)
        }
      }

      const Results = () => {
        
        return (
            <>
            <fieldset>
                    <div  className="form__input">
                        <label htmlFor="listName" className="form__input__label" >Name</label>
                        <input type="text" 
                            className="form__input__field" 
                            id="listName" 
                            // onChange={handleInputChange} 
                            required value={listName.name} 
                            placeholder="New Packing List Name" 
                            onKeyPress={handleKeyPress}/> 
                    </div>
                </fieldset>
                </>
        )
      }





    return (
        <>
        <h2 className="page__title">Packing Lists</h2>
        <div className="big__btns">
            <button type="button" className="big__btn btn" id="big__btn" onClick={unHideForm} >Create New List</button>
            { showResults ? <Results /> : null }
        </div>

        <div className="gearItem_card">
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