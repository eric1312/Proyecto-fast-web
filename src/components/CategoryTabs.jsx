import React from 'react'

export default function CategoryTabs({ categories, selected, onSelect }) {
    return (
        <div className="category-tabs">
            {categories.map(cat => (
                <button
                    key={cat.id}
                    className={selected === cat.id ? 'active' : ''}
                    onClick={() => onSelect(cat.id)}
                >{cat.nombre}</button>
            ))}
        </div>
    )
}