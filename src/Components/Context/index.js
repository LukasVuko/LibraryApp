import React from "react";
import { bookData } from "../../data/bookData";

const LibraryContext = React.createContext();

export class Provider extends React.Component {
  state = {
    books: bookData,
    members: []
  };

  componentDidMount() {
    this.fetchMemberData();
    this.fillBookData();
  }

  prevMemberId = 0;

  fetchMemberData() {
    fetch("https://randomuser.me/api/?nat=CA&results=8")
      .then(data => data.json())
      .then(data =>
        data.results.map(member => {
          const item = {
            name: {
              first: member.name.first,
              last: member.name.last
            },
            address: member.location.street,
            city: member.location.city,
            province: member.location.state,
            phone: member.phone,
            email: member.email,
            img: member.picture.large,
            book: null,
            id: `member-${(this.prevMemberId += 1)}`
          };
          return item;
        })
      )
      .then(data =>
        this.setState({
          members: data
        })
      );
  }

  fillBookData() {
    this.setState({
      books: bookData
    });
  }

  checkoutBook = (bookIndex, memberIndex) => {
    const book = this.state.books[bookIndex];
    const member = this.state.members[memberIndex];
    const { books, members } = this.state;

    books[bookIndex].availability.assignedMember = member;
    books[bookIndex].availability.isAvailable = false;

    members[memberIndex].book = book;

    this.setState({
      members: members,
      books: books
    });
  };

  render() {
    return (
      <LibraryContext.Provider
        value={{
          books: this.state.books,
          members: this.state.members,
          actions: {
            checkoutBook: this.checkoutBook
          }
        }}
      >
        {this.props.children}
      </LibraryContext.Provider>
    );
  }
}

export const Consumer = LibraryContext.Consumer;
