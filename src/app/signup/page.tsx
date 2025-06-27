"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function signUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    username: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSignUp = async () => {
    try {
      const response = await axios.post("/api/users/signup", user);

      console.log(response, "\n Sign Up success");
      toast.success("Signed up successfully!");

      router.push("/login");
    } catch (error: any) {
      console.log("Sign Up failed", error);
      // Check for backend error message
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Something went wrong while Sign Up");
      }
    }
  };

  // css classess
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <section className="w-full flex justify-center items-center h-screen">
        <div className="text-center mx-4 p-3 max-w-[500px] space-y-3">
          <h1 className="text-3xl font-semibold mb-3">Sign Up</h1>

          <div className="space-y-2.5">
            <input
              id="email"
              required
              value={user.email}
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="email"
              className="text-md pl-4 py-3 w-full pr-4 border-[0.5px] border-solid border-gray-700 rounded-md outline-none"
            />
            <div className="relative">
              <input
                id="password"
                required
                type={showPassword ? "text" : "password"}
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
                className="text-md pl-4 py-3 w-full pr-4 border-[0.5px] border-solid border-gray-700 rounded-md outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>

            <input
              id="username"
              required
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              placeholder="username"
              className="text-md pl-4 py-3 w-full pr-4 border-[0.5px] border-solid border-gray-700 rounded-md outline-none"
            />

            <hr className="m-3" />

            <button
              disabled={buttonDisabled}
              onClick={onSignUp}
              className={`w-full py-2 rounded-md text-xl text-white bg-[rgb(67,132,181)] duration-150 transform ${
                buttonDisabled
                  ? "opacity-70 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              Sign Up
            </button>
          </div>
          <p>
            Already have an account ?{" "}
            <Link href="/login" className="text-[#6dbdff]">
              Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
