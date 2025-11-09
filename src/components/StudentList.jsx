import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  const loadStudents = () => {
    axios.get("http://localhost:3000/students")
      .then(res => setStudents(res.data));
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      axios.delete(`http://localhost:3000/students/${id}`)
        .then(() => loadStudents());
    }
  };
  

  return (
    <div className="container">
      <h3 className="text-center mb-3">All Students</h3>
      <table className="table table-striped table-bordered shadow">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Course</th>
            <th>College</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={s.id}>
              <td>{index + 1}</td>
              <td>{s.fullName}</td>
              <td>{s.email}</td>
              <td>{s.mobile}</td>
              <td>{s.course}</td>
              <td>{s.college}</td>
              <td>
                <Link to={`/edit/${s.id}`} className="btn btn-sm btn-warning me-2">Edit</Link>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
