import { useRef, useState } from "react";
import { BG_IMAGE } from "../utils/constants";
import { userLoginSchema } from "../utils/validations";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [loginError, setLoginError] = useState(null);

  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");

  const handleButtonClick = () => {
    const userSchema = userLoginSchema(!isSignIn);
    const result = userSchema.safeParse({
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
    });

    if (result.success) {
      setLoginError(null); // Reset error state
      // Proceed with sign-in or sign-up logic
    } else {
      setLoginError(result.error.errors); // Set the error messages
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    setLoginError(null);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMAGE} alt="bgImage" />
      </div>

      <form
        action=""
        className="w-4/12 p-10 bg-opacity-85 absolute text-white my-36 mx-auto right-0 left-0 bg-black rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="py-4 my-2 text-3xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
          ref={email}
        />
        <input
          type="password"
          placeholder={isSignIn ? "Password" : "Create Password"}
          className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
          ref={password}
        />
        {!isSignIn && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
            ref={confirmPassword}
          />
        )}
        <button
          className="bg-[#E50914] py-2 my-2 rounded-lg w-full hover:bg-red-800"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {loginError && (
          <div className="text-red-500 mt-2">
            {loginError.map((error, index) => (
              <p key={index}>{error.message}</p>
            ))}
          </div>
        )}

        {isSignIn && (
          <p className="text-center mt-1 cursor-pointer hover:underline hover:text-gray-400">
            Forgot Password?
          </p>
        )}

        {isSignIn && (
          <div className="flex gap-2 mt-16">
            <input type="checkbox" className="w-4" />
            <p>Remember me</p>
          </div>
        )}

        <div className="flex gap-2 mt-4">
          <p className="text-gray-400">
            {isSignIn ? "New to Netflix?" : "Already a user?"}
          </p>
          <p
            className="cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <a href="/" className="text-blue-600 p-2 hover:underline">
            Learn more.
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
