import "./login.css";

function Login() {
  const loginUser = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Login</h2>
      </div>
      <form className="login-form">
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="login-input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="login-input"
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
