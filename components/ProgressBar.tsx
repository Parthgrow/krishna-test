import { FaCheck } from "react-icons/fa";

interface ProgressBarProps {
    completedSteps?: number;
    steps?: number;
    ongoing?: number;
}

export default function ProgressBar({
    completedSteps = 0,
    steps = 0,
    ongoing = 0
}: ProgressBarProps) {

    const labels = [
        "Choose Category",
        "SubCategory",
        "Self Assessment",
        "Invite"
    ];

    return (
        <div className="flex flex-col items-start sm:items-start mt-4 sm:mt-6 md:mt-8 mb-6 sm:mb-8 md:mb-10 w-full px-2 sm:px-4">

            <div className="relative w-full sm:w-[95%] md:w-[90%] lg:w-[95%] flex items-center">
                <div className="absolute left-8 sm:left-4 md:left-8 lg:left-10 right-0 h-[3px] sm:h-[4px] md:h-[5px] bg-[#A1A1A6] sm:top-0 md:top-8 transform -translate-y-1/2"></div>

                <div className="flex justify-between w-full">
                    {[...Array(steps)].map((_, index) => (
                        <div key={index} className="flex flex-col items-center relative">

                            <div
                                className={`w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-white z-10 
              ${index < completedSteps ? "bg-[#1E40AF]" : index === ongoing ? "bg-[#F7B754]" : "bg-[#A1A1A6]"}`}
                            >
                                <FaCheck className="text:xs md:text-xl" />
                            </div>


                            {labels[index] && (
                                <span className="text-xs md:text-md lg:text-xl text-blue-900 mt-1 sm:mt-2 text-center whitespace-nowrap">
                                    {labels[index]}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
