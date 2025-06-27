"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import Loader from "@/components/Loader";
import { toast } from "sonner";

export default function loginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const onLogin = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload
    try {
      setLoading(true);

      const response = await axios.post("/api/users/login", user);

      console.log(response);

      toast.success("User Logged In Successfully");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login Error", error.message);
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Something went wrong while login");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="w-full flex justify-center items-center h-screen">
        <div className="text-center mx-4 p-3 max-w-[400px] space-y-3">
          <h1 className="text-3xl font-semibold mb-3">Login</h1>

          <form onSubmit={onLogin} className="space-y-2.5">
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

            <hr className="m-3" />

            <button
              type="submit"
              className={`w-full flex justify-center items-center py-2 rounded-md text-xl text-white bg-[rgb(67,132,181)] duration-150 transform cursor-pointer`}
            >
              {loading ? <Loader /> : "Login to account"}
            </button>
          </form>

          <p>
            Don't have an account ?{" "}
            <Link href="/signup" className="text-[#69bafc]">
              Sign Up
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
