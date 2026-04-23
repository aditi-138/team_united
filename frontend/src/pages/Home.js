import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Student Team Members Management Application</h1>
        <h3>Team United</h3>
        <p>Manage your student team members and keep their details in one place.</p>
      </div>

      <div className="actions">
        <Link to="/add-member" className="button">
          Add Member
        </Link>
        <Link to="/members" className="button secondary">
          View Members
        </Link>
      </div>
    </div>
  );
}

export default Home;
