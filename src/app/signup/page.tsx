"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function signUpPage() {
  const [user, setUser] = React.useState({
    email: "",
    username: "",
    password: "",
  });

  const onSignUp = async () => {
    // logic as it will talk to db
  };

  return (
    <>
      <section className="w-full flex justify-center items-center h-screen">
        <div className="text-center mx-4 p-3 max-w-[400px] space-y-3">
          <h1 className="text-3xl font-semibold mb-3">Sign Up</h1>

          <form action="#" className="space-y-2.5">
            <input
              id="email"
              required
              value={user.email}
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="email"
              className="text-md pl-4 py-3 w-full pr-4 border-[0.5px] border-solid border-gray-700 rounded-md outline-none"
            />
            <input
              id="password"
              required
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
              className="text-md pl-4 py-3 w-full pr-4 border-[0.5px] border-solid border-gray-700 rounded-md outline-none"
            />
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
              onSubmit={onSignUp}
              type="submit"
              className="w-full py-2 rounded-md text-xl text-white bg-[rgb(67,132,181)] cursor-pointer duration-150 transform"
            >
              Sign Up
            </button>
          </form>
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
