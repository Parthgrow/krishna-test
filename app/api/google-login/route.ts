import { firestore } from "@/Firebase";
import { NextRequest } from "next/server";
import { getDoc, doc, setDoc } from "firebase/firestore";

export async function POST(req: NextRequest) {
  const reqData = await req.json();
  console.log(reqData);
  const { username, email, userId, displayName } = reqData;

  try {
    const userDoc = await getDoc(doc(firestore, "users", userId));
    if (!userDoc.exists()) {
      await setDoc(doc(firestore, "users", userId), {
        username,
        email,
        displayName,
        plan: "free",
      });
      console.log("user created");
    }
    return Response.json({ message: "All is well" });
  } catch (error) {
    console.log("there is an error at google login", error);
  }
}
