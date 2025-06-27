"use client";

import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function profilePage() {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("User logout successfully");
      router.push("/login");
    } catch (error: any) {
      console.log("Error while Logout", error);
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Something went wrong while Logout");
      }
    }
  };

  return (
    <>
      <div className="w-full h-screen flex-col flex items-center justify-center text-2xl">
        <h1>Profile page</h1>
        <br />
        <hr />
        <button
          onClick={logout}
          className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-xl px-2.5 py-1.5 rounded-md "
        >
          Logout
        </button>
      </div>
    </>
  );
}
