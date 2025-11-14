import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Verify_styles.css";

const VerifyCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleChange = (index, value) => {
    if (value.match(/^[0-9]$/)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to next input if there's a value
      if (index < 5 && value) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = () => {
    const enteredCode = code.join("");
    console.log("Entered Code:", enteredCode);
    // Handle verification logic here
    navigate("/dashboard"); // Navigate to dashboard after verification
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Verify Code</h1>
        <div className="code-inputs">
          {code.map((num, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength="1"
              value={num}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>
        <p className="resend">
          Didn't receive a code? <a href="#">Resend</a>
        </p>
        <button className="verify-btn" onClick={handleSubmit}>Verify</button>
        <div className="divider">
          <span>OR</span>
        </div>
        <button type="button" className="google-btn">
            <img src="/images/google.png" alt="Google logo" className="icon" /> Log in with Google
        </button>
        <button type="button" className="whatsapp-btn">
            <img src="/images/whatsapp.png" alt="WhatsApp logo" className="icon" /> Log in with WhatsApp
        </button><p className="signup">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default VerifyCode;
