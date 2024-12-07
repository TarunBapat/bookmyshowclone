import { useState } from "react";
import { toast } from "react-toastify";
import Api from "../../api/api.js";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      delete formData.confirmPassword;
      try {
        const response = await Api.Register(formData);
        console.log(response);
        if (response.status == 200) {
          toast.success("Registration successful!");
        }
      } catch (error) {
        toast.error("An unexpected error occurred.");
        console.log(error);
      }
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAdmin: false,
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid",
            }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid",
            }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid",
            }}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Re-enter Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid",
            }}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          )}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Is Admin?</label>
          <select
            name="isAdmin"
            value={formData.isAdmin}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
