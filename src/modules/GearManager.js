import react from "react";

const remoteURL = "http://localhost:8088"

export const getAllGear = (id) => {
    return fetch(`${remoteURL}/gear?userId=${id}`)
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

export const getAllListNames = (id) => {
    return fetch (`${remoteURL}/lists?userId=${id}`)
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

export const addGearListItem = (newGearListItem) => {
    return fetch(`${remoteURL}/gearList`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGearListItem)
    }).then(response => response.json)
}


export const getAllGearListItems = (id) => {
    return fetch(`${remoteURL}/gearList?userId=${id}`)
    .then(response => response.json())
}