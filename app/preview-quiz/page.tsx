"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { Card, CardDescription } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Suspense } from "react";

interface Question {
  id: number;
  text: string;
  options: string[];
}

const Preview: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (!category) return;
    console.log("category", category);
  }, [category]);

  return (
    <Suspense>
      <div className="min-h-screen bg-blue-50 flex flex-col">
        <Navbar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 md:ml-28">
          <div className="flex justify-between">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-900 font-playfair">
              Ready to take Quiz
            </h2>
            <Button
              className="bg-blue-950 hover:bg-[#1E3A8A] text-blue-50 font-semibold text-base sm:text-lg p-6 transition-colors rounded-lg"
              onClick={() => router.push(`/assess?category=${category}`)}
            >
              Take Test
            </Button>
          </div>

          <div className="flex-1 ml-1 w-3/4 md:mx-auto">
            <ProgressBar steps={4} completedSteps={2} />

            <div className="mt-6"></div>
          </div>

          <div className="flex justify-center">
            <Card className="w-[40vw] p-5 ">
              <CardTitle className="text-center"> Quiz Details </CardTitle>
              <CardDescription className="">
                You will get 15 questions based on which you will get your
                krishna score and personal recommendations to improve your life
              </CardDescription>
            </Card>
          </div>
        </main>
      </div>
    </Suspense>
  );
};

export default Preview;
