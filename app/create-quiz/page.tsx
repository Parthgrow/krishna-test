import { QuizTemplateSelector } from "@/components/quiz-template-selector";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Krishnatest",
    description: "New Quiz Page",
};

export default function Page() {
    return <QuizTemplateSelector />
}