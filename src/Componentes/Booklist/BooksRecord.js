import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function BooksRecord() {
    const[Bookrecord, setBookrecord] = useState({
        title: "",
        author: "",
        isbn:"",
        publisher:"",
        published_date : "",
        description: ""
    })

    useEffect(()=>{

    },[])

  return (
    <div className='BooksRecord'>
        <Link to ="/Booklist" ><button>Show Booklist</button></Link>
        <h1>BooksRecord</h1>
        <ol>
            <li> Title : {Bookrecord.title}</li>
            <li> Author : {Bookrecord.author}</li>
            <li> ISBN : {Bookrecord.isbn}</li>
            <li> Publisher : {Bookrecord.publisher}</li>
            <li> Published Date : {Bookrecord.published_date}</li>
            <li> Description : {Bookrecord.description}</li>
        </ol>
        <button>Delete Book</button>
        <Link to='/EditBooks'><button>Edit Book</button></Link>
    </div>
  )
}

export default BooksRecord