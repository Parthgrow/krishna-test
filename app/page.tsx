"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "@/Firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { User } from "firebase/auth";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // signed in

        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        console.log("userDoc", userDoc);
        if (!userDoc.exists()) {
          const registrationData = localStorage.getItem("registrationData");
          const { username = "" } = registrationData
            ? JSON.parse(registrationData)
            : {};
          await setDoc(doc(firestore, "users", user.uid), {
            username,
            email: user.email,
          });
        }
        setUser(user);
        router.push("/dashboard");
      } else {
        //signed out
        setUser(null);
        router.push("/login");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <p>...loading</p>;
  }

  return (
    <div>{user ? "Redirecting to dashboard" : "Redirecting to login"}</div>
  );
}
