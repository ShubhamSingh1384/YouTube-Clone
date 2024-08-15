import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";

const Sidebar = () => {
  const sidebarItems1 = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <PiUserSquareThin />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlineSubscriptions />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <AiOutlineLike />,
    },
  ];
  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiTrendmicro />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CgMediaLive />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <IoGameControllerOutline />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <TfiCup />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <SiStylelint />,
    },
    {
      id: 10,
      name: "Fashion & beauty",
      icon: <PiLightbulbLight />,
    },
    {
      id: 11,
      name: "Padcasts",
      icon: <MdPodcasts />,
    },
  ];
  const sidebarItems4 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids />,
    },
  ];

  return(
    <>
        <div className="px-6 mt-[60px] overflow-y-scroll overflow-x-hidden ">
            <div className="space-y-5 mb-5">
                {
                    sidebarItems1.map((item)=>(
                        <div 
                        className="flex items-center gap-3"
                        key={item.id}>
                            <div className="text-xl cursor-pointer text-red-500">{item.icon}</div>
                            <span className="cursor-pointer">{item.name}</span>
                        </div>
                    ))
                }
                <hr/>
            </div>

            <div className="space-y-2 mb-5">
                <h3 className="font-bold"
                >You</h3>
                <div className="space-y-2">
                {
                    sidebarItems2.map((item) => (
                        <div 
                        className="flex items-center gap-3"
                        key={item.id}>
                            <div className="text-xl cursor-pointer text-red-500">{item.icon}</div>
                            <span className="cursor-pointer">{item.name}</span>
                        </div>
                    ))
                }

                </div>
                <hr/>
            </div>

            <div className="space-y-2 mb-5">
            <h3 className="font-bold"
                >Explore</h3>
                <div className="space-y-2">
                {
                    sidebarItems3.map((item) => (
                        <div 
                        className="flex items-center gap-3"
                        key={item.id}>
                            <div className="text-xl cursor-pointer text-red-500">{item.icon}</div>
                            <span className="cursor-pointer">{item.name}</span>
                        </div>
                    ))
                }

                </div>
                <hr/>
            </div>

            <div className="space-y-2 mb-5">
            <h3 className="font-bold"
                >More from YouTube</h3>
                <div className="space-y-2">
                {
                    sidebarItems4.map((item) => (
                        <div 
                        className="flex items-center gap-3"
                        key={item.id}>
                            <div className="text-xl cursor-pointer text-red-500">{item.icon}</div>
                            <span className="cursor-pointer">{item.name}</span>
                        </div>
                    ))
                }
                <hr/> 
              </div>
              <br/>
              <span className="text-xs text-gray-600 font-semibold">
                About Press Copyright <br/> Contact us Creators <br/> Advertise Developers <br/>
                <p className="mt-3">Terms Privacy Policy & Safety</p>
                How YouTube works{" "}
                <br/> Test new features
              </span>
              <br/>
              <p className="text-xs text-gray-500 mt-3">© 2024 Learn Coding</p>
            </div>

        </div>
    </>
  );
};

export default Sidebar;
