import React, { useState } from "react";

const [selected, setSelected] = useState("student");

function ToggleButtons(e) {
    setSelected(e.target.value);
}

export default function LoginCard() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "22rem" }}>
        <div className="d-flex gap-3 mb-3">
          <button className={`btn border border-black  w-50 ${selected === "student" ? "btn-primary" : "btn-outline-primary"}`} value="student" onClick={(e)=>ToggleButtons(e)}>Student</button>
          <button className={`btn border border-black w-50 ${selected === "student" ? "btn-primary" : "btn-outline-primary"}`} value="teacher" onClick={(e)=>ToggleButtons(e)}>Teacher</button>
        </div>

        <form>
          {/* Roll Number */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="rollno"
              placeholder="Roll Number"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
