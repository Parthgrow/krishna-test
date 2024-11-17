import { auth, firestore } from "@/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const repData = await req.json();
  const { email, password } = repData;

  console.log(repData);
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredentials.user;

    if (user) {
      try {
        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (!userDoc.exists()) {
          await setDoc(doc(firestore, "users", user.uid), {
            username: "this is a test user",
            email: email,
            plan: "free",
          });
        }
        console.log("user created");
      } catch (error) {
        console.log("error in creating user ", error);
      }
    }

    return Response.json({
      message: "User Logged in",
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log("some problem with signing up", error.message);
    } else {
      console.log("an unkwon error occured");
    }

    return Response.json({
      message: "There was some problem",
      error: error,
    });
  }
}
