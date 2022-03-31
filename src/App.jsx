import React from 'react';

const firstBook = {
  title: 'Deep Work',
  author: 'Cal Newport',
  img: 'https://images-eu.ssl-images-amazon.com/images/I/41UMGAFVUTL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
};

const secondBook = {
  title: 'Essentialism',
  author: 'Greg McKeown',
  img: 'https://images-na.ssl-images-amazon.com/images/I/41U831OHkJL._SX322_BO1,204,203,200_.jpg',
};

const thirdBook = {
  title: 'The One Thing',
  author: 'Gary Keller',
  img: 'https://images-na.ssl-images-amazon.com/images/I/31emFJveEWL._SX341_BO1,204,203,200_.jpg',
};

function App() {
  return (
    <div>
      <section className='booklist'>
        <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
        />
        <Book
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
        />
        <Book
          img={thirdBook.img}
          title={thirdBook.title}
          author={thirdBook.author}
        />
      </section>
    </div>
  );
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt='Book Image' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

export default App;
