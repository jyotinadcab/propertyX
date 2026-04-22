import React, { useState } from "react";
import AuthLayout from "../Auth/AuthLayout";
import InputField from "../Auth/InputField";
import Button from "../Auth/Button";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <AuthLayout title="Create Account" subtitle="Start your journey">
      <form onSubmit={handleSignup}>
        <InputField
          label="Full Name"
          type="text"
          placeholder="Enter name"
          value={form.name}
          onChange={(e) => handleChange(e)}
          name="name"
        />

        <InputField
          label="Email"
          type="email"
          placeholder="Enter email"
          value={form.email}
          onChange={(e) => handleChange(e)}
          name="email"
        />

        <InputField
          label="Password"
          type="password"
          placeholder="Enter password"
          value={form.password}
          onChange={(e) => handleChange(e)}
          name="password"
        />

        <Button text="Sign Up" />

        <p className="text-sm text-center mt-4 text-gray-300">
          Already have an account?{" "}
          <Link to="/" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Signup;