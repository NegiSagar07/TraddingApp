import React from 'react'

const SearchBar = () => {

  const searchData = [
    "sagar negi",
    "shubham chauhan",
    "shubham negi",
    "aditya lukkha",
    "aditya johny",
    "bs bhai itne hi h"
  ]

  const Suggest = (e) => {
    
    

    return(
      <div>
        {searchData.map((name) => (
          <div key={name}> {searchData.name} </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <input type='text' placeholder='search..' onChange={Suggest} className='bg-[#63676c] h-8 w-96 rounded-2xl pl-2 text-[#F5F7F8] '/>
    </div>
  )
}

export default SearchBar