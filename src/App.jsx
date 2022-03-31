import React from 'react';

const title = 'Deep Work';
const author = 'Cal Newport';
const image =
  'https://images-eu.ssl-images-amazon.com/images/I/41UMGAFVUTL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg';

function App() {
  return (
    <div>
      <section className='booklist'>
        <Book />
        <Book />
        <Book />
      </section>
    </div>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <img src={image} alt='Book Image' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default App;
