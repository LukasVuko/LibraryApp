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
                  : `Sorry! This book is currently assigned to: ${
                      books[index].availability.assignedMember.name.first
                    } ${books[index].availability.assignedMember.name.last}`}
              </span>
              <hr />
              <span className="tag">
                {books[index].isPaperBack ? "Paperback" : "Hardcover"}
              </span>
              <hr />
              <MemberDropdown bookindex={index} />
              <hr />
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Book;
