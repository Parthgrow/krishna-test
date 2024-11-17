"use client";
import { auth, firestore, provider } from "@/Firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { NextRouter, Router } from "next/router";
import { SetStateAction, useEffect, useState } from "react";

// Notes for assesment page :
// - There would be a questions state
// - There would be a newQuestions state
// - the newQuestions is update as the options are changing
// - When the evaluate option button is clicked => the newQuestions fires a new entry in the database (takenQuiz)

interface Question {
  id: number;
  text: string;
  options: string[];
}

interface UserQuestion {
  id: number;
  text: string;
  options: string[];
  answer: string;
}

export default function Page() {
  const handleCheckout = () => {};
  return (
    <div>
      <div className="border-2 border-black w-[40%] flex flex-col items-center">
        <h1 className="text-xl font-bold"> This is a test product </h1>
        <button
          onClick={handleCheckout}
          className="bg-black text-white rounded-md px-4 py-2"
        >
          Check out
        </button>
      </div>
    </div>
  );
}

// export default function Page(){

//     const [questions,setQuestions] = useState<Question[]>([]);
//     const [userQues, setUserQues] = useState<UserQuestion[]>([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(()=>{

//         const fetchQuestions = async()=>{

//             try
//             {
//                 const response = await fetch('http://localhost:3000/api/questions?category=Son/Daughter');
//                 const data = await response.json();

//                 let newQuestions : UserQuestion[] = data.map((item : UserQuestion)=>({...item, answer : "This is a test answer"})) ;

//                 // for(let i = 0 ; i < data.length ; i++)
//                 // {

//                 //     let item = data[i] ;
//                 //     let aQues : Question = {
//                 //         ...item,
//                 //         answer : 'this is a test answer'
//                 //     }

//                 //     newQuestions.push(aQues);

//                 // }

//                 setQuestions(data);
//                 setUserQues(newQuestions);

//                 setLoading(false);

//             }
//             catch(error)
//             {
//                 console.log("error in fetching questions", error);
//             }

//         }

//         fetchQuestions();

//     },[])

//     const handleOption = ( id : number, newOption : string )=>{

//     let newQuestions : UserQuestion[] = [...userQues];

//     for(let i = 0  ; i < newQuestions.length ; i++)
//     {
//         if(newQuestions[i].id === id)
//         {
//             newQuestions[i].answer = newOption ;
//         }

//     }

//     // const newQuestions = userQues.map((ques)=>{
//     //     ques.id === id ? {...ques, answer : newOption} : ques
//     // })

//     setUserQues(newQuestions);
//     console.log(userQues);

//     }

//     // const handleQuizSubmit = async()=>{

//     //     alert("i am working");

//     //     try{

//     //         await setDoc(doc(firestore,"userquiz","randomupdate"),{
//     //             username : "another dummy id ",
//     //             quiz : userQues
//     //         })

//     //     }
//     //     catch(error)
//     //     {
//     //         if(error instanceof Error)
//     //         {
//     //             console.log(error.message);
//     //         }
//     //         else
//     //         {
//     //             console.log("an unknown error occured");
//     //         }
//     //     }

//     // }
//     const handleQuizSubmit = async()=>{

//         // I need to add the body

//         try{

//             const response = await fetch('/api/create-quiz',{method : "POST", headers : { 'Content-Type' : 'application/json'}, body : JSON.stringify(userQues)});
//             console.log("the fetch is made properly", response);
//             const repData = await response.json();
//             console.log(repData);
//             alert(`it is working ${repData.message}`);

//         }
//         catch(error )
//         {
//             if(error instanceof Error)
//             {
//                 console.log("error at handleQuizsubmit",error);
//             }
//             else
//             {
//                 console.log("an unknown error occuered")
//             }
//         }
//     }

//     if(loading)
//     {
//         return <div>...loading</div>
//     }

//     return(
//         <>

//         <div className="flex justify-center">

//             <div className="border-black border-2 w-[50%]">
//                 {questions.map((ques)=>{
//                     return(
//                         <div key={ques.id}>
//                             <h2>{ques.text}</h2>
//                             <div>
//                                 {ques.options.map((option : string)=>{
//                                     return <div key={option}>
//                                         <input type="radio" value={option} name={ `question-${ques.id}`} id=""  onChange={()=>{handleOption(ques.id, option)}} />
//                                         <label htmlFor="">{option}</label>
//                                     </div>
//                                 })}
//                             </div>

//                         </div>
//                     )
//                 })}

//                 <div>
//                     <button className=" bg-black text-white" onClick={()=>{handleQuizSubmit()}}> Submit Quiz </button>
//                 </div>
//             </div>

//             </div>

//         </>
//     )

// }
