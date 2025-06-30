"use client";

import Link from "next/link";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/client";
import { useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/sign-in");
  };

  return (
    <header className="flex justify-between items-center p-4 bg-dark-200">
      <div className="text-2xl font-bold">PrepEasy</div>
      <div className="relative">
        <button
          className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center focus:outline-none"
          onClick={() => setOpen((o) => !o)}
          aria-label="User menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-50">
            <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
            <Link href="/help" className="block px-4 py-2 hover:bg-gray-100">Help</Link>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
} 