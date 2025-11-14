import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../css/login_styles.css";

const AdminLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: "Professor" });
    navigate("/daily-attendance");
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2> Professor Login account</h2>
        <form>
          <input type="text" placeholder="Phone Number" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-btn" onClick={handleLogin}>Log In</button>
          <div className="divider">OR</div>
          <button type="button" className="google-btn">
            <img src="/images/google.png" alt="Google logo" className="icon" /> Log in with Google
          </button>
          <button type="button" className="whatsapp-btn">
            <img src="/images/whatsapp.png" alt="WhatsApp logo" className="icon" /> Log in with WhatsApp
          </button>
        </form>
        <p className="signup-text">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;