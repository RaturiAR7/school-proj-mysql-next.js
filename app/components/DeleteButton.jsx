"use client";

import { Delete } from "lucide-react";

const DeleteButton = () => {
  const deleteAllSchools = async () => {
    try {
      const password = prompt("Enter admin password to delete all schools:");
      if (password !== "DelAnshul") {
        throw new Error("Invalid Password. Please don't try again.");
      }
      const response = await fetch("api/school", {
        method: "DELETE",
      });
      return response;
    } catch (error) {
      console.error("Error deleting schools:", error);
      return error.message || "An unexpected error occurred";
    }
  };
  return (
    <button
      onClick={deleteAllSchools}
      className='bg-gradient-to-r bg-red-100 text-white px-6 py-2 md:px-12 md:py-5 rounded-2xl font-medium md:font-bold text-base hover:bg-red-500  transition-all duration-200 shadow-xl flex items-center gap-3'
    >
      <Delete />
      Delete All Schools. Please don't try if not admin.
    </button>
  );
};

export default DeleteButton;
