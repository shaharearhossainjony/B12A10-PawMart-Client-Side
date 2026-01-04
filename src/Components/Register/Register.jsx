
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firebaseError, setFirebaseError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegisterBtn = (event) => {
    event.preventDefault();
    setFirebaseError("");

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (name.length < 6) {
      setNameError("Name should have at least 6 characters");
      return;
    } else {
      setNameError("");
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then(() => {
        toast.success("Registered successfully!");
        updateUser({ displayName: name, photoURL }).then(() => {
          form.reset();
          navigate("/");
        });
      })
      .catch((error) => setFirebaseError(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Registered successfully!");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 p-4">
      <title>PawMart - Register</title>

      <div className="w-full max-w-lg bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-2xl rounded-3xl overflow-hidden transition-all">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-2">Create Account</h2>
          <p className="text-white/80 text-center mb-8 text-sm">Join the WarmPaws community today</p>

          <form onSubmit={handleRegisterBtn} className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-white mb-1 ml-1">Name</label>
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
                required
              />
              {nameError && <p className="text-[10px] text-red-200 mt-1 ml-1">{nameError}</p>}
            </div>


            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-white mb-1 ml-1">Photo URL</label>
              <input
                name="photoURL"
                type="text"
                placeholder="https://..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
                required
              />
            </div>


            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white mb-1 ml-1">Email</label>
              <input
                name="email"
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white mb-1 ml-1">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>
              </div>
              {passwordError && <p className="text-[10px] text-red-200 mt-1 ml-1">{passwordError}</p>}
            </div>

            {firebaseError && (
              <div className="md:col-span-2 bg-red-500/20 border border-red-500/50 text-red-100 text-xs py-2 px-3 rounded-lg text-center">
                {firebaseError}
              </div>
            )}

            <button
              type="submit"
              className="md:col-span-2 w-full py-3 mt-2 rounded-xl bg-white text-purple-700 font-bold hover:bg-opacity-90 active:scale-[0.98] transition-all shadow-lg"
            >
              Register Now
            </button>

            <div className="md:col-span-2 relative my-2">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/20"></span></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-transparent px-2 text-white/60">Or</span></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="md:col-span-2 w-full py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign Up with Google
            </button>
          </form>

          <p className="mt-6 text-center text-white/70 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-white font-bold hover:underline underline-offset-4">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;


















