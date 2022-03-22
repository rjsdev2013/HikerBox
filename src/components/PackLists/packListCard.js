import { useNavigate } from "react-router-dom"

export const PackListCard = ({listName, listId}) => {
    const navigate = useNavigate();

    return (
        <>
        <div className="listName_cards">
            <div className="listName_cards">
                <h4 className="listName_title" target="_blank"> {listName.name}</h4>
                <p>Total Weight: 0oz</p>
                <div className="crud__btns">
                <button type="button" className="crud__btn btn" id="edit__btn" onClick={() => {navigate(`/${listName.id}/PackingList`)}} >Details</button>
                    <button type="button" className="crud__btn btn" id="edit__btn"onClick={() => {navigate(`/${listName.id}/editPackingList`)}} >Edit</button> 
            
                </div>
            </div>
        </div>
        </>
    )
}