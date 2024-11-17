"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";
import { useSearchParams } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/Firebase";
import { useRouter } from "next/navigation";

interface Question {
  id: number;
  text: string;
  options: string[];
}

interface UserQues {
  id: number;
  text: string;
  options: string[];
  answer: string;
}

const Preview: React.FC = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userQues, setUserQues] = useState<UserQues[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userId, setUserId] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        console.log(" I was here");
        router.push("/login");
      }
    });
  }, []);

  useEffect(() => {
    if (!category) return;
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/api/questions?category=${category}`);
        if (!response.ok) {
          throw new Error("Category not found");
        }
        const data = await response.json();
        setQuestions(data);
        let newQues: UserQues[] = data.map((ques: UserQues) => ({
          ...ques,
          answer: "dummy",
        }));
        console.log("newQues", newQues);
        setUserQues(newQues);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [category]);

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, questions.length - 1)
    );
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleOption = (id: number, option: string) => {
    console.log(id, option);
    let newQues: UserQues[] = userQues.map((ques: UserQues) =>
      ques.id === id ? { ...ques, answer: option } : ques
    );
    setUserQues(newQues);
  };

  const handleQuizSubmit = async () => {
    alert("I am being called");
    console.log("This is user id", userId);
    try {
      let quizId: string = "";
      try {
        const firstResponse = await fetch(
          `/api/create-quiz?category=${category}`,
          { method: "GET" }
        );
        const data = await firstResponse.json();
        const quizDetails = data.data;
        quizId = quizDetails.id;
      } catch (error) {
        console.log("error at get reques", error);
      }

      const body = {
        userId: userId,
        quizData: userQues,
        quizId,
      };

      console.log("body going in request", body);

      const response = await fetch("/api/create-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log("error at handleQuizSubmit", error);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Navbar />
      <main className="flex-1 p-3 sm:p-6 lg:p-8 md:ml-28">
        <div className="flex justify-between">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-900 font-playfair">
            Complete Your Self-Assessment
          </h2>
        </div>

        <div className="border flex flex-col space-y-7 border-t-2 border-blue-950 bg-white p-4 m-5 rounded-lg">
          <h3 className="text-3xl font-bold text-blue-900">
            Why Self-Assessment Matters
          </h3>
          <p className="text-blue-900">
            Honest self-assessment is crucial for your growth as a quiz creator.
            It helps identify areas for improvement and build self-awareness of
            your strengths and weaknesses.
          </p>
          <p className="text-[#d38208] font-bold">
            Warning: Your responses cannot be changed after submission. Please
            answer thoughtfully.
          </p>
        </div>

        {currentQuestion && (
          <div className="border flex flex-col space-y-3 border-t-2 border-blue-950 bg-white p-4 m-5 rounded-lg">
            <h3 className="text-xl font-bold text-blue-900">
              Question {currentQuestion.id} of {questions.length}
            </h3>
            <p className="text-black text-lg">{currentQuestion.text}</p>
            <ul className="mt-2 space-y-2">
              {currentQuestion.options.map((option, index) => (
                <li key={index} className="text-base sm:text-md">
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    id={`option-${index}-${currentQuestion.id}`}
                    className="mr-2"
                    onChange={() => {
                      handleOption(currentQuestion.id, option);
                    }}
                  />
                  <label htmlFor={`option-${index}-${currentQuestion.id}`}>
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`px-4 py-2 rounded-lg bg-blue-900 text-white ${
              currentQuestionIndex === 0 && "opacity-50 cursor-not-allowed"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === questions.length - 1}
            className={`px-4 py-2 rounded-lg bg-blue-900 text-white ${
              currentQuestionIndex === questions.length - 1 &&
              "opacity-50 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>

        <div>
          <button
            className="text-xl bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            onClick={() => {
              handleQuizSubmit();
            }}
          >
            Submit Quiz
          </button>
        </div>

        <div>{JSON.stringify(userQues, null, 2)}</div>

        <ProgressBar steps={4} completedSteps={2} ongoing={2} />
      </main>
    </div>
  );
};

export default Preview;
