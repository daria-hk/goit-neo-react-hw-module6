import css from "./Contact.module.css";

const Contact = ({ id, name, number, onRemove }) => {
  return (
    <div className={css.contactContainer}>
      <div className={css.contact}>
        <p className={css.contactItem}>{name}</p>
        <p className={css.contactItem}>{number}</p>
      </div>
      <button onClick={() => onRemove(id)}>Delete</button>
    </div>
  );
};

export default Contact;
