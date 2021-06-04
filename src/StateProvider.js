/* Setting up the Data Layer */
/* Need to track Basket */
import React, { createContext, useContext, useReducer } from 'react'

// This is the Data Layer
export const StateContext = createContext();

//Build Provider

export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>);
}
//This is how we use it inside of a component
export const useStateValue = () => {
    return (useContext(StateContext))
}