import "./login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Login</h2>
      </div>
      <form className="login-form">
        <div className="input-container">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="login-input"
          />
        </div>
        <div className="input-container">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
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

export default Login;
