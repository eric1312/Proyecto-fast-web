import React, { useReducer } from 'react'
import { CartContext, initialState, reducer } from './cartState'

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const add = (product) => dispatch({ type: 'ADD', payload: product })
    const remove = (id) => dispatch({ type: 'REMOVE', payload: id })
    const setQty = (id, qty) => dispatch({ type: 'SET_QTY', payload: { id, qty } })
    const clear = () => dispatch({ type: 'CLEAR' })

    return (
        <CartContext.Provider value={{ cart: state, add, remove, setQty, clear }}>
            {children}
        </CartContext.Provider>
    )
}