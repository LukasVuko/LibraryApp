import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// App components
import Header from "../src/components/Header";
import Books from "../src/components/Books";
import RegisterABook from "../src/components/RegisterABook";
import Members from "../src/components/Members";
import RegisterAMember from "../src/components/RegisterAMember";

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
