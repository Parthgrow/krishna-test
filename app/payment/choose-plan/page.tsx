"use client"
export default function Page(){
    return <>

    <ChooseComponent/>
    
    </>
}


function ChooseComponent(){

    const handlePlan = ()=>{
        console.log("I am handle plan"); 
    }
    return <div className="flex gap-8">
        
        <PlanCard heading={"Free plan"} onAction={handlePlan}/>
        <PlanCard heading={"Pro plan"} onAction={handlePlan}/>
        <PlanCard heading={"Ultra Plan"} onAction={handlePlan}/>
        
    </div>
}


interface planCardProps{
    heading : String,
    onAction : ()=>void 
}


const PlanCard : React.FC<planCardProps> = ({heading,onAction})=>{

    return(
        <div className=" h-28 w-24 border border-gray-600 flex flex-col items-center justify-between p-1 bg-gradient-to-b from-gray-600 to-black text-white">
            <h2>{heading}</h2>
            <button onClick={onAction} className="border border-neutral-300"> Proceed </button>
        </div>
    )

}

