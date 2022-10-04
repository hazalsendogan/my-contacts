import React from "react";
import { useState, useEffect } from "react";

export default function ContactList({ contacts, removeContacts }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(contacts);
    console.log("items", items);
  }, [items]);

  const removeItem = (e) => {
    const parentItem = e.target.parentElement;
    const index = parentItem.id;
    const arr = contacts.splice(index, 1);
    setItems(arr);
  };

  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          My Contacts
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {contacts.map((contact, key) => (
              <li className="list-group-item" key={key} id={key}>
                <div className="item">
                  <p>
                    <strong className="text-info">Name:</strong>{" "}
                    {contact.contactName} -
                    <strong className="text-info"> Phone Number:</strong>{" "}
                    {contact.phoneNumber}
                  </p>
                  <button
                    className="btn btn-link text-danger"
                    onClick={removeItem}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
