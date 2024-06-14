import "./changePassword.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updatePassword, reset } from "../../features/auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const { currentPassword, newPassword } = passwords;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Password updated successfully");
      navigate("/");
    }

    dispatch(reset());
  });

  const onChange = (e) =>
    setPasswords({ ...passwords, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const passwordData = {
      currentPassword,
      newPassword,
    };

    dispatch(updatePassword(passwordData));
  };

  return (
    <div className="password-page-container">
      <section className="change-password-container">
        <form onSubmit={onSubmit}>
          <label htmlFor="currentPassword">Password</label>
          <input
            type="password"
            name="currentPassword"
            id="currentPassword"
            value={currentPassword}
            onChange={onChange}
            className="current-password"
          />
          <label htmlFor="newPassword">New password</label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            value={newPassword}
            onChange={onChange}
            className="new-password"
          />
          <button>Update</button>
        </form>
      </section>
      <section className="password-right-space">hello</section>
    </div>
  );
}

export default ChangePassword;
