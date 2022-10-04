import React, { useState, useEffect } from "react";

export default function FormFields({ addContacts, contacts }) {
  const initialValues = { contactName: "", phoneNumber: "" };
  const [form, setForm] = useState(initialValues);

  useEffect(() => {
    setForm(initialValues);
  }, [contacts]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.contactName === "" || form.phoneNumber === "") {
      return false;
    }
    addContacts([...contacts, form]);
  };

  return (
    <form onSubmit={handleSubmit} className="col-md-12 mt-5 mb-3">
      <div className="row">
        <div className="col-md-4">
          <div class="form-floating">
            <input
              type="text"
              className="form-control"
              name="contactName"
              placeholder="name"
              value={form.contactName}
              onChange={handleChange}
            />
            <label htmlFor="contactName">Name</label>
          </div>
        </div>
        <div className="col-md-4">
          <div class="form-floating">
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              placeholder="phone"
              value={form.phoneNumber}
              onChange={handleChange}
            />
            <label htmlFor="phoneNumber">Phone</label>
          </div>
        </div>
        <div className="col-md-4">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
