import React from 'react'
import { Link } from 'react-router-dom'

function Addbook() {
  return (
    <div className='Addbook'>
        <Link to="/Booklist"><button>Show Booklist</button></Link>
        <h1>AddBook</h1>
        <input className='Title' type="text" placeholder='Title of the Book'></input>
        <input className='ISBN' type="text" placeholder='ISBN'></input>
        <input className='Author' type="text" placeholder='Author'></input>
        <input className='Describe' type="text" placeholder='Describe the Book'></input>
        <input className='Published' type="text" placeholder='Published Date'></input>
        <input className='Publisher' type="text" placeholder='PUBLISHER OF THE BOOK'></input>
        <button type='submit'>Submit</button>
    </div>
  )
}

export default Addbook