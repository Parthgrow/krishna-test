"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { useSearchParams } from 'next/navigation';

interface Question {
    id: number;
    text: string;
    options: string[];
}

const Preview: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const [questions, setQuestions] = useState<Question[]>([]);


    useEffect(() => {
        if (!category) return;
        console.log(category);

        const fetchQuestions = async () => {
            try {
                const response = await fetch(`/api/questions?category=${category}`);
                if (!response.ok) {
                    throw new Error("Category not found");
                }
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };

        fetchQuestions();
    }, [category]);

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col">
            <Navbar />
            <main className="flex-1 p-4 sm:p-6 lg:p-8 md:ml-28">
                <div className="flex justify-between">
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-900 font-playfair">
                        Preview Your Quiz
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

                    <div className="mt-6">
                        {questions.map((question) => (
                            <div
                                key={question.id}
                                className="text-black border border-blue-950 bg-white p-4 rounded-lg w-full sm:w-7/12 md:w-11/12 lg:w-full mx-auto mb-4"
                            >
                                <h3 className="text-lg text-black sm:text-xl font-semibold">
                                    Question {question.id}
                                </h3>
                                <h2 className="py-3">{question.text}</h2>
                                <p className="text-slate-600">Type: Multiple-Choice</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Preview;