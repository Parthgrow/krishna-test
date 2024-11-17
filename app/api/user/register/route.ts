import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { email, password } = data;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);

    return NextResponse.json({
      message: "I am this route and it's working",
      user: user,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: error,
    });
  }
}
