import { NextRequest, NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { z } from "zod";

export async function POST(req: NextRequest) {
  const data = await req.json();
  // console.log("quizData", data);
  const addPrompt =
    "Krishna Score Calculation: Compute the Krishna Score as the sum of points across all 15 questions, scaled out of 100. Provide a brief description of how the score reflects alignment between A and B. Quiz Breakdown: Summarize the quiz results in 6 points, with each point being a concise analysis of the alignment or disconnect between A and B across the quiz. Each summary must not exceed 15 words. Recommendations: Based on the alignment between A and B’s answers, generate 5 personalized recommendations to improve alignment or address areas of disagreement. Indicate whether each recommendation is actionable, reflective, or awareness-building.";
  const prompt = `${JSON.stringify(
    data
  )} Can you analyze the above data based on the below prompt ${addPrompt}`;

  const result = await generateObject({
    model: google("models/gemini-1.5-pro-latest"),
    prompt: prompt,
    schema: z.object({
      KrishnaScore: z.number(),
      KrishnaScoreDescription: z.string(),
      quizBreakdown: z.array(z.string().max(100)),
      recommendations: z.array(
        z.object({
          text: z.string(),
          type: z.enum(["actionable", "reflective", "awareness-building"]),
        })
      ),
    }),
  });

  // console.log(result.object);

  return NextResponse.json({
    message: "This is working",
    data: result.object,
  });
}

// import { NextRequest, NextResponse } from "next/server";
// import { google } from "@ai-sdk/google";
// import { generateObject } from "ai";
// import { z } from "zod";

// export async function POST(req: NextRequest) {
//   const result = await generateObject({
//     model: google("models/gemini-1.5-pro-latest"),
//     prompt: "tell me about the weather today",
//     schema: z.object({
//       headline: z.string(),
//       response: z.string(),
//     }),
//   });

//   const resObj = result.object;
//   return NextResponse.json({
//     message: "This is working",
//     data: resObj,
//   });
// }
