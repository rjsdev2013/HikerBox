import react from "react";
import { Link } from "react-router-dom";
import "./gearCard.css"
import "./../HikerBox.css"
import { useNavigate } from "react-router-dom";

export const GearCard = ({gearItem}) => {
    const navigate = useNavigate();


    return (
        <>
        <div className="gearItem_cards">
            <div className="gearItem_cards">
                <h4 className="gearItem_title" target="_blank"> {gearItem.name}</h4>
                    <p><em>{gearItem.description}</em></p>

                <div className="crud__btns">
                    <button type="button" className="crud__btn btn" id="edit__btn"onClick={() => {navigate(`/`)}} >Edit</button> 
            
                </div>
                <div className="crud__btns">
                    <button type="button" className="crud__btn btn" id="hikerbox_btn" onClick={() => {navigate(`/`)}} >HikerBox</button> 
            
                </div>
            </div>
        </div>
        </>
    )
}