import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'


export const ApplicationViews = ({isAuthenticated, setIsAuthenticated}) => {
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
                <Route exact path="/" element={<Home />} />
                <Route exact path="/gear" element={
                    <PrivateRoute><gearList/></PrivateRoute>} />
                <Route exact path="/login" element={
                    <Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={
                    <Register />} />
            </Routes>
        </>
    )
}