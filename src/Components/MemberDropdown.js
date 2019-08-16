import React, { Component } from "react";
import { Consumer } from "../components/context/index";

export class MemberDropdown extends Component {
  render() {
    return (
      <Consumer>
        {({ members, actions }) => {
          return (
            <React.Fragment>
              <select id="capitalize test">
                <option>**Available**</option>
                {members.map((member, index) => {
                  return (
                    <option key={index}>
                      {member.name.first} {member.name.last}
                    </option>
                  );
                })}
              </select>
              <button>Checkout</button>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default MemberDropdown;
