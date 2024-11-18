"use client";

import { useEffect, useState } from "react";
import { VscCircleFilled } from "react-icons/vsc";
import { Suspense } from "react";

import Navbar from "./Navbar";
import {
  FaChartLine,
  FaChevronDown,
  FaHeart,
  FaChevronUp,
  FaLightbulb,
  FaRegThumbsUp,
  FaSmile,
} from "react-icons/fa";
import { useParams, useSearchParams } from "next/navigation";

export function Results() {
  const [openIndex, setOpenIndex] = useState(null);
  const [userData, setUserData] = useState<any>();
  const [results, setResults] = useState<any>();
  const searchParams = useSearchParams();
  const userQuizId = searchParams.get("userQuizId");

  const toggleSection = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      heading: "Section 1 Heading",
      content: "This is the content for Section 1.",
    },
    {
      heading: "Section 2 Heading",
      content: "Detailed explanation for Section 2 goes here.",
    },
    {
      heading: "Section 3 Heading",
      content: "Information about Section 3 is provided here.",
    },
    {
      heading: "Section 4 Heading",
      content: "This section covers the details of Section 4.",
    },
    {
      heading: "Section 5 Heading",
      content: "Insights and content for Section 5 are shown here.",
    },
  ];

  const recommendations = [
    {
      icon: <FaRegThumbsUp className="text-blue-500" />,
      heading: "Recommendation 1",
      content: "Description for recommendation 1.",
    },
    {
      icon: <FaLightbulb className="text-yellow-500" />,
      heading: "Recommendation 2",
      content: "Insightful details for recommendation 2.",
    },
    {
      icon: <FaChartLine className="text-green-500" />,
      heading: "Recommendation 3",
      content: "Guidance and advice for recommendation 3.",
    },
    {
      icon: <FaHeart className="text-red-500" />,
      heading: "Recommendation 4",
      content: "Suggestions and ideas for recommendation 4.",
    },
    {
      icon: <FaSmile className="text-purple-500" />,
      heading: "Recommendation 5",
      content: "Helpful information for recommendation 5.",
    },
  ];

  useEffect(() => {
    const fetchUserQuiz = async () => {
      try {
        const response = await fetch(
          `/api/userQuiz/one-quiz?userQuizId=${userQuizId}`,
          {
            method: "GET",
          }
        );
        const repData = await response.json();
        setUserData(repData.data);
        console.log("user data fetched");

        console.log("userData", userData);
      } catch (error) {
        if (error instanceof Error) {
          console.log("there is error in fetching quiz", error);
        } else {
          console.log("there is an unknown error");
        }
      }
    };

    fetchUserQuiz();
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      if (!userData) {
        console.log("I was working here");
        return;
      }
      try {
        const response = await fetch("/api/gemini", {
          method: "POST",
          body: JSON.stringify(userData.quizData),
        });
        const repData = await response.json();
        console.log("the final results are", repData.data);
        setResults(repData.data);
      } catch (error) {
        console.log("there is some error at fetching results");
      }
    };

    fetchResults();
  }, [userData]);

  useEffect(() => {
    console.log("The value of results is", results);
  }, [results]);

  if (!results) return <div>...isloading</div>;

  return (
    <Suspense fallback={<div>...loading</div>}>
      <div className="min-h-screen bg-blue-50">
        <div className="flex flex-col md:flex-row">
          <Navbar />

          <main className="flex-1 p-4 sm:p-6 lg:p-8 md:ml-28">
            <header className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 font-playfair">
                Results
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 min-h-[200px] flex flex-col justify-between md:col-span-3">
                <div className="space-y-2">
                  <h3 className="text-2xl text-gray-600 font-medium pt-2">
                    Your Krishna Score
                  </h3>
                  {/* <h4 className="text-lg font-bold text-gray-900 pb-4">
                  Main Heading
                </h4> */}

                  <div className="flex justify-start items-start mb-4">
                    <h1 className="text-8xl font-bold text-gray-900">
                      {results.KrishnaScore}
                    </h1>
                    <div className="flex flex-col items-center justify-center mt-5 ml-2">
                      {/* <h2 className="text-xl font-medium text-gray-700 text-right">
                      Right Top Heading
                    </h2> */}
                      {/* <h3 className="text-lg font-medium text-gray-600 text-right">
                      Right Bottom Heading
                    </h3> */}
                    </div>
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-600 ">
                  {results.KrishnaScoreDescription}
                </p>
              </div>

              {/* report section   */}

              <div className="bg-white rounded-lg shadow-md p-6 min-h-[200px] md:col-span-1 flex flex-col space-y-2">
                <h2 className="text-xl font-bold text-gray-900">
                  Download Report
                </h2>
                <p className="text-sm text-gray-500"></p>
                <div className="flex justify-center items-center space-x-3 lg:space-x-7">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm lg:text-base">
                    PPT
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm lg:text-base">
                    PDF
                  </button>
                </div>
                {/* <h2 className="text-xl font-bold text-gray-900">Report</h2>
              <p className="text-sm text-gray-500">
                This is a paragraph of text that describes Box 2.
              </p>
              <div className="flex justify-center items-center space-x-3 lg:space-x-7">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm lg:text-base">
                  PPT
                </button>
              </div> */}
              </div>

              {/* breakdown section  */}

              <div className="bg-white  rounded-lg shadow-md p-6 min-h-[200px] md:col-span-3">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Breakdown
                </h2>

                {results.quizBreakdown.map((quizText: string) => {
                  return (
                    <div className=" border-gray-200 py-3 flex gap-3">
                      <VscCircleFilled />
                      {quizText}
                    </div>
                  );
                })}

                {/* {sections.map((section, index) => (
                <div key={index} className="border-b border-gray-200 py-3">
                  <button
                    onClick={() => toggleSection(index)}
                    className="flex justify-between items-center w-full text-left text-gray-700 font-medium text-lg"
                  >
                    <span>{section.heading}</span>
                    {openIndex === index ? (
                      <FaChevronUp className="text-gray-500" />
                    ) : (
                      <FaChevronDown className="text-gray-500" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="mt-2 text-gray-600">
                      <p>{section.content}</p>
                    </div>
                  )}
                </div>
              ))} */}
              </div>

              <div className="bg-white  rounded-lg shadow-md p-4 sm:p-6 md:p-8 lg:p-10 min-h-[200px] md:col-span-1">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Recommendation
                </h2>

                {results.recommendations.map((rec: any) => {
                  return (
                    <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4 md:mb-5">
                      <p className="text-sm sm:text-base text-gray-600">
                        {rec.text}
                      </p>
                    </div>
                  );
                })}

                {/* {recommendations.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4 md:mb-5"
                >
                  <div className="text-xl sm:text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                      {item.heading}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))} */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </Suspense>
  );
}
