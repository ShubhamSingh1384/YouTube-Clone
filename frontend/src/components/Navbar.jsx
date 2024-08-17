import React, { useState } from 'react'
import Avatar from 'react-avatar';
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from "../../public/images/logo.png"
import profile from "../../public/images/profile.jpg"
import { useNavigate } from 'react-router';


const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

    const searchQueryHandler = (event)=>{
        if(event?.key === "Enter" || event === "searchButton" && searchQuery?.length > 0){
            navigate(`search/${searchQuery}`);
            setSearchQuery("");
        }
    }
    
    
  return (
    <>
    <div className='flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 z-50'>
        <div className='flex items-center space-x-4 '>
            <div className='text-xl cursor-pointer'>
                <IoIosMenu size={20} />
            </div>
            <div className='w-28 cursor-pointer'>
                <img src={logo} alt="Logo" />
            </div>
        </div>

        <div className='flex w-[35%] items-center'>
            <div className=' w-[100%] px-4 py-2 border-[1px] border-gray-400 rounded-l-full'>
                <input className='outline-none' type="text" placeholder='Search'
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                value={searchQuery}
                />
            </div>
            <button className='px-4 py-[10px] border-[1px] border-gray-400 bg-gray-100 rounded-r-full'
            onClick={() => searchQueryHandler("searchButton")}
            >
                <CiSearch size={20} />
            </button>
            <div className='ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200'>
                <FaMicrophone />
            </div>
        </div>

        <div className="flex  space-x-5 items-center ">
            <RiVideoAddLine className="text-2xl" />
            <AiOutlineBell className="text-2xl" />
            <Avatar src={profile} size="32" round={true} />
        </div>
            
    </div>

    </>
  )
}

export default Navbar