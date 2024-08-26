import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {

    const sameStyle = "hover:bg-[#F5F7F8] h-10 rounded-2xl text-center content-center  "

  return (
    <nav className='bg-[#45474B] text-[#F4CE14] h-12 text-xl flex flex-row justify-evenly items-center pl-60 pr-60' >
          <Link to = "/" className={`${sameStyle} w-24`}>Logo</Link>
          <SearchBar/>
          <Link to = "/portfolio" className={`${sameStyle} w-32`}>Portfolio</Link>
          <Link to = "/gold" className={`${sameStyle} w-24`}>Gold</Link>
          <Link to = "/screener" className={`${sameStyle} w-32`}>Screener</Link>
          <Link to = "/more" className={`${sameStyle} w-24`}>More</Link>
          <Link to = "/login" className={`${sameStyle} w-28`}>Login</Link>
          <Link to = "/login" className={`${sameStyle} w-28`}>Home</Link>
        </nav>
  )
}

export default Navbar