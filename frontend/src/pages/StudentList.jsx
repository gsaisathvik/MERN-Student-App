import React, { useEffect, useState } from 'react'

function StudentList() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/students')
      .then(res => res.json())
      .then(data => setStudents(data))
  }, [])

  return (
    <div>
      <h2>Student List</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
