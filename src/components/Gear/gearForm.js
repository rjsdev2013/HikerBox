import react, { useState } from "react";
import { useNavigate } from "react-router-dom"
import './gearForm.css'
import './../HikerBox.css'
import { addGearItem } from "../../modules/GearManager";


export const AddGearForm = () => {
    const sessionUser = JSON.parse(window.sessionStorage.getItem("hikerbox_user"))
    const sessionUserId = sessionUser.id
    const [gearItem, setGearItem] = useState({
        
        description: "",
        name: "",
        weight: null,
        url: "",
        quantity: null,
        userId: sessionUserId,
        inHB: false
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const newGearItem = {...gearItem}
        let selectedVal = event.target.value
        newGearItem[event.target.id] = selectedVal
        setGearItem(newGearItem)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (gearItem.url === "" || gearItem.name === "" || gearItem.weight === "" || gearItem.description === "" || gearItem.quantity === "") {
            window.alert('All fields must be filled in')
        } else {
            addGearItem(gearItem)
                .then(() => navigate("/gear"))
        }
    }

    return (
        <>
        <form>
            <div  className="form__inputs">
                <h2 className="page__title">Add New Gear</h2>
                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="name" className="form__input__label" >Name</label>
                        <input type="text" className="form__input__field" id="name" onChange={handleInputChange} required value={gearItem.name} /> 
                    </div>
                </fieldset>
                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="description" className="form__input__label" >Description</label>
                        <input type="text" className="form__input__field" id="description" onChange={handleInputChange} required value={gearItem.description} /> 
                        
                    </div>
                </fieldset>
                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="url" className="form__input__label">URL</label>
                        <input type="url" className="form__input__field" id="url" onChange={handleInputChange} required value={gearItem.url} /> 
                    </div>
                </fieldset>
                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="weight" className="form__input__label">Weight(in ounces)</label>
                        <input type="weight" className="form__input__field" id="weight" onChange={handleInputChange} required value={gearItem.weight} /> 
                    </div>
                </fieldset>
                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="quantity" className="form__input__label">Quantity</label>
                        <input type="quantity" className="form__input__field" id="quantity" onChange={handleInputChange} required value={gearItem.quantity} /> 
                    </div>
                </fieldset>
                <div className="form__input crud__btn">
                    <button className="submit__btn"
                        onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
                
            </div>
        </form>
        </>
    )
}