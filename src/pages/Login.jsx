import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()


const handle = async (e) => {
    e.preventDefault()
    try {
        await login(email, password)
        navigate('/')
    } catch {
        alert('Credenciales inválidas')
    }
}


return (
    <div className="page login-page">
        <form onSubmit={handle} className="card">
            <h2>Ingresar</h2>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
            <button type="submit">Entrar</button>
        </form>
    </div>
)
}

