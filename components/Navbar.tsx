import { Gift, Home, Plus, FileText, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
// import { Tooltip as ReactTooltip } from 'react-tooltip'
// import 'react-tooltip/dist/react-tooltip.css'

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gradient-to-b from-[#1E40AF] to-[#3B82F6] bg-opacity-90 text-white p-2 sm:p-6 fixed bottom-0 w-full flex justify-around flex-wrap md:flex-col md:h-screen md:top-0 md:left-0 md:w-auto md:items-start">
            <Link href="/" className="hidden md:block text-white hover:bg-blue-700 rounded-full" data-tooltip-id="home-logo">
                <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            </Link>

            <Link href="/" className="text-white p-3 hover:bg-blue-700 rounded-full" data-tooltip-id="home-icon">
                <Home size={28} />
            </Link>
            {/* <ReactTooltip
                id="home-icon"
                content="Home"
                place="right"
                style={{ backgroundColor: 'white', color: '#1E3A8A', fontWeight: 'bold' }}
            /> */}

            <Link href="/create-quiz" className="text-white p-3 hover:bg-blue-700 rounded-full" data-tooltip-id="add-icon">
                <Plus size={28} />
            </Link>
            {/* <ReactTooltip
                id="add-icon"
                content="New Quiz"
                place="right"
                style={{ backgroundColor: 'white', color: '#1E3A8A', fontWeight: 'bold' }}
            /> */}

            <Link href="#" className="text-white p-3 hover:bg-blue-700 rounded-full" data-tooltip-id="documents-icon">
                <FileText size={28} />
            </Link>
            {/* <ReactTooltip
                id="documents-icon"
                content="Results"
                place="right"
                style={{ backgroundColor: 'white', color: '#1E3A8A', fontWeight: 'bold' }}
            /> */}

            <Link href="#" className="text-white p-3 hover:bg-blue-700 rounded-full" data-tooltip-id="gift-icon">
                <Gift size={28} />
            </Link>
            {/* <ReactTooltip
                id="gift-icon"
                content="Gift"
                place="right"
                style={{ backgroundColor: 'white', color: '#1E3A8A', fontWeight: 'bold' }}
            /> */}

            <Link href="#" className="text-white p-3 hover:bg-blue-700 rounded-full" data-tooltip-id="profile-icon">
                <User size={28} />
            </Link>
            {/* <ReactTooltip
                id="profile-icon"
                content="Profile"
                place="right"
                style={{ backgroundColor: 'white', color: '#1E3A8A', fontWeight: 'bold' }}
            /> */}
        </nav>

    )
}

export default Navbar
