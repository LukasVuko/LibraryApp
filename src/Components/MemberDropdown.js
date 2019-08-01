import React, { Component } from "react";
import { Consumer } from "../components/context/index";

export class MemberDropdown extends Component {
  render() {
    return (
      <select id="capitalize">
        <option>**Available**</option>
        <Consumer>
          {({ members }) => {
            return members.map((member, index) => {
              return (
                <option key={index}>
                  {member.name.first} {member.name.last}
                </option>
              );
            });
          }}
        </Consumer>
      </select>
    );
  }
}

export default MemberDropdown;
