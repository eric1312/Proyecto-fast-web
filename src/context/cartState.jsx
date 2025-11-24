import { createContext } from 'react'

export const CartContext = createContext()

export const initialState = {
    items: [],
    total: 0
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            const existingItem = state.items.find(item => item.id === action.payload.id)
            
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    total: state.total + action.payload.price
                }
            }
            
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }],
                total: state.total + action.payload.price
            }
        }
        
        case 'REMOVE':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                total: state.total - (state.items.find(item => item.id === action.payload)?.price || 0)
            }
        
        case 'SET_QTY': {
            const item = state.items.find(item => item.id === action.payload.id)
            const oldQty = item?.quantity || 0
            const newQty = action.payload.qty
            const qtyDiff = newQty - oldQty
            
            if (newQty <= 0) {
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== action.payload.id),
                    total: state.total - (item?.price * oldQty || 0)
                }
            }
            
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: newQty }
                        : item
                ),
                total: state.total + (item?.price * qtyDiff || 0)
            }
        }
        
        case 'CLEAR':
            return {
                items: [],
                total: 0
            }
        
        default:
            return state
    }
}
