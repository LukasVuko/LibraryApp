import React from "react";
import { bookData } from "../../data/bookData";
import { memberData2 } from "../../data/memberData2";

const LibraryContext = React.createContext();

export class Provider extends React.Component {
  state = {
    books: bookData,
    members: memberData2
  };

  render() {
    return (
      <LibraryContext.Provider
        value={{
          books: this.state.books,
          members: this.state.members
        }}
      >
        {this.props.children}
      </LibraryContext.Provider>
    );
  }
}

export const Consumer = LibraryContext.Consumer;
