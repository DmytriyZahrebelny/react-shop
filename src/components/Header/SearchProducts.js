import React from 'react';

const onSearchChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
}

const SearchProducts = () => {
  return (
    <form>
      <input onChange={onSearchChange} type="text" />
    </form>
  )
}

export default SearchProducts;
