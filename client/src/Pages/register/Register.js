import "../login/login.css";

function Register() {
  return (
    <div className="login-container">
      <div className="register-header">
        <h2>Register</h2>
      </div>
      <form className="login-form">
        <div className="input-container">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="login-input"
          />
        </div>
        <div className="input-container">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="login-input"
          />
        </div>
        <div className="input-container">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter a password"
            className="login-input"
          />
        </div>
        <div className="input-container">
          <label for="password">Confirm password</label>
          <input
            type="password"
            id="password"
            placeholder="Confirm your password"
            className="login-input"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Register;
