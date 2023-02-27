import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Reg.Log.css";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleRegister = async () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setStatusMessage("Invalid email address.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setStatusMessage("Registration successful!");
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setStatusMessage("Email address is already registered.");
      } else {
        setStatusMessage(error.message);
      }
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h3> Register User </h3>
      <input
        type="email"
        placeholder="Email..."
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password..."
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <label>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />{" "}
        Show password
      </label>

      <button onClick={handleRegister}> Create User</button>
      <button onClick={handleLogin}> Login </button>

      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default Register;
