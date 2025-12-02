import React, { useState, useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

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
        updateUser({ displayName: name, photoURL }).then(() => {
          form.reset();
          navigate("/");
        });
      })
      .catch((error) => setFirebaseError(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>WarmPaws - Register</title>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegisterBtn} className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                required
                placeholder="Enter Your Name"
              />
              {nameError && <p className="text-xs text-error">{nameError}</p>}

              <label className="label">Photo URL</label>
              <input
                name="photoURL"
                type="text"
                className="input"
                required
                placeholder="Give Photo URL"
              />

              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                required
                placeholder="Enter Your Email"
              />

              <label className="label">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input w-full"
                  required
                  placeholder="password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer text-sm"
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </span>
              </div>

              {passwordError && (
                <p className="text-xs text-error">{passwordError}</p>
              )}

              {firebaseError && (
                <p className="text-xs text-error">{firebaseError}</p>
              )}

              <button
                type="submit"
                className="btn bg-purple-700 hover:bg-purple-800 text-white mt-4"
              >
                Register
              </button>

              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="btn mt-3 bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Sign In with Google
              </button>

              <p className="font-semibold text-center pt-5">
                Already Have An Account ?{" "}
                <Link
                  className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;