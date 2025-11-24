import React from 'react'
import { useCart } from '../context/CartContext'


export default function ProductCard({ product }) {
    const { add } = useCart()
    return (
        <div className="product-card">
            <img src={product.imagen} alt={product.nombre} />
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <strong>${product.precio}</strong>
            <button onClick={() => add(product)}>Agregar</button>
        </div>
    )
}