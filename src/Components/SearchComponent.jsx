import React from 'react'

const SearchComponent = ({searchCourse,courseSearchUserFunction}) => {
  return (
     <header className='App-header'>
      <h1>My Cart</h1>
      <div className='search-bar'>
        <input
         type='text'
         placeholder='Search Here...'
         value={searchCourse}
         onChange={courseSearchUserFunction}
        />

      </div>

     </header>
  )
}

export default SearchComponent