import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">Student System</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">All Students</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add">Add Student</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
