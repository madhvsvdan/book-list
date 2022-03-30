import React from 'react';

function App() {
  return (
    <div>
      <section>
        <Book />
      </section>
    </div>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/41UMGAFVUTL._SX319_BO1,204,203,200_.jpg'
      alt='Book Image'
    />
  );
};

const Title = () => <h1>Deep Work</h1>;
const Author = () => <h4>Cal Newport</h4>;

export default App;
