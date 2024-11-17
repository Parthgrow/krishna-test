'use client'

import { Bell, ChevronRight, Gift, User, MessageCircle, } from 'lucide-react'
import Navbar from './Navbar'
import { AiFillThunderbolt } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { CgInsights } from "react-icons/cg";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { HiLightningBolt } from "react-icons/hi";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { LiaBrainSolid } from "react-icons/lia";
import { TfiPulse } from "react-icons/tfi";

export function Home() {
    return (

        <div className="flex md:flex-row">
            <Navbar />
            <div className="flex-1 bg-blue-50 min-h-screen pb-20 md:pb-0 md:pl-24">
                <main className="p-8 overflow-auto">
                    <header className="flex justify-between items-center mb-8">
                        <h1 className="text-4xl font-bold text-blue-900 font-playfair">Dashboard</h1>
                        <button className="p-2 rounded-full bg-white shadow-md text-blue-600">
                            <BsFillBellFill className="text-blue-900" size={24} />
                        </button>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                        {/* Krishna Score */}
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow border border-blue-900 md:col-span-3">
                            <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-3 sm:mb-4 flex items-center justify-center font-playfair">
                                <MdOutlineStarBorderPurple500 className='text-[#F7B754] mr-2 text-xl sm:text-2xl' /> Krishna Score
                            </h2>
                            <div className="flex flex-col sm:flex-row items-center pl-4 sm:pl-6 lg:pl-8">
                                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 sm:mb-0 lg:mr-8">
                                    <svg className="w-full h-full" viewBox="0 0 36 36">
                                        <path
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#E5E7EB"
                                            strokeWidth="3"
                                        />
                                        <path
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#3B82F6"
                                            strokeWidth="3"
                                            strokeDasharray="10, 100"
                                        />
                                    </svg>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl font-bold text-blue-600">
                                        10%
                                    </div>
                                </div>
                                <div className="sm:ml-4 lg:ml-6 flex-grow text-center sm:text-left">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-900 mb-2 sm:mb-3 lg:tracking-wide lg:leading-relaxed">Your current Awareness level</h3>
                                    <button className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-md flex items-center space-x-2 mx-auto sm:mx-0">
                                        <CgInsights className='text-lg sm:text-xl' />
                                        <p className='text-sm sm:text-base lg:text-lg'>View Details</p>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Quick Action */}
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow border border-blue-900 md:col-span-2">
                            <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-3 sm:mb-4 flex justify-center items-center font-playfair">
                                <HiLightningBolt className='text-[#F7B754] mr-2 text-xl sm:text-2xl' /> Quick Action
                            </h2>
                            <div className="space-y-3 sm:space-y-4 flex flex-col items-center">
                                <div className="w-full lg:w-4/5  mx-auto py-2 px-3 sm:px-4 bg-blue-50 text-blue-600 rounded-md flex items-center justify-between border border-blue-900 ">
                                    <IoDocumentTextOutline className='text-blue-600 text-base sm:text-lg' />
                                    <p className='text-sm sm:text-base '>Create A quiz</p>
                                    <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                                </div>
                                <div className="w-full lg:w-4/5 mx-auto py-2 px-3 sm:px-4 bg-blue-50 text-blue-600 rounded-md flex items-center justify-between border border-blue-900 ">
                                    <AiFillThunderbolt className='text-blue-600 text-base sm:text-lg' />
                                    <p className='text-sm sm:text-base '>Take A quiz</p>
                                    <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                                </div>
                                <div className="w-full lg:w-4/5 mx-auto py-2 px-3 sm:px-4 bg-blue-50 text-blue-600 rounded-md flex items-center justify-between border border-blue-900 ">
                                    <HiUsers className='text-blue-600 text-base sm:text-lg' />
                                    <p className='text-sm sm:text-base '>Invite Friends</p>
                                    <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Insights */}
                        <div className="bg-white p-6 rounded-lg shadow border border-blue-900 md:col-span-3">
                            <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-3 sm:mb-4 flex justify-center items-center font-playfair">
                                <LiaBrainSolid className='text-[#F7B754] mr-2 text-xl sm:text-2xl' /> Insights
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-center text-blue-600 bg-blue-50 p-3 rounded-md">
                                    <IoDocumentTextOutline size={20} className="mr-3" /> Practice active awareness
                                </li>
                                <li className="flex items-center text-blue-600 bg-blue-50 p-3 rounded-md">
                                    <LiaBrainSolid size={20} className="mr-3" /> Reflect on your emotions
                                </li>
                                <li className="flex items-center text-blue-600 bg-blue-50 p-3 rounded-md">
                                    <MessageCircle size={20} className="mr-3" /> Seek feedback
                                </li>
                            </ul>
                        </div>
                        {/* Recent Activity */}
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow border border-blue-900 w-full md:col-span-2">
                            <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-3 sm:mb-4 flex justify-center items-center font-playfair">
                                <TfiPulse className='text-[#F7B754] mr-2 text-xl sm:text-2xl' /> Recent Activity
                            </h2>
                            <ul className="space-y-3 sm:space-y-4 w-full flex flex-col items-center">
                                <div className="w-full sm:w-4/5 md:w-full py-2 px-3 sm:px-4 bg-blue-50 text-blue-600 rounded-md flex items-center space-x-2 sm:space-x-4">
                                    <IoDocumentTextOutline className='text-blue-600 text-base' />
                                    <p className='text-sm sm:text-base'>Completed "example" quiz</p>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-full py-2 px-3 sm:px-4 bg-blue-50 text-blue-600 rounded-md flex items-center space-x-2 sm:space-x-4">
                                    <CiCirclePlus className='text-blue-600 text-base sm:text-lg' />
                                    <p className='text-sm sm:text-base'>Created "example" quiz</p>
                                </div>
                                <div className="w-full sm:w-4/5 md:w-full py-2 px-3 sm:px-4 bg-blue-50 text-blue-600 rounded-md flex items-center space-x-2 sm:space-x-4">
                                    <BsGraphUpArrow className='text-blue-600 text-base sm:text-lg' />
                                    <p className='text-sm sm:text-base'>Improved score by 5%</p>
                                </div>
                            </ul>
                        </div>
                    </div>

                    {/* Share the Gift */}
                    <div className="mt-8 bg-gradient-to-r from-[#2F2AA7] to-[#4A66EE] p-4 sm:p-6 rounded-lg text-white w-full">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 font-playfair text-center sm:text-left tracking-wider">Share the Gift of Self-Awareness</h2>
                        <p className="mb-4 text-sm sm:text-base text-center sm:text-left">Invite a friend and gift the Krishna test to get 20% off</p>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                            <button className="w-full sm:w-auto px-4 py-2 bg-white hover:bg-gray-100 text-blue-600 rounded-md flex items-center justify-center transition-colors duration-300">
                                <User size={16} className="mr-2" /> <span className="text-sm sm:text-base">Invite Friends</span>
                            </button>
                            <button className="w-full sm:w-auto px-4 py-2 bg-[#2F2AA7] hover:bg-[#3A35B2] text-white border border-white rounded-md flex items-center justify-center transition-colors duration-300">
                                <Gift size={16} className="mr-2" /> <span className="text-sm sm:text-base">Gift a test</span>
                            </button>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    )
}