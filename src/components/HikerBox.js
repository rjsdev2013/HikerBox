import React,  {useState} from "react"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import "./HikerBox.css"

export const HikerBox = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("hikerbox_user") !== null)

  const setAuthUser = (user) => {
      sessionStorage.setItem("hikerbox_user", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("hikerbox_user") !== null)
  }

  const clearUser = () => {
      sessionStorage.clear();
      setIsAuthenticated(sessionStorage.getItem("hikerbox_user") !== null)
  }

  return (
    <>
      <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
      <ApplicationViews 
          setAuthUser={setAuthUser}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
      />
    </>
  )
}