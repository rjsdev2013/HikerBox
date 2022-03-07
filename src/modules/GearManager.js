import react from "react";

const remoteURL = "http://localhost:8088"

export const getAllGear = () => {
    return fetch(`${remoteURL}/gear`)
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