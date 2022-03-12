import "./gearListSelectCard.css"
import "./../HikerBox.css"

export const GearListSelectCard = ({gearItem}) => {
    return (
        <>
        <div className="gearListSelectItem_cards">
            <div className="gearListSelectItem_cards">
                <label className="gearListSelectItem_title"> {gearItem.name}</label>
                <input type="radio" value={gearItem.name} name="gearListSelectItem"/>
                    <p><em>{gearItem.description}</em></p>
            </div>
        </div>
        </>
    )
}