import { createContext, useContext, useReducer } from "react";

export const StateProviderContext = createContext();
export const StateProviderValue = () => useContext(StateProviderContext);

export const StateProvider = ({ initialState, reducer, children }) => (
    <StateProviderContext.Provider
        value={useReducer(reducer, initialState)}
    >
        {children}
    </StateProviderContext.Provider>
);

