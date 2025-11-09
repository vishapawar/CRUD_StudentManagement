import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function StudentForm() {
  const [student, setStudent] = useState({
    fullName: "",
    email: "",
    mobile: "",
    college: "",
    course: "",
    batchCode: "",
    joiningDate: "",
    remarks: ""
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/students${id}`)
        .then(res => setStudent(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:3000/students${id}`, student)
        .then(() => navigate("/"));
    } else {
      axios.post("http://localhost:3000/students", student)
        .then(() => navigate("/"));
    }
  };

  return (
    <div className="container col-md-6">
      <h3 className="text-center mb-3">{id ? "Edit Student" : "Add New Student"}</h3>
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <div className="mb-3">
          <label>Full Name</label>
          <input type="text" className="form-control" name="fullName" value={student.fullName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={student.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Contact Number</label>
          <input type="number" className="form-control" name="mobile" value={student.mobile} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>College</label>
          <input type="text" className="form-control" name="college" value={student.college} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Course</label>
          <select className="form-select" name="course" value={student.course} onChange={handleChange}>
            <option value="">Select Course</option>
            <option>HTML</option>
            <option>CSS</option>
            <option>JavaScript</option>
            <option>React</option>
            <option>Node</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Batch Code</label>
          <input type="text" className="form-control" name="batchCode" value={student.batchCode} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Joining Date</label>
          <input type="date" className="form-control" name="joiningDate" value={student.joiningDate} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Remarks</label>
          <textarea className="form-control" name="remarks" rows="3" value={student.remarks} onChange={handleChange}></textarea>
        </div>
        <button className="btn btn-primary w-100">{id ? "Update" : "Add"} Student</button>
      </form>
    </div>
  );
}
