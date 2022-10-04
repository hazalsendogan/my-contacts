import React, { useState, useEffect } from "react";
import ContactList from "./ContactList";
import FormFields from "./FormFields";

export default function Contacts() {

 const [contacts, setContacts] = useState([]);
 useEffect(() => {
    console.log(contacts)
  }, [contacts])

  return (
    <div className="row">
      <FormFields contacts={contacts} addContacts={setContacts}/>
      <ContactList contacts={contacts} removeContacts={setContacts}/>
    </div>
  );
}
