import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import image from "../images/NewLogoWhite-B8AvPPTY.png";

export default function Signup() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const isValidMobile = mobile.length === 10 && /^[0-9]+$/.test(mobile);
  const isValidName = name.trim().length >= 3;

  const isValid = isValidMobile && isValidName;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    console.log("Name:", name);
    console.log("Mobile:", mobile);

    alert("OTP sent for signup!");
  };

  // ✅ Google Sign-Up Function
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("User:", user);
      alert(`Welcome ${user.displayName}`);
    } catch (error) {
      console.error(error);
      alert("Google Sign-Up failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/30 blur-[140px] rounded-full top-[-100px] right-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-600/30 blur-[140px] rounded-full bottom-[-100px] left-[-100px]"></div>

      <div className="relative w-[380px] bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">

        <div className="flex justify-center mb-4">
          <div className="flex justify-center mb-4">
            <img
              src={image}
              alt="Logo"
              className="w-28 object-contain"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-white text-center">
          Create Account 🚀
        </h2>

        <p className="text-gray-400 text-center text-sm mt-2 mb-6">
          Start managing your real estate journey
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label className="text-gray-400 text-sm">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-2 mb-4 bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none placeholder-gray-500 focus:border-cyan-400 transition"
          />

          {/* Mobile */}
          <label className="text-gray-400 text-sm">
            Mobile Number
          </label>

          <div className="flex items-center mt-2 mb-5 border border-white/10 rounded-lg overflow-hidden bg-white/5 focus-within:border-cyan-400 transition">
            <span className="px-4 text-cyan-400 border-r border-white/10">
              +91
            </span>

            <input
              type="text"
              maxLength={10}
              placeholder="Enter 10 digit number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full bg-transparent p-3 text-white outline-none placeholder-gray-500"
            />
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-3 rounded-lg font-semibold transition ${isValid
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-90"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
          >
            Send OTP
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-[1px] bg-white/10"></div>
          <span className="px-3 text-gray-500 text-xs">
            OR SIGN UP WITH
          </span>
          <div className="flex-1 h-[1px] bg-white/10"></div>
        </div>

        {/* Google Signup */}
        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-2 border border-white/10 py-3 rounded-lg text-white hover:bg-white/10 transition"
        >
          <FcGoogle size={20} />
          <span>Sign up with Google</span>
        </button>

        <p className="text-center text-gray-400 text-xs mt-6">
          Already have an account?{" "}
          <span className="text-cyan-400 cursor-pointer hover:underline">
            Login
          </span>
        </p>

        <p className="text-center text-gray-400 text-xs mt-2">
          © 2026 <span className="text-cyan-400">PropertyX</span>
        </p>
      </div>
    </div>
  );
}