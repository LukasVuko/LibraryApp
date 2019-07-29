import React from "react";
import { Consumer } from "../Components/Context/index";

class Member extends React.Component {
  render() {
    return (
      <Consumer>
        {({ members }) => {
          return (
            <li className="course media group">
              <img
                className="course-img"
                src={members[this.props.index].picture.large}
                alt="course"
              />
              <div className="course-info">
                <h3>
                  {members[this.props.index].name.first}{" "}
                  {members[this.props.index].name.last}
                </h3>
                <p>
                  {members[this.props.index].location.street}{" "}
                  {members[this.props.index].location.city}{" "}
                  {members[this.props.index].location.state}
                </p>
                <p>{members[this.props.index].email}</p>
                <p>{members[this.props.index].phone}</p>
              </div>
            </li>
          );
        }}
      </Consumer>
    );
  }
}

export default Member;
