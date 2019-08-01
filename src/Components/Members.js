import React from "react";
import Member from "../components/Member";
import { Consumer } from "../components/context/index";

class Members extends React.Component {
  render() {
    return (
      <div className="main-content">
        <ul>
          <Consumer>
            {({ members }) =>
              members.map((member, index) => (
                <Member key={member.id} index={index} />
              ))
            }
          </Consumer>
        </ul>
      </div>
    );
  }
}

export default Members;
