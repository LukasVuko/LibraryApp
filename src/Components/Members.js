import React from "react";
import Member from "../Components/Member";
import { Consumer } from "../Components/Context/index";

class Members extends React.Component {
  render() {
    return (
      <div className="main-content">
        <ul>
          <Consumer>
            {({ members }) =>
              members.map((member, index) => (
                <Member key={member.login.username} index={index} />
              ))
            }
          </Consumer>
        </ul>
      </div>
    );
  }
}

export default Members;
