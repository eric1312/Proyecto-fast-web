import React, { useEffect, useState } from 'react'
import { categoriasService, productosService } from '../services/api'
import CategoryTabs from '../components/CategoryTabs'
import ProductList from '../components/ProductList'


export default function Home() {
    const [categorias, setCategorias] = useState([])
    const [productos, setProductos] = useState([])
    const [selected, setSelected] = useState(null)


    useEffect(() => {
        (async () => {
            const c = await categoriasService.getAll()
            setCategorias(c.data)
            setSelected(c.data[0]?.id)
            const p = await productosService.getAll()
            setProductos(p.data)
        })()
    }, [])


    return (
        <div className="page home">
            <CategoryTabs categories={categorias} selected={selected} onSelect={setSelected} />
            <ProductList products={productos.filter(p => p.categoriaId === selected)} />
            </div>
    )
}