import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input 
      type="text" 
      value={query}
      onChange={handleChange}
      placeholder="Search products..."
      className="search-bar"
    />
  );
};

export default SearchBar;
