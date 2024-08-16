"use client";
import { useState } from 'react';

type SearchBarProps = {
  onSearch: (term: string) => void;
};

const SearchBar = ({ onSearch }:SearchBarProps ) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <input 
      className="w-full p-2 mb-4 border border-gray-300 text-cyan-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text" 
      placeholder="Search apartments" 
      value={searchTerm} 
      onChange={handleSearch} 
    />
  );
};

export default SearchBar;