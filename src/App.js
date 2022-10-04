import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import Contacts from "./components/Contacts";
import FormFields from "./components/FormFields";

function App() {
  return (
    <div className="container">
      <Contacts />
    </div>
  );
}

export default App;
