import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

// Basic reducer for cart actions. Adjust payload shape to your app's needs.
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            
            return [...state, action.payload]

        case 'REMOVE':
            
            if (action.payload && action.payload.id !== undefined) {
                return state.filter(item => item.id !== action.payload.id)
            }
            if (typeof action.payload === 'number') {
                return state.filter((_, idx) => idx !== action.payload)
            }
            return state

        case 'CLEAR':
            return []

        default:
            return state
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartStateContext)
}
export const useDispatchCart = () => {
    return useContext(CartDispatchContext)
}