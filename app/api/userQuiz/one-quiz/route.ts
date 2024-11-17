import { firestore } from "@/Firebase";
import { getDoc, doc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

// Next actions - send the data to the little gpt and produce results and then update the front end on the basis of it

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  let userQuizId = url.searchParams.get("userQuizId");

  if (!userQuizId) {
    return NextResponse.json(
      {
        message: "userQuiz is unvalid",
      },
      { status: 400 }
    );
  }

  try {
    const userDoc = await getDoc(
      doc(firestore, "userquiz", userQuizId?.toString())
    );
    console.log("userQuizId", userQuizId);
    if (!userDoc.exists()) {
      return NextResponse.json(
        {
          message: "Document not found",
        },
        { status: 404 }
      );
    }
    console.log("userQuiz data", userDoc.data());

    return NextResponse.json({
      message: "this is working",
      data: userDoc.data(),
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      response: "There is some error",
      error: error,
    });
  }
}
