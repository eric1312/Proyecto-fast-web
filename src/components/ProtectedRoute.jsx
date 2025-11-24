import React from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


export default function ProtectedRoute({ children, requiredRole }) {
    const { user } = useContext(AuthContext)
    if (!user) return <Navigate to="/login" replace />
    if (requiredRole && user.role !== requiredRole) return <Navigate to="/" replace />
    return children
}