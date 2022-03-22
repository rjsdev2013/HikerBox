import react from "react";

const remoteURL = "http://localhost:8088"

export const getAllGear = (id) => {
    return fetch(`${remoteURL}/gears?userId=${id}`)
    .then(response => response.json())
}

export const addGearItem = (newGearItem) => {
    return fetch(`${remoteURL}/gears`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGearItem)
    }).then(response => response.json)
}

export const editGear = (editedGear) => {
    return fetch(`${remoteURL}/gears/${editedGear.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedGear)
    }).then(response => response.json())
}

export const deleteGearItem = (id) => {
    return fetch(`${remoteURL}/gears/${id}`, {
        method: "DELETE"
    }).then(response => response.json())
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

export const getGearOnThisList = (listId) => {
    return fetch (`${remoteURL}/gearList?listId=${listId}&_expand=gear&_expand=list`)
    .then(response => response.json())
}

export const getGearItemById = (gearId) => {
    return fetch (`${remoteURL}/gears/${gearId}`)
    .then(response => response.json())
}

export const getListNameById = (listId) => {
    return fetch (`${remoteURL}/lists/${listId}`)
    .then(response => response.json())
}