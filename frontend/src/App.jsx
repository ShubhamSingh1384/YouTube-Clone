import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Search from './components/Search'
import PlayingVideo from './components/PlayingVideo'
import Loading from './loader/Loading'
import { useAuth } from './contexts/AuthProvider'


const App = () => {

  const {loading} = useAuth();
  console.log(loading);
  return (
    <>
    {
      // loading && <Loading/>
    }
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search/:searchQuery" element={<Search/>} />
      <Route path="/video/:id" element={<PlayingVideo/>} />
    </Routes>
    <div className='flex'>
    </div>
    </>
  )
}

export default App