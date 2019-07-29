import React from "react";

class RegisterABook extends React.Component {
  render() {
    return (
      <div className="main-content grey">
        <form className="submit-book">
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Author" />
          <textarea type="text" name="comment" form="usrform">
            Description
          </textarea>
          <input type="file" name="pic" accept="image/*" />
          <input type="radio" name="isPaperback" value="true" /> Paperback
          <input type="radio" name="isPaperback" value="false" />
          Hardcover
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RegisterABook;
