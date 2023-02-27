import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Reg.Log.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      // Check if email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrorMessage("Invalid email format.");
        return;
      }
  
      // Attempt to sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      window.alert("Login successful!");
    } catch (error) {
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        setErrorMessage("Invalid email or password.");
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <h3>Login</h3>
      <input
        type="email"
        placeholder="Email..."
        onChange={(event) => {
          setEmail(event.target.value);
          setErrorMessage("");
        }}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password..."
        onChange={(event) => {
          setPassword(event.target.value);
          setErrorMessage("");
        }}
      />
      <label htmlFor="show-password">
        <input
          type="checkbox"
          id="show-password"
          checked={showPassword}
          onChange={(event) => setShowPassword(event.target.checked)}
        />
        Show Password
      </label>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button onClick={handleLogin}>Login</button>
      <div className="buttons-container">
        <button onClick={() => navigate("/register")}>Sign Up</button>
        <button onClick={() => navigate("/forgot-password")}>Forgot password</button>
      </div>
    </div>
  );
}

export default Login;
