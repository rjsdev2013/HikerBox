import { useState } from "react";
import { addNewListName } from "../../modules/GearManager";
import { PackListList } from "./PackListList";


export const PackListForm = ({setShowResults}) => {
    const sessionUser = JSON.parse(window.sessionStorage.getItem("hikerbox_user"))
    const sessionUserId = sessionUser.id
    const [listName, setListName] = useState([]);


    // const handleInputChange = (event) => {
    //     const newListName = {...listName}
    //     let selectedVal = event.target.value
    //     newListName[event.target.id] = selectedVal
    //     setListName(newListName)
    // }

    const handleKeyPress = (event) => {
        const newListName = {...listName}
        let selectedVal = event.target.value
        newListName[event.target.id] = selectedVal
        newListName["userId"] = sessionUserId
        // newListName["userId"] = sessionUserId
    
        if(event.key === 'Enter'){
            console.log('Enter was Pressed!')
            addNewListName(newListName)
            setShowResults(false)
            }
    }
    
    return (
        <>
        <fieldset>
                <div  className="form__input">
                    <label htmlFor="name" className="form__input__label" >Name</label>
                    <input type="text" 
                        className="form__input__field" 
                        id="name" 
                        // onChange={handleInputChange} 
                        required value={listName.name} 
                        placeholder="New Packing List Name" 
                        onKeyPress={handleKeyPress}/> 
                </div>
            </fieldset>
            </>
    )
  }