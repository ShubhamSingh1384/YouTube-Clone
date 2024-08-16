import React from 'react'

const ListItems = () => {
    const categories = [
        "All",
        "Music",
        "React routers",
        "Computer programming",
        "Reverberation",
        "Movie musicals",
        "India national cricket team",
        "News",
        "Mixes",
        "1990s",
        "Telugu cinema",
        "Live",
        "Dramedy",
        "Dubbing",
        "Indian soap opera",
        "Cricket",
        "Football",
        "Learn Coding",
    ];


  return (
    <>
    <div className='flex overflow-x-scroll hide-scroll-bar mt-20 pl-5'>
        <div className='flex space-x-4 flex-nowrap'>
            {
                categories.map((item) => (
                    <div 
                    className='flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer'
                    key={item}
                    >{item}</div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default ListItems