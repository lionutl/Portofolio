import { useState } from "react";
import { auth } from "../firebase";
import "./forgotpssw.css";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";


function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSendResetEmail = async () => {
    try {
      // Check if email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrorMessage("Invalid email format.");
        return;
      }

      await sendPasswordResetEmail(auth, email);
      setIsEmailSent(true);
    } catch (error) {
      console.log(error.code, error.message);
      if (error.code === "auth/user-not-found") {
        setErrorMessage("User not found.");
      }
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSendResetEmail();
  };

  return (
    <div className="forgot-password-container">
      {!isEmailSent ? (
        <div>
          <h3>Forgot Password</h3>
          <p>
            Enter your email address and we'll send you instructions on how to
            reset your password.
          </p>
          <div className="reset-password-container">
            <form onSubmit={handleFormSubmit}>
              <input
                type="email"
                placeholder="Email..."
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setErrorMessage("");
                }}
              />
              {errorMessage && (
                <p style={{ color: "red" }}>{errorMessage}</p>
              )}
              <button type="submit"> Send Reset Email </button>
            </form>
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      ) : (
        <div>
          <p>
            An email has been sent to {email}. Follow the instructions in the
            email to reset your password.
          </p>
          <Link to="/login">Back to Login</Link>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
