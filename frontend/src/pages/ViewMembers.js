import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewMembers() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/members");
        setMembers(response.data);
      } catch (error) {
        console.error("Failed to fetch members", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleDelete = async (memberId) => {
    if (!window.confirm("Delete this member? This cannot be undone.")) {
      return;
    }
    try {
      await axios.delete(`http://localhost:5000/members/${memberId}`);
      setMembers((prev) => prev.filter((m) => m._id !== memberId));
    } catch (error) {
      console.error("Failed to delete member", error);
      alert(error.response?.data?.message || "Failed to delete member.");
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <h2>View Members</h2>
        <p>Browse all team members added to the system.</p>
      </div>

      <div className="actions" style={{ marginBottom: "16px" }}>
        <Link to="/" className="button secondary">
          Back Home
        </Link>
      </div>

      {loading ? (
        <p>Loading members...</p>
      ) : members.length === 0 ? (
        <p>No members found.</p>
      ) : (
        <div className="card-grid">
          {members.map((member) => (
            <div className="card" key={member._id}>
              <img
                src={
                  member.image
                    ? `http://localhost:5000/uploads/${member.image}`
                    : "https://via.placeholder.com/300x180?text=No+Image"
                }
                alt={member.name}
              />
              <h3>{member.name}</h3>
              <p>{member.role || "Role not specified"}</p>
              <div className="actions" style={{ marginTop: "12px" }}>
                <Link to={`/members/${member._id}`} className="button">
                  View Details
                </Link>
                <button
                  type="button"
                  className="button danger"
                  onClick={() => handleDelete(member._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewMembers;
