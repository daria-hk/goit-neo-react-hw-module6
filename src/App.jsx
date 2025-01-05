import "./App.css";

import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";
import * as Yup from "yup";

let obj = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [value, setValue] = useState("");
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : obj;
  });
  const initialValues = {
    name: "",
    number: "",
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
    actions.resetForm();
  };

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleRemove(id) {
    const newList = contacts.filter((contact) => contact.id !== id);

    setContacts(newList);
  }

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
        />
        <SearchBox value={value} onChange={handleChange} />
        <ContactList contacts={filterContacts} onRemove={handleRemove} />
      </div>
    </>
  );
};

export default App;
