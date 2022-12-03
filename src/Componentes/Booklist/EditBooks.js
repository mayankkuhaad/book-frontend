import React from 'react'

function EditBooks() {
  return (
    <div className='EditBooks'>
        <h1>EditBooks</h1>
        <div className='Titlediv'>
            <label >Title</label>
        <input className='Title' type="text" placeholder='Title of the Book'></input>
        </div>
        <div className='ISBNdiv'><label>ISBN</label><input className='ISBN' type="text" placeholder='ISBN'></input></div>
        <div className='AuthorDiv'><label>Author</label><input className='Author' type="text" placeholder='Author'></input></div>
        <div className='Discribediv'><label>Discribe</label><input className='Discribe' type="text" placeholder='Discribe the Book'></input></div>
        <div className='Publisheddiv'><label>Published_date</label><input className='Published' type="text" placeholder='Published Date'></input></div>
        <div className='Publisherdiv'><label>Publisher</label><input className='Publisher' type="text" placeholder='PUBLISHER OF THE BOOK'></input></div>
        <button type='submit'>Submit</button>
    </div>
  )
}

export default EditBooks