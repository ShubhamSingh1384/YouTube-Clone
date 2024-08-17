import { abbreviateNumber } from 'js-abbreviation-number';
import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Time from '../loader/Time';
import { Link } from 'react-router-dom';

const SearchCard = ({video}) => {
    console.log(video);
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex">
          <div className="relative h-48 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden max-h-screen">
            <img
              className="h-52 w-96"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video.lengthSeconds} />}
          </div>
          <div className="flex">
            <div>
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0].url}
                  alt=""
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2">{video?.title}</span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}
              {
                video?.author?.badges[0]?.type==="VERIFIED_CHANNEL"
                && 
                <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]"/>
              }
               </span>
               <div className="flex text-gray-500">
                <span>
                    {`${abbreviateNumber(
                        video?.stats?.views,2
                    )} views `}
                </span>
                <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>
                <span className="text-sm">{video?.publishedTimeText}</span>
               </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SearchCard