import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddStudent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [course, setCourse] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:5000/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, course })
    })
    navigate('/')
  }

  return (
    <div className="card p-4 shadow-sm">
      <h2 className="mb-3">Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Course</label>
          <input type="text" className="form-control" value={course} onChange={(e) => setCourse(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  )
}

export default AddStudent
