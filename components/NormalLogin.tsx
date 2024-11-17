"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "@/Firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import Link from "next/link";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "applications/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log("response", response);
    if (response.ok) {
      alert("User logged in ");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-600 to-black flex flex-col  ">
        <div>
          <form
            onSubmit={handleLogin}
            className="flex flex-col border-2 border-neutral-400 p-5 gap-5 w-[40vw]"
          >
            <input
              type="email"
              value={email}
              placeholder="enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              value={password}
              placeholder="enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit">Submit</button>
          </form>

          <p>
            Not signed up <Link href="/register">Sign Up </Link>
          </p>
        </div>
      </div>
    </>
  );
}
