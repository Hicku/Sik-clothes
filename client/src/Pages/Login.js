function Login() {
  return (
    <div>
      <section className="login-container">
        <form>
          <div>
            <h1>Login</h1>
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter email" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
