import React, { useState } from 'react';

const ImageSearch = ( {searchText} ) => {
    const [text, setText] = useState('');

    const onSubmit = (e) =>
      e.preventDefault();
      searchText(text);
    
    return (
      <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
         <form onSubmit={onSubmit} className="w-full max-w-sm">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input onChange={e => setText(e.target.value)}
          className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 text-gray-700 leading-tight focus:outline-none"
           type="text" placeholder="Search Image Term..." />
          <button className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-white border-4 text-sm py-1 px-2 rounded" type="submit">
          Search
          </button>
          </div>
         </form>
      </div>
    )   
}

export default ImageSearch;