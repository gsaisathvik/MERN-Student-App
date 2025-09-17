import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import StudentList from './pages/StudentList'
import AddStudent from './pages/AddStudent'

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
