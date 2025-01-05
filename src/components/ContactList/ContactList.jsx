import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onRemove }) => {
  return (
    <div className={css.contactList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default ContactList;
