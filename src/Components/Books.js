import React from "react";
import Book from "../components/Book";
import { Consumer } from "../components/context/index";

class Books extends React.Component {
  render() {
    return (
      <div className="main-content">
        <Consumer>
          {({ books }) => (
            <React.Fragment>
              {books.map((books, index) => (
                <Book key={books.id.toString()} index={index} />
              ))}
            </React.Fragment>
          )}
        </Consumer>
      </div>
    );
  }
}

export default Books;
