import { NextResponse } from "next/server";

interface Question {
  id: number;
  text: string;
  options: string[];
}

interface QuestionCategory {
  category: string;
  questions: Question[];
}

const questionCategories: QuestionCategory[] = [
  {
    category: "Husband-Wife",
    questions: [
      {
        id: 1,
        text: "Am I a good listener when my spouse shares their thoughts or feelings with me?",
        options: ["Always", "Usually", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 2,
        text: "Do I remember and acknowledge important dates and moments that are meaningful to my spouse?",
        options: [
          "Always",
          "Most of the time",
          "Occasionally",
          "Rarely",
          "Never",
        ],
      },
      {
        id: 3,
        text: "When we disagree , do I focus on understanding my spouse's perspective as much as my own",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 4,
        text: "How often do I express appreciation for my spouse's contributions to our relationship?",
        options: ["Daily", "Weekly", "Occasionally", "Rarely", "Never"],
      },
      {
        id: 5,
        text: "Do I notice when my spouse is feeling stressed or unhappy, even if they haven't said anything?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 6,
        text: "Am I quick to apologize and make amends when I realize I've hurt or disappointed my spouse?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 7,
        text: "Do I take my spouse's feedback constructively, even if it's difficult to hear?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 8,
        text: "How often do I consider my spouse's needs and preferences when making plans?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 9,
        text: "Am I mindful of balancing time with my spouse and other commitments (work, friends, hobbies)?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 10,
        text: "Do I notice when I'm bringing stress or negative emotions from outside into our relationship?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 11,
        text: "When things get challenging, do I openly communicate with my spouse rather than withdrawing?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 12,
        text: "Am I consistent in showing love and affection in ways my spouse values?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 13,
        text: "How well do I think I know my spouse's current goals, dreams, or things they're working on?",
        options: [
          "Very well",
          "Well",
          "Somewhat well",
          "Not very well",
          "Not at all",
        ],
      },
      {
        id: 14,
        text: "Do I ask for feedback from my spouse on how I could be a better partner?",
        options: [
          "Regularly",
          "Sometimes",
          "Rarely",
          "Only what issues come up",
          "Never",
        ],
      },
      {
        id: 15,
        text: "Am I aware of and do I respect my spouse's personal boundaries?",
        options: ["Always", "Most of the time", "Sometimes", "Rarely", "Never"],
      },
    ],
  },
  {
    category: "Girlfriend-Boyfriend",
    questions: [
      {
        id: 1,
        text: "Am I attentive and present when my partner shares their thoughts or feelings with me?",
        options: ["Always", "Usually", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 2,
        text: "Do I make an effort to celebrate meaningful moments or anniversaries with my partner?",
        options: [
          "Always",
          "Most of the time",
          "Occasionally",
          "Rarely",
          "Never",
        ],
      },
      {
        id: 3,
        text: "When we have a disagreement, do I focus on understanding my partner's perspective?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 4,
        text: "How often do I express appreciation for my partner's efforts or support?",
        options: ["Daily", "Weekly", "Occasionally", "Rarely", "Never"],
      },
      {
        id: 5,
        text: "Do I notice when my partner seems stressed or upset, even without them saying it?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 6,
        text: "Am I quick to apologize when I realize I've hurt or upset my partner?0",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 7,
        text: "Do I take my partner's feedback constructively, even if it's hard to hear?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 8,
        text: "How often do I consider my partner's preferences when planning dates or activities?",
        options: ["Always", "Most of the time", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 9,
        text: "Am I mindful of balancing my time between my partner, work, friends, and hobbies?",
        options: ["Always", "Usually", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 10,
        text: "Do I notice when I bring stress or negative emotions into our relationship?",
        options: ["Always", "Usually", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 11,
        text: "When things get tough, do I openly communicate with my partner instead of withdrawing?",
        options: ["Always", "Usually", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 12,
        text: "Am I consistent in showing love and affection in ways my partner appreciates?",
        options: ["Always", "Usually", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 13,
        text: "How well do I think I know my partner's current goals, dreams, or interests?",
        options: [
          "Very Well",
          "Well",
          "Somewhat well",
          "Not very well",
          "Not at all",
        ],
      },
      {
        id: 14,
        text: "Do I ask for feedback from my partner on how I could be a better boyfriend/girlfriend?",
        options: [
          "Regularly",
          "Sometimes",
          "Rarely",
          "Only when issues arise",
          "Never",
        ],
      },
      {
        id: 15,
        text: "Am I respectful of my partner's personal boundaries and needs for space?",
        options: ["Always", "Most of the time", "Sometimes", "Rarely", "Never"],
      },
    ],
  },
  {
    category: "Son-Daughter",
    questions: [
      {
        id: 1,
        text: "Do I make an effort to stay in touch with my parents and keep them updated on my life?",
        options: ["Always", "Usually", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 2,
        text: "How often do I express appreciation for my parents support, guidance, or help?",
        options: ["Daily", "Weekly", "Occasionally", "Rarely", "Never"],
      },
      {
        id: 3,
        text: "Do I listen carefully and respectfully when my parents share their thoughts or concerns with me?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 4,
        text: "Am I open to constructive feedback from my parents, even when it's hard to hear?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 5,
        text: "When my parents need help, am I usually there for them or make time to support them?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 6,
        text: "Do I try to keep a positive, respectful tone during conversations with my parents, even in disagreements?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 7,
        text: "Do I let my parents know they're valued, either through words or actions?",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"],
      },
      {
        id: 8,
        text: "How often do I check in on my parents well-being (health, emotions, life events, etc.)?",
        options: [
          "Regularly",
          "Sometimes",
          "Rarely",
          "Only when I notice something is wrong",
        ],
      },
      {
        id: 9,
        text: "Do I respect my parents personal boundaries, even as I make my own choices and decisions?",
        options: ["Always", "Most of the time", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 10,
        text: "When I make big decisions, do I consider my parents perspective or ask for their advice?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 11,
        text: "Am I mindful of how my words and actions affect my parents?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 12,
        text: "How comfortable am I in expressing my gratitude and love to my parents?",
        options: [
          "Very comfortable",
          "Mostly comfortable",
          "Somewhat comfortable",
          "Rarely comfortable",
          "Uncomfortable",
        ],
      },
      {
        id: 13,
        text: "Do I make an effort to bridge any gaps or misunderstandings with my parents?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 14,
        text: "Am I willing to listen to my parents stories, experiences, and family history to better understand them?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 15,
        text: "When my parents express disappointment or concern, do I try to see things from their perspective?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
    ],
  },

  {
    category: "Father-Mother",
    questions: [
      {
        id: 1,
        text: "Do I make an effort to spend quality time with my child and engage in activities they enjoy",
        options: ["Always", "Usually", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 2,
        text: "How often do I express appreciation and encouragement to my child?",
        options: ["Daily", "Weekly", "Occasionally", "Rarely", "Never"],
      },
      {
        id: 3,
        text: "When my child shares their thoughts or feelings, do I listen attentively and without judgment?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 4,
        text: "Am I receptive to constructive feedback from my child on how I can be a better parent?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 5,
        text: "Do I make an effort to support my child's goals and interests, even if they differ from my own?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 6,
        text: "How often do I check in on my child's emotional and mental well-being?",
        options: [
          "Regularly",
          "Sometimes",
          "Rarely",
          "Only when I notice they're struggling",
          "Never",
        ],
      },
      {
        id: 7,
        text: "Am I mindful of setting a positive example for my child through my actions and values?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 8,
        text: "Do I encourage open communication and make it easy for my child to talk to me about anything?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 9,
        text: "Am I respectful of my child's need for privacy and independence as they grow?",
        options: ["Always", "Most of the time", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 10,
        text: "When disciplining my child, do I focus on teaching rather than punishment?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 11,
        text: "How often do I show empathy and understanding when my child is struggling with something?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 12,
        text: "Am I consistent in enforcing rules and boundaries, while remaining flexible when necessary?",
        options: ["Always", "Most of the time", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 13,
        text: "How comfortable am I expressing my love and pride to my child?",
        options: [
          "Very comfortable",
          "Mostly  comfortable",
          "Somewhat comfortable",
          "Rarely Comfortable",
          " Uncomfortable",
        ],
      },
      {
        id: 14,
        text: "Do I take time to learn about my child's world (friends, hobbies, current interests) to stay connected?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 15,
        text: "When my child feels disappointed or upset, do I make an effort to understand their feelings and help them work through it?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
    ],
  },

  {
    category: "CXO",
    questions: [
      {
        id: 1,
        text: "Do I make an effort to be accessible and approachable to all levels of employees?",
        options: ["Always", "Usually", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 2,
        text: "How often do I communicate the company's vision and values to ensure alignment across the team?",
        options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"],
      },
      {
        id: 3,
        text: "When making decisions, do I consider input from different team members and departments?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 4,
        text: "Am I open to constructive feedback from my team, even when it's challenging to hear?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 5,
        text: "Do I actively support the growth and development of my direct reports and broader teams?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 6,
        text: "How often do I acknowledge and celebrate team achievements and individual contributions?",
        options: [
          "Regularly",
          "Sometimes",
          "Rarely",
          "Only for major accomplishments",
          "Never",
        ],
      },
      {
        id: 7,
        text: "Am I consistent in my actions, values, and messages, setting a reliable example for the team?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 8,
        text: "Do I foster a culture where employees feel comfortable sharing new ideas and voicing concerns?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 9,
        text: "Am I respectful of work-life boundaries and mindful of my team's well-being?",
        options: ["Always", "Most of the time", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 10,
        text: "When there's a conflict or issue, do I focus on solving the problem rather than assigning blame?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 11,
        text: "How often do I show empathy and understanding when my team faces challenges or setbacks?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 12,
        text: "Am I clear and transparent in my communication, especially when discussing changes or company goals?",
        options: ["Always", "Most of the time", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 13,
        text: "How comfortable am I in expressing gratitude and recognition to my team members?",
        options: [
          "Very comfortable",
          "Mostly comfortable",
          "Somewhat comfortable",
          "Rarely comfortable",
          "Uncomfortable",
        ],
      },
      {
        id: 14,
        text: "Do I make an effort to stay updated on industry trends, competitor strategies, and market changes?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 15,
        text: "When facing criticism or setbacks, do I take time to reflect and adjust my approach where needed?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
    ],
  },
  {
    category: "Manager",
    questions: [
      {
        id: 1,
        text: "Do I make an effort to be accessible and approachable for my team members?",
        options: ["Always", "Usually", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 2,
        text: "How often do I communicate team goals and priorities to ensure clarity and alignment?",
        options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"],
      },
      {
        id: 3,
        text: "When making decisions, do I consider input from my team members?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 4,
        text: "Am I open to receiving feedback from my team, even if it’s challenging to hear?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 5,
        text: "Do I support my team's professional development and encourage learning opportunities?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 6,
        text: "How often do I acknowledge and celebrate my team's achievements and contributions?",
        options: [
          "Regularly",
          "Sometimes",
          "Rarely",
          "Only for major accomplishments",
          "Never",
        ],
      },
      {
        id: 7,
        text: "Am I consistent and fair in my actions, setting a reliable example for the team?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 8,
        text: "Do I foster an environment where team members feel comfortable sharing new ideas and voicing concerns?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 9,
        text: "Am I respectful of my team's work-life balance and mindful of their well-being?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 10,
        text: "When addressing issues, do I focus on solving problems rather than assigning blame?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 11,
        text: "How often do I demonstrate empathy and understanding when my team faces challenges?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 12,
        text: "Am I clear and transparent in my communication, especially when discussing changes or feedback?",
        options: ["ALways", "Most of the time", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 13,
        text: "How comfortable am I in expressing gratitude and giving recognition to my team members?",
        options: [
          "Very comfortable",
          "Mostly comfortable",
          "Somewhat comfortable",
          "Rarely comfortable",
          "Uncomfortable",
        ],
      },
      {
        id: 14,
        text: "Do I stay informed on my team's projects and provide guidance when needed without micromanaging?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 15,
        text: "When facing criticism or setbacks, do I take time to reflect and adjust my approach if necessary?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
    ],
  },
  {
    category: "Colleague",
    questions: [
      {
        id: 1,
        text: "Do I make an effort to be approachable and supportive to my colleagues?",
        options: ["Always", "Usually", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 2,
        text: "How often do I communicate clearly with my colleagues to ensure we're aligned on tasks and goals?",
        options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"],
      },
      {
        id: 3,
        text: "When working in a group, do I listen to and consider the perspectives of my colleagues?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 4,
        text: "Am I open to constructive feedback from colleagues, even if it’s difficult to hear?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 5,
        text: "Do I make an effort to support my colleagues when they need help or guidance?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 6,
        text: "How often do I recognize and celebrate the achievements of my colleagues?",
        options: [
          "Regularly",
          "Sometimes",
          "Rarely",
          "Only for major accomplishments",
          "Never",
        ],
      },
      {
        id: 7,
        text: "Am I consistent and reliable, keeping promises and commitments I make to my best friend?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 8,
        text: "Do I encourage my best friend to be themselves and feel comfortable sharing openly?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 9,
        text: "Am I respectful of my best friend's boundaries and understanding of their personal space?",
        options: ["Always", "Most of the time", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 10,
        text: "When we disagree, do I focus on understanding their perspective instead of just pushing my own?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 11,
        text: "How often do I offer empathy and understanding when my best friend is going through a tough time?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 12,
        text: "Am I honest and transparent in my communication with my best friend, even when it's difficult?",
        options: ["Always", "Most of the time", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 13,
        text: "How comfortable am I in expressing gratitude and appreciation for our friendship?",
        options: [
          "Very comfortable",
          "Mostly comfortable",
          "Somewhat comfortable",
          "Rarely comfortable",
          "Uncomfortable",
        ],
      },
      {
        id: 14,
        text: "Do I stay informed on projects involving my colleagues and offer help when needed without micromanaging?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 15,
        text: "Do I stay informed on projects involving my colleagues and offer help when needed without micromanaging?",
        options: ["Always", "Often", "Sometimes", "Rarely"],
      },
    ],
  },
  {
    category: "Best Friend",
    questions: [
      {
        id: 1,
        text: "Am I available and present when my best friend needs someone to talk to or lean on?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 2,
        text: "How often do I express appreciation for my best friend and the role they play in my life?",
        options: ["Regularly", "Occasionally", "Monthly", "Rarely", "Never"],
      },
      {
        id: 3,
        text: "Do I listen carefully and without judgment when my best friend shares their thoughts or feelings?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 4,
        text: " Am I open to hearing constructive feedback from my best friend, even if it's tough?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 5,
        text: "Do I make an effort to support my best friend's goals, dreams, and aspirations?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 6,
        text: "How often do I celebrate my best friend's achievements, big or small?",
        options: [
          "Regularly",
          "Sometimes",
          "Rarely",
          "Only for big accomplishments",
          "Never",
        ],
      },
      {
        id: 7,
        text: "Am I consistent and reliable, keeping promises and commitments I make to my best friend?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 8,
        text: "Do I encourage my best friend to be themselves and feel comfortable sharing openly?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 9,
        text: "Am I respectful of my best friend's boundaries and understanding of their personal space?",
        options: ["Always", "Most of the time", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 10,
        text: "When we disagree, do I focus on understanding their perspective instead of just pushing my own?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 11,
        text: "How often do I offer empathy and understanding when my best friend is going through a tough time?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 12,
        text: "Am I honest and transparent in my communication with my best friend, even when it's difficult?",
        options: ["Always", "Most of the time", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 13,
        text: "How comfortable am I in expressing gratitude and appreciation for our friendship?",
        options: [
          "Very comfortable",
          "Mostly comfortable",
          "Somewhat comfortable",
          "Rarely comfortable",
          "Uncomfortable",
        ],
      },
      {
        id: 14,
        text: "Do I stay updated on my best friend's life (interests, challenges, new experiences) to stay connected?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 15,
        text: "When I make a mistake or hurt my best friend, am I quick to apologize and make amends?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
    ],
  },
  {
    category: "Friend",
    questions: [
      {
        id: 1,
        text: "Am I available and willing to support my friend when they need someone to talk to?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 2,
        text: "How often do I express appreciation for my friend and our friendship",
        options: ["Regularly", "Occasionally", "Monthly", "Rarely", "Never"],
      },
      {
        id: 3,
        text: "Do I listen without interrupting or judging when my friend shares their thoughts?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 4,
        text: "Am I open to constructive feedback from my friend, even if it's difficult to hear?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 5,
        text: "Do I encourage my friend's goals and ambitions, even if they differ from my own?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 6,
        text: "How often do I acknowledge and celebrate my friend's successes, big or small?",
        options: [
          "Regularly",
          "Sometimes",
          "Rarely",
          "Only for big accomplishments",
          "Never",
        ],
      },
      {
        id: 7,
        text: "Am I reliable and consistent in following through with promises or plans I make with my friend?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 8,
        text: "Do I create an environment where my friend feels comfortable being themselves around me?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 9,
        text: "Am I respectful of my friend's boundaries, especially when they need space or time alone?",
        options: [
          "Always",
          "Most of the time ",
          "Sometimes",
          "Rarely",
          "Never",
        ],
      },
      {
        id: 10,
        text: "When we disagree, do I focus on understanding their perspective as well as my own?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 11,
        text: "How often do I show empathy and support when my friend is going through a tough time?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 12,
        text: "Am I honest and transparent with my friend, even if it means having a tough conversation?",
        options: ["Always", "Most of the time", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 13,
        text: "How comfortable am I expressing appreciation for our friendship?",
        options: [
          "Very comfortable",
          "Mostly comfortable",
          "Somewhat comfortable",
          "Rarely comfortable",
          "Uncomfortable",
        ],
      },
      {
        id: 14,
        text: "Do I make an effort to keep up with my friend's life events, interests, and challenges?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 15,
        text: "When I make a mistake or hurt my friend, am I quick to apologize and make things right?",
        options: ["Always", "Often", "Sometimes", "Rarely"],
      },
    ],
  },
  {
    category: "Personal Traits",
    questions: [
      {
        id: 1,
        text: "How often do I display empathy and understanding toward others?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 2,
        text: "How would I describe my typical level of optimism?",
        options: [
          "Very optimistic",
          "Mostly optimistic",
          "Neutral",
          "Somewhat pessimistic",
          "Very pessimistic",
        ],
      },
      {
        id: 3,
        text: "Do I generally have a positive and upbeat attitude in most situations?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 4,
        text: "How open am I to new experiences and trying different things?",
        options: [
          "Very open",
          "Mostly open",
          "Somewhat open",
          "Rarely open",
          "Not open at all",
        ],
      },
      {
        id: 5,
        text: "How frequently do I show patience in challenging situations?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 6,
        text: "How well do I manage my emotions, especially in stressful situations?",
        options: [
          "Very well",
          "Well",
          "Somewhat well",
          "Poorly",
          "Not well at all",
        ],
      },
      {
        id: 7,
        text: "Am I someone who seeks out and enjoys social interactions?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 8,
        text: "How would I rate my level of assertiveness?",
        options: [
          "Very assertive",
          "Somewhat assertive",
          "Neutral",
          "Somewhat passive",
          "Very passive",
        ],
      },
      {
        id: 9,
        text: "Do I generally approach tasks and goals with a high level of determination?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 10,
        text: "How well do I handle constructive criticism from others?",
        options: [
          "Very well",
          "Well",
          "Sometimes well",
          "Poorly",
          "Very poorly",
        ],
      },
      {
        id: 11,
        text: "How likely am I to forgive others when they make mistakes?",
        options: [
          "Very likely",
          "Likely",
          "Sometimes likely",
          " Rarely likely",
          "Never likely",
        ],
      },
      {
        id: 12,
        text: "Do I tend to approach situations with a logical and practical mindset?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 13,
        text: "How often do I set goals and make plans to achieve them?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 14,
        text: "How comfortable am I with taking the lead in group settings?",
        options: [
          "Very comfortable",
          "Mostly comfortable",
          "Somewhat comfortable",
          "Rarely comfortable",
          "Uncomfortable",
        ],
      },
      {
        id: 15,
        text: "How often do I consider others' needs and perspectives in my decisions?",
        options: ["Always", "Often", "Sometimes", "Rarely"],
      },
    ],
  },
  {
    category: "Emotional Intelligence",
    questions: [
      {
        id: 1,
        text: "How well do I recognize my own emotions as they arise?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 2,
        text: "How effectively do I manage my emotions, even in challenging situations?",
        options: [
          "Very effectively",
          "Effectively",
          "Somewhat effectively",
          "Ineffectively",
          "Very ineffectively",
        ],
      },
      {
        id: 3,
        text: "How often do I reflect on my emotions and try to understand their causes?",
        options: ["Regularly", "Often", "Occasionally", "Rarely", "Never"],
      },
      {
        id: 4,
        text: "Am I able to stay calm and composed under pressure?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 5,
        text: "How often do I consider the impact of my emotions on others?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 6,
        text: "How well do I recognize and understand the emotions of others?",
        options: [
          "Very well",
          "Well",
          "Somewhat well",
          "Poorly",
          "Very poorly",
        ],
      },
      {
        id: 7,
        text: "Do I empathize with others and try to see things from their perspective?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 8,
        text: "How effectively do I communicate my emotions to others in a healthy way?",
        options: [
          "Very effectively",
          "Effectively",
          "Somewhat effectively",
          "Ineffectively",
          "Very effectively",
        ],
      },
      {
        id: 9,
        text: "Am I able to handle constructive criticism without getting defensive?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 10,
        text: "How likely am I to pause and think before reacting in emotionally charged situations?",
        options: [
          "Very likely",
          "Likely",
          "Sometimes likely",
          "Rarely likely",
          "Never likely",
        ],
      },
      {
        id: 11,
        text: "How well do I adapt to changes and unexpected challenges?",
        options: [
          "Very well",
          "Well",
          "Somewhat well",
          "Poorly",
          "Very poorly",
        ],
      },
      {
        id: 12,
        text: "Do I try to stay optimistic and positive, even in tough times?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 13,
        text: "How comfortable am I in addressing conflicts in a calm and constructive way?",
        options: [
          "Very comfortable",
          " Mostly comfortable",
          "Somewhat comfortable",
          "Rarely comfortable",
          " Uncomfortable",
        ],
      },
      {
        id: 14,
        text: "Do I set boundaries to protect my emotional well-being?",
        options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
      },
      {
        id: 15,
        text: "How frequently do I show appreciation and gratitude towards others?",
        options: ["Regularly", "Often", "Sometimes", "Rarely", "Never"],
      },
    ],
  },
];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");

  if (category) {
    const filteredCategory = questionCategories.find(
      (cat) => cat.category === category
    );
    if (filteredCategory) {
      return NextResponse.json(filteredCategory.questions);
    } else {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }
  }

  return NextResponse.json(questionCategories);
}
