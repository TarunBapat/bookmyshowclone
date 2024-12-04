import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.resetPassword({
        token: token,
        newPassword: newPassword,
      });
      if (response.status == 200) {
        toast.success(response.data.message);
      }
      navigate("/login");
      console.log("responseresponseresponse", response);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
