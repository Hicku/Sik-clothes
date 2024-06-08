import "./changePassword.css";

function changePassword() {
  return (
    <div className="password-page-container">
      <section className="change-password-container">
        <form>
          <label htmlFor="currentPassword">Password</label>
          <input
            type="password"
            name="currentPassword"
            id="currentPassword"
            // value={password}
            // onChange={onChange}
            className="current-password"
          />
          <label htmlFor="newPassword">New password</label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            // value={password}
            // onChange={onChange}
            className="new-password"
          />
          <button>Update</button>
        </form>
      </section>
      <section className="password-right-space">hello</section>
    </div>
  );
}

export default changePassword;
