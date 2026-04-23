import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function MemberDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/members/${id}`);
        setMember(response.data);
      } catch (error) {
        console.error("Failed to fetch member", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Delete this member? This cannot be undone.")) {
      return;
    }
    try {
      await axios.delete(`http://localhost:5000/members/${id}`);
      navigate("/members");
    } catch (error) {
      console.error("Failed to delete member", error);
      alert(error.response?.data?.message || "Failed to delete member.");
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <h2>Member Details</h2>
      </div>

      <div className="actions" style={{ marginBottom: "16px" }}>
        <Link to="/members" className="button secondary">
          Back to Members
        </Link>
        {member && (
          <button type="button" className="button danger" onClick={handleDelete}>
            Delete Member
          </button>
        )}
      </div>

      {loading ? (
        <p>Loading member details...</p>
      ) : !member ? (
        <p>Member not found.</p>
      ) : (
        <div className="form-card">
          <img
            className="details-image"
            src={
              member.image
                ? `http://localhost:5000/uploads/${member.image}`
                : "https://via.placeholder.com/300x200?text=No+Image"
            }
            alt={member.name}
          />
          <p>
            <strong>Name:</strong> {member.name}
          </p>
          <p>
            <strong>Role:</strong> {member.role || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {member.email || "N/A"}
          </p>
          <p>
            <strong>Contact:</strong> {member.contact || "N/A"}
          </p>
          <p>
            <strong>Additional Details:</strong> {member.additionalDetails || "N/A"}
          </p>
        </div>
      )}
    </div>
  );
}

export default MemberDetails;
