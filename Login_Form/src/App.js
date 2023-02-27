import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Register from "./login/Register";
import ForgotPassword from "./login/ForgotPasswd";
import "./App.css";

function App() {
  const [setUser] = useState(null);

  const handleUserChange = (newUser) => {
    setUser(newUser);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register onUserChange={handleUserChange} />} />
          <Route path="/" element={<Login onUserChange={handleUserChange} />} />
          <Route path="/forgot-password" element={<ForgotPassword onUserChange={handleUserChange} />} />

          <Route path="/login" element={<Login onUserChange={handleUserChange} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>

      {/* Login Component */}
      {/* <Login onUserChange={handleUserChange} /> */}

      {/* Register Component */}
      {/* <Register /> */}

      {/* User Component */}
      {/* <User user={user} /> */}
    </div>
  );
}

export default App;
