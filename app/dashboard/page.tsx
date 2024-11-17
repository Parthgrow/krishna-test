"use client";
import { DashboardComponent } from "@/components/dashboard";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firestore } from "@/Firebase";
import type { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
// import { Metadata } from "next"

// export const metadata: Metadata = {
//     title: "Krishnatest",
//     description: "Dashboard",
//   };

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState<String | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        user.emailVerified;
        {
          const userDoc = await getDoc(doc(firestore, "users", user.uid));

          if (userDoc.exists()) {
            const userData = userDoc.data;
            // here you need to set username : setUsername(userData.username);
          }
        }
      } else {
        router.push("/login");
      }

      setLoading(false);
    });
  }, [router]);

  if (loading) {
    return <div>...loading</div>;
  }
  return (
    <>
      {" "}
      <DashboardComponent />
    </>
  );
}
