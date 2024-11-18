import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/Firebase";
import { setDoc, doc, getDocs, collection } from "firebase/firestore";
import { nanoid } from "nanoid";

interface Document {
  id: string;
  category: string;
  ques: any;
  quizName: string;
  title: string;
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { userId, quizData, quizId } = data;
  console.log("quizId", quizId);

  const sendData = {
    userId,
    quizData,
    timestamp: Date.now().toString(),
    quizId,
  };

  console.log("data going to firestore", sendData);

  try {
    let id = nanoid();
    await setDoc(doc(firestore, "userquiz", id), sendData);
    return NextResponse.json({
      message: "successfully submitted the quiz ",
      userQuizId: id,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("an unknown error occured");
    }
  }

  return NextResponse.json({
    message: "There was some erorr",
  });
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const category = url.searchParams.get("category");
  //   console.log("category", category);

  try {
    const querySnapshot = await getDocs(collection(firestore, "quiz"));
    let data: Document[] = [];
    querySnapshot.forEach((doc) => {
      let newData = doc.data();

      let someData: Document = {
        id: doc.id,
        category: newData.category,
        ques: newData.ques,
        quizName: newData.quizName,
        title: newData.title,
      };
      data.push(someData);
    });

    let finalData;

    if (category) {
      data.forEach((aData) => {
        if (aData.category === category) {
          finalData = aData;
        }
      });
    } else {
      finalData = data;
    }

    return Response.json({
      message: "The route worked well",
      data: finalData,
    });
  } catch (error) {
    console.log("error at get request", error);
    return Response.json({
      message: "This seems to not be working",
    });
  }
}
