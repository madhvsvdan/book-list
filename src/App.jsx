import React from 'react';
import Book from './Book';
import { books } from './books';

function App() {
  return (
    <div>
      <section className='booklist'>
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </section>
    </div>
  );
}

export default App;
