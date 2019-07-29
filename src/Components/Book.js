import React from "react";
import { Consumer } from "../Components/Context/index";

const Book = ({ index }) => {
  return (
    <Consumer>
      {({ books }) => {
        return (
          <div className="book-card">
            <img src={books[index].img_src} alt="Cover" className="cover" />
            <div className="book-info">
              <h2>{books[index].title}</h2>
              <p>Author: {books[index].author}</p>
              <p>{books[index].desc}</p>
              <hr />
              <span
                className={books[index].isAvailable ? "dot green" : "dot"}
              />{" "}
              <span className="tag">
                {books[index].isAvailable ? "In Stock!" : "Out of stock"}
              </span>
              <hr />
              <span className="tag">
                {books[index].isPaperback ? "Paperback" : "Hardcover"}
              </span>
              <hr />
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Book;
