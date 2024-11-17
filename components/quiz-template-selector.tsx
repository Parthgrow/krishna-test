'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Navbar from "../components/Navbar"
import { IoMdSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { LuPalette } from "react-icons/lu";
import { FaShoppingBag } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiThreeLeaves } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import ProgressBar from "./ProgressBar"
import { useRouter } from "next/navigation";

interface Template {
  title: string;
  description: string;
  icon: JSX.Element;
  iconBg: string;
  buttons: { laicon: string; label: string; }[];
  paragraph: string;
}

export function QuizTemplateSelector() {

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const router = useRouter();

  const templates = [
    {
      title: "Relationship", description: "For spouses and partners", icon: <FaHeart />, iconBg: "bg-blue-100 text-blue-600", buttons: [

        { laicon: "👫", label: "Husband - Wife" },
        { laicon: "💑", label: "Girlfriend - Boyfriend" }

      ], paragraph: "Share it with your partner to see how well you understand your relationship dynamics!"
    },
    {
      title: "Family", description: "For parents and children", icon: <FaPeopleRoof />, iconBg: "bg-blue-100 text-blue-600", buttons: [

        { laicon: "👧/👦", label: "Son/Daughter" },
        { laicon: "👨👩", label: "Father/Mother" }

      ], paragraph: "Share it with family members to explore your role within the family and deepen your connections!"
    },

    {
      title: "Professional", description: "For colleagues and employees", icon: <FaShoppingBag />, iconBg: "bg-blue-100 text-blue-600", buttons: [

        { laicon: "👨‍💼", label: "CXO" },
        { laicon: "🤵", label: "Manager" },
        { laicon: "🙋‍♂️", label: "Colleague" }

      ], paragraph: "Share it with colleagues or employees to gain insights into your professional relationships and improve teamwork!"
    },

    {
      title: "Friendship", description: "For close friends", icon: <GiThreeFriends />, iconBg: "bg-blue-100 text-blue-600", buttons: [

        { laicon: "😎", label: "Best Friend" },
        { laicon: "🤗", label: "Friend" }

      ], paragraph: "Share it with friends to reflect on your friendships and strengthen your bonds!"
    },

    {
      title: "Self-Growth", description: "For personal development", icon: <GiThreeLeaves />, iconBg: "bg-blue-100 text-blue-600", buttons: [

        { laicon: "🧍‍♂️", label: "Personal Traits" },
        { laicon: "🎭", label: "Emotional Intelligence" }

      ], paragraph: "Share it with family or friends to see how self-aware you are!"
    },

    {
      title: "Custom", description: "Build from scratch", icon: <LuPalette />, iconBg: "bg-blue-100 text-blue-600", buttons: [

        { laicon: "👫", label: "Husband - Wife" },
        { laicon: "💑", label: "Girlfriend - Boyfriend" }

      ], paragraph: "Share it with friends to reflect on your friendships and strengthen your bonds!"
    },
  ]

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="flex flex-col md:flex-row">
        <Navbar />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 md:ml-28">

          <header className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 font-playfair">
              Choose Your Quiz Template
            </h2>
          </header>


          <div className="relative mb-6 sm:mb-8 max-w-2xl">
            <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-900 text-xl" />
            <Input
              className="pl-10 border-blue-950 focus:ring-2 focus:ring-blue-500"
              placeholder="Search Template"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-20">
            {templates.map((template) => (
              <Card
                key={template.title}
                className="bg-white border border-blue-900 rounded-lg hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className={`w-16 bg-white h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center mb-4`}>
                    <div className="text-4xl sm:text-5xl lg:text-7xl text-blue-900">
                      {template.icon}
                    </div>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">
                    {template.title}
                  </h2>
                  <p className="text-blue-900 text-sm sm:text-base">
                    {template.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4">
                  <Button
                    className="w-full bg-blue-50 hover:bg-blue-100 text-blue-900 font-semibold text-base sm:text-lg border border-blue-900 rounded-md transition-colors"
                    variant="outline"
                    onClick={() => {
                      setSelectedTemplate(template)
                      setIsPopoverOpen(true)

                    }}
                  >
                    Select
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="w-full mb-24 sm:w-4/5 md:w-3/4 lg:w-full lg:mb-12 xl:w-1/2 mx-auto">
            <ProgressBar completedSteps={0} steps={4} ongoing={0} />
          </div>


          {isPopoverOpen && selectedTemplate && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg p-6 sm:p-8 w-full max-w-lg relative">
                <button
                  className="absolute right-4 top-4 text-blue-900 hover:text-blue-700"
                  onClick={() => setIsPopoverOpen(false)}
                >
                  <IoMdClose className="text-2xl" />
                </button>

                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6">
                  Create a quiz to assess yourself as a
                </h3>

                {selectedTemplate.title === 'Custom' ? (
                  <div className="space-y-3">
                    <Input
                      className="w-full bg-white border border-blue-900 rounded-md px-4 py-3"
                      placeholder="Enter Custom Relationship"
                    />
                    <Button
                      className="w-full bg-blue-950 hover:bg-blue-900 text-white font-semibold text-base sm:text-lg rounded-md px-4 py-3 transition-colors"

                    >
                      Create Quiz
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {selectedTemplate.buttons.map((button, index) => (
                      <Button
                        key={index}
                        className="flex items-center justify-center w-full bg-blue-50 hover:bg-blue-100 text-blue-900 font-semibold text-base sm:text-lg border border-blue-900 rounded-md px-4 py-3 transition-colors"
                        variant="outline"
                        onClick={() => router.push(`/preview-quiz?category=${button.label}`)}
                      >
                        <span className="text-xl sm:text-2xl">{button.laicon}</span>
                        <span className="ml-3">{button.label}</span>
                      </Button>
                    ))}
                  </div>
                )}

                <p className="text-blue-900 mt-6 text-sm sm:text-base">
                  {selectedTemplate.paragraph}
                </p>
              </div>
            </div>
          )}
        </main>
      </div >
    </div >
  )
}