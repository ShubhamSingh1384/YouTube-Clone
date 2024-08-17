import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthProvider';
import { useParams } from 'react-router';
import { fetchData } from '../Utils/rapidapi';
import Sidebar from './Sidebar';
import SearchCard from './SearchCard';

const Search = () => {
  const [result , setResult] = useState([]);
  const {searchQuery} = useParams();
  const { data } = useAuth();

  useEffect(()=>{
    fetchSearchData()
  }, [searchQuery])

  const fetchSearchData = ()=>{
    fetchData(`search/?q=${searchQuery}`)
    .then(({contents}) =>{
      // console.log(contents);
      setResult(contents);
    })
  }


  return (
    <div>
      <Sidebar/>
      <div>
        <div>
          {
            result.map((item , index) =>{
              if(item?.type !== "video") return false;

              return <SearchCard key={index} video={item?.video} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Search