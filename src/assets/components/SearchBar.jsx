import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (searchQuery !== "") {
      navigate(`/search/${searchQuery}`);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.key.value !== "") {
      handleClick();
    }
  }

  return (
    <div className='searchBarWrapper'>
      <input type="text" placeholder='Ara' onKeyPress={handleKeyPress} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={handleClick}> <FaSearch /> </button>
    </div>
  )
}