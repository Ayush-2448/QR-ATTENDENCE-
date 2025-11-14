import { useNavigate } from "react-router-dom";
import "../css/forgot-password.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset request submitted");
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Forgot your Password?</h2>
        <form>
          <input type="email" placeholder="Enter your email" className="input-field" required />
          <a href="#" className="link">
            Use Phone number?
          </a>
          <button type="submit" className="login-btn" onClick={handleSubmit}>Log In</button>
          
        </form>
        <div className="divider">OR</div>
          <button type="button" className="google-btn">
            <img src="/images/google.png" alt="Google logo" className="icon" /> Log in with Google
          </button>
          <button type="button" className="whatsapp-btn">
            <img src="/images/whatsapp.png" alt="WhatsApp logo" className="icon" /> Log in with WhatsApp
          </button>
        <p>
          Don't have an account?{" "}
          <a href="#" className="sign-up-link">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
