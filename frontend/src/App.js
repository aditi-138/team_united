import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddMember from "./pages/AddMember";
import ViewMembers from "./pages/ViewMembers";
import MemberDetails from "./pages/MemberDetails";

function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-member" element={<AddMember />} />
        <Route path="/members" element={<ViewMembers />} />
        <Route path="/members/:id" element={<MemberDetails />} />
      </Routes>
    </div>
  );
}

export default App;
