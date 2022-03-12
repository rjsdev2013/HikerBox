import react from "react";

const remoteURL = "http://localhost:8088"
const sessionUser = JSON.parse(window.sessionStorage.getItem("hikerbox_user"))
const sessionUserId = sessionUser.id

export const getAllGear = () => {
    return fetch(`${remoteURL}/gear?userId=${sessionUserId}`)
    .then(response => response.json())
}

export const addGearItem = (newGearItem) => {
    return fetch(`${remoteURL}/gear`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGearItem)
    }).then(response => response.json)
}

export const getAllListNames = () => {
    return fetch (`${remoteURL}/lists?userId=${sessionUserId}`)
    .then(response => response.json())
}

export const addNewListName = (newListName) => {
    return fetch(`${remoteURL}/lists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newListName)
    }).then(response=>response.json)
}