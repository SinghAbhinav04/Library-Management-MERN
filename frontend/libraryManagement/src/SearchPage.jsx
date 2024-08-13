import React, { useState } from 'react';
import '../styles/SearchPage.css';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}`);
    const data = await response.json();
    setBooks(data.docs || []);
  };

  const addBook= async (book) => {
    const token = localStorage.getItem('token');

    try{
        const response = await fetch('http://localhost:8001/addBook',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${token}`
            },
                body:JSON.stringify({
                    title:book.title,
                    author:book.author_name?.join(', '),
                    rentedDate: Date.now(),
                    returnDate: Date.now()+14*24*60*60*1000
                })
        })

        if(response.ok){
            const result = await response.json();
            console.log('book added', result);

        }
        else{
            console.log('failed to add book');
        }
    
    }
    catch(err){
        console.log(err)
    }

  }
 

  return (
    <div className="library-management">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for books"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="books-container">
        {books.map((book) => (
          <div
            className="book"
            key={book.key}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
            />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>{book.author_name?.join(', ')}</p>
              <p>{book.first_publish_year}</p>
              <button onClick={()=>addBook(book)}>Rent</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
