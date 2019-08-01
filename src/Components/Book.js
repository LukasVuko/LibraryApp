import React from "react";
import { Consumer } from "../components/context/index";
import MemberDropdown from "../components/MemberDropdown";

const Book = ({ index }) => {
  return (
    <Consumer>
      {({ books, actions }) => {
        return (
          <div className="book-card">
            <img src={books[index].img_src} alt="Cover" className="cover" />
            <div className="book-info">
              <h2>{books[index].title}</h2>
              <p>Author: {books[index].author}</p>
              <p>{books[index].desc}</p>
              <hr />
              <span
                className={
                  books[index].availability.isAvailable ? "dot green" : "dot"
                }
              />{" "}
              <span className="tag">
                {books[index].availability.isAvailable
                  ? "In Stock!"
                  : books[index].availability.assignedMember.name.first}
              </span>
              <hr />
              <span className="tag">
                {books[index].isPaperBack ? "Paperback" : "Hardcover"}
              </span>
              <hr />
              <MemberDropdown />
              <button onClick={() => actions.checkoutBook(0, 0)}>
                Checkout
              </button>
              <hr />
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Book;
