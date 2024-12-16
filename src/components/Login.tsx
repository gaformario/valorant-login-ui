import { useState, FocusEvent } from "react";
import { FaArrowRight } from "react-icons/fa";
import "../styles/index.css";
import logo from "../assets/logo.png";
import facebookIcon from "../assets/facebook-icon.png";
import googleIcon from "../assets/google-icon.png";
import appleIcon from "../assets/apple-icon.png";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    const span = e.target.previousElementSibling as HTMLElement;
    if (span) {
      span.classList.add("span-active");
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const span = e.target.previousElementSibling as HTMLElement;
    if (span && e.target.value === "") {
      span.classList.remove("span-active");
    }
  };

  const handleInputChange = () => {
    setIsButtonEnabled(username !== "" && password.length >= 8);
  };

  return (
    <section className="login">
      <div className="wrapper">
        <img src={logo} alt="Logo" className="login__logo" />
        <h1 className="login__title">Fazer login</h1>

        <label className="login__label">
          <span>nome de usuário</span>
          <input
            type="text"
            className="input"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              handleInputChange();
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>

        <label className="login__label">
          <span>senha</span>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              handleInputChange();
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>

        <div className="login__icons">
          <button type="button" className="icons__button">
            <img src={facebookIcon} alt="Facebook" />
          </button>
          <button type="button" className="icons__button">
            <img src={googleIcon} alt="Google" />
          </button>
          <button type="button" className="icons__button">
            <img src={appleIcon} alt="Apple" />
          </button>
        </div>

        <label className="login__label--checkbox">
          <input type="checkbox" className="input--checkbox" />
          Manter login
        </label>
      </div>

      <div className="wrapper">
        <button
          type="button"
          className="login__button"
          disabled={!isButtonEnabled}
          >
            <FaArrowRight size={17} />
        </button>

        <a href="#" className="login__link">
          não consegue iniciar sessão?
        </a>
        <a href="#" className="login__link">
          criar conta
        </a>
      </div>
    </section>
  );
}
