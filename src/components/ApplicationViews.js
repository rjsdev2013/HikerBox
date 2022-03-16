import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { AddGearForm } from "./Gear/gearForm"
import { GearList } from "./Gear/gearList.js"
import {PackListList} from "./PackLists/PackListList.js"
import { Home } from "./Home"
import { GearListForm } from "./GearList/gearListForm"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  }

  const setAuthUser = (user) => {
    sessionStorage.setItem("hikerbox_user", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("hikerbox_user") !== null)
  }

  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/gear" element={
            <PrivateRoute>
              <GearList/>
            </PrivateRoute>
        } />
        <Route exact path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
        <Route exact path="/gearform" element={
            <PrivateRoute>
              <AddGearForm />
            </PrivateRoute>
          } />
        <Route exact path="/lists" element={
            <PrivateRoute>
              <PackListList />
            </PrivateRoute>
          } />
        <Route exact path="/:listNameId/editPackingList" element={
            <PrivateRoute>
              <GearListForm />
            </PrivateRoute>
          } />
      </Routes>

    </>
  )
}