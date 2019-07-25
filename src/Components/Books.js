import React from "react";
import Book from "../Components/Book";
import { Consumer } from "../Components/Context/index";

class Books extends React.Component {
  render() {
    return (
      <div className="main-content">
        <Consumer>
          {({books}) => (
            {books.data.map((book, index) => (
              <Book key={book.id} index={index} />
            ))}
          )}
        </Consumer>
      </div>
    );
  }
}

export default Books;
