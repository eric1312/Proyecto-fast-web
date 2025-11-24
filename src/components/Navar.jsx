import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'


export default function Navbar() {
    const { cart } = useCart()
    return (
        <nav className="navbar">
            <Link to="/" className="logo">FAST</Link>
            <div className="actions">
                <Link to="/carrito">Carrito ({cart.items.length})</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}