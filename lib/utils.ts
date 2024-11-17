import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { signOut } from "firebase/auth";
import { auth } from "@/Firebase";
import {useRouter} from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function handleLogout(){
  alert('I am working'); 
  const router = useRouter(); 

  try{

    await signOut(auth); 
    router.push('/login')


}
catch(error)
{
   
  console.log("logout error" , error) ; 


}
}
