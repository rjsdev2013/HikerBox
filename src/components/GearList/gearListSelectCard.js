import "./gearListSelectCard.css"
import "./../HikerBox.css"

export const GearListSelectCard = ({gearItem, isSelected}) => {
    return (
        <>
        <div className="gearListSelectItem_cards">
            <div className="gearListSelectItem_cards">
                <input type="checkbox" 
                    value={gearItem.id} 
                    name="gearListSelectItem"
                    onClick={isSelected}/>
                <label className="gearListSelectItem_title"> {gearItem.name}</label>
                    <p><em>{gearItem.description}</em></p>
            </div>
        </div>
        </>
    )
}

//IF the gearItem.id is on this list, the box should start checked. 

// //pass in isSelected prop; eventHandler for checkbox onChange; 
//  how am I going to handle Delete as well;