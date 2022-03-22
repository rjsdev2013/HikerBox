import React, {useState, useEffect} from "react"
import { useParams,useNavigate } from "react-router-dom"
import { editGear, getGearItemById } from "../../modules/GearManager"


export const EditGearForm = () => {
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
    const [isLoading, setIsLoading] = useState(false);
    const {gearId} = useParams();

    const handleFieldChange = (event) => {
        const stateToChange = {...gearItem };
        stateToChange[event.target.id] = event.target.value;
        setGearItem(stateToChange)
    }

    const updateGearItem = (event) => {
        event.preventDefault()
        setIsLoading(true);

        const editedGear = {
            id: gearId,
            description: gearItem.description,
            name: gearItem.name,
            weight: gearItem.weight,
            url: gearItem.url,
            quantity: gearItem.quantity,
            userId: sessionUserId,
            inHB: false
        };
    editGear(editedGear)
        .then(() => navigate("/gear")
        )
    }

    useEffect(() => {
        getGearItemById(gearId)
            .then(gearItem => {
                setGearItem(gearItem);
                setIsLoading(false);
            });
    }, [gearId]);

    return (
        <>
                <form>
            <div  className="form__inputs">
                <h2 className="page__title">Edit Your {gearItem.name}</h2>
                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="name" className="form__input__label" >Name</label>
                        <input type="text" className="form__input__field" id="name" onChange={handleFieldChange} required value={gearItem.name} /> 
                    </div>
                </fieldset>
                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="description" className="form__input__label" >Description</label>
                        <input type="text" className="form__input__field" id="description" onChange={handleFieldChange} required value={gearItem.description} /> 
                        
                    </div>
                </fieldset>
                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="url" className="form__input__label">URL</label>
                        <input type="url" className="form__input__field" id="url" onChange={handleFieldChange} required value={gearItem.url} /> 
                    </div>
                </fieldset>
                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="weight" className="form__input__label">Weight(in ounces)</label>
                        <input type="weight" className="form__input__field" id="weight" onChange={handleFieldChange} required value={gearItem.weight} /> 
                    </div>
                </fieldset>
                <fieldset>
                    <div  className="form__input">
                        <label htmlFor="quantity" className="form__input__label">Quantity</label>
                        <input type="quantity" className="form__input__field" id="quantity" onChange={handleFieldChange} required value={gearItem.quantity} /> 
                    </div>
                </fieldset>
                <div className="form__input crud__btn">
                    <button className="submit__btn"
                        onClick={updateGearItem}>
                        Save
                    </button>
                </div>
                
            </div>
        </form>
        </>
    )
}
