import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'


export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:id" element={<CategoryPage />} />
            <Route path="/producto/:id" element={<ProductPage />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />


            <Route
              path="/admin/*"
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
        </Routes>
      </main>
    </div>
  )
}