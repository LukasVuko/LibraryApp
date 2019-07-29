import React from "react";

class RegisterAMember extends React.Component {
  render() {
    return (
      <div className="main-content grey">
        <form className="submit-book">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Street" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Province" />
          <input type="number" placeholder="Phone Number" />
          <input type="file" name="pic" accept="image/*" />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RegisterAMember;
