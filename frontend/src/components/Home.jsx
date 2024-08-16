import React from 'react'
import Sidebar from './Sidebar'
import Video from './Video'
import {useAuth} from '../contexts/AuthProvider'
import ListItems from './ListItems'

const Home = () => {
    const {data} = useAuth();
    console.log(data);
  return (
    <div className='flex'>
        <Sidebar/>
        <div
        className='overflow-y-scroll overflow-x-hidden max-h-screen'
        >
            <ListItems/>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-5 mt-20 '>
            {
                data.map((item)=>{
                    if(item.type !== "video") return false;
                    return (<div key={item.video.videoId}>
                        <Video 
                        video={item.video}
                        />
                    </div>)
                })
            }
            </div>

        </div>

    </div>
  )
}

export default Home