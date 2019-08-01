import React from "react";
import { Consumer } from "../components/context/index";

class Member extends React.Component {
  render() {
    const { index } = this.props;
    return (
      <Consumer>
        {({ members }) => {
          return (
            <li id="capitalize" className="course media group">
              <img
                className="course-img"
                src={members[index].img}
                alt="course"
              />
              <div className="course-info">
                <h3>
                  {members[index].name.first}
                  {members[index].name.last}
                </h3>
                <p>
                  Address: {members[index].address}
                  {"."}
                </p>
                <p>
                  City: {members[index].city}
                  {", "}
                  {members[index].province}
                </p>
                <p>{members[index].email}</p>
                <p>Phone: {members[index].phone}</p>
              </div>
              <div>
                <p style={{ display: "block" }}>
                  Book assigned:{" "}
                  {members[index].book ? members[index].book.title : "None"}
                </p>
              </div>
            </li>
          );
        }}
      </Consumer>
    );
  }
}

export default Member;
