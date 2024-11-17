"use client";
import { FormEvent, useState } from "react";

interface Ques {
  id: number;
  text: string;
  options: string[];
}

export default function Page() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [ques, setQues] = useState("");

  async function handleCreateQuiz(e: FormEvent) {
    e.preventDefault();

    let parsedQues;
    try {
      parsedQues = JSON.parse(ques);
    } catch (error) {
      console.log("error in parsing", error);
    }

    const body = {
      title: title,
      category: category,
      ques: parsedQues,
    };
    console.log(body);

    try {
      const response = await fetch("/api/admin/create-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log("response", response.ok);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div>
        <form
          onSubmit={handleCreateQuiz}
          className="flex border-2 border-black flex-col gap-5 w-[50%] "
        >
          <input
            type="text"
            placeholder="enter the title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="enter the category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <textarea
            name=""
            id=""
            rows={20}
            placeholder="enter the quiz questions"
            value={ques}
            onChange={(e) => {
              setQues(e.target.value);
            }}
          ></textarea>
          <button type="submit" className="bg-black text-white rounded-md ">
            Create Quiz
          </button>
        </form>
      </div>
    </div>
  );
}
