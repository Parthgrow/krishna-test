import { firestore } from "@/Firebase";
import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { setDoc, doc } from "firebase/firestore";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { category, ques, title } = data;
  const newData = {
    title,
    category,
    ques,
    quizName: "Just another quiz",
  };

  console.log(newData);

  try {
    await setDoc(doc(firestore, "quiz", nanoid()), newData);
  } catch (error) {
    console.log("error in adding to firestore", error);
  }

  if (data) {
    return Response.json({
      message: "This is working",
    });
  } else {
    return Response.json({
      message: "This is not working",
    });
  }
}

// just adeed some comments
