import React from "react";
import { bookData } from "../../data/bookData";

const LibraryContext = React.createContext();

export class Provider extends React.Component {
  state = {
    books: bookData
  };

  render() {
    return (
      <LibraryContext.Provider
        value={{
          books: this.state.books
        }}
      >
        {this.props.children}
      </LibraryContext.Provider>
    );
  }
}

export const Consumer = LibraryContext.Consumer;
