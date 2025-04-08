import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
    user: null,
    theme: 'light',
    language: 'en',
};

// Create context
export const GlobalContext = createContext(initialState);

// Reducer
const globalReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };
        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload,
            };
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: action.payload,
            };
        default:
            return state;
    }
};

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};