import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// App components
import Header from "../src/Components/Header";
import Books from "../src/Components/Books";
import RegisterABook from "../src/Components/RegisterABook";
import Members from "../src/Components/Members";
import RegisterAMember from "../src/Components/RegisterAMember";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route path="/books" component={Books} />
      <Route path="/registerabook" component={RegisterABook} />
      <Route path="/members" component={Members} />
      <Route path="/registeramember" component={RegisterAMember} />
    </div>
  </BrowserRouter>
);

export default App;
