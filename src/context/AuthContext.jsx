import React, { useState } from 'react'
import { AuthContext } from './AuthContextValue'
import jwtDecode from 'jwt-decode'
import { authService } from '../services/api'


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const decoded = jwtDecode(token)
                return { ...decoded }
            } catch (e) {
                console.error('Token inválido', e)
                localStorage.removeItem('token')
            }
        }
        return null
    })


    const login = async (email, password) => {
        const res = await authService.login({ email, password })
        const { token } = res.data
        localStorage.setItem('token', token)
        const decoded = jwtDecode(token)
        setUser(decoded)
        return decoded
    }


    const logout = () => {
        localStorage.removeItem('token')
        setUser(null)
    }


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}