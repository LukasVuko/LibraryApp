import React from "react";

const Book = props => {
  return (
    <div className="book-card">
      <img
        src="https://prodimage.images-bn.com/pimages/9781499369748_p0_v2_s600x595.jpg"
        alt="Cover"
        className="cover"
      />
      <div className="book-info">
        <h2>Pride and Prejudice</h2>
        <p>Author: Jane Austen</p>
        <p>
          Since its immediate success in 1813, Pride and Prejudice has remained
          one of the most popular novels in the English language. Jane Austen
          called this brilliant work "her own darling child" and its vivacious
          heroine, Elizabeth Bennet, "as delightful a creature as ever appeared
          in print." The romantic clash between the opinionated Elizabeth and
          her proud beau, Mr. Darcy, is a splendid performance of civilized
          sparring. And Jane Austen's radiant wit sparkles as her characters
          dance a delicate quadrille of flirtation and intrigue, making this
          book the most superb comedy of manners of Regency England.
        </p>
        <hr />
        <span className="dot" /> <span className="tag">In stock!</span>
        <hr />
        <span className="dot" /> <span className="tag">Paperback</span>
      </div>
    </div>
  );
};

export default Book;
