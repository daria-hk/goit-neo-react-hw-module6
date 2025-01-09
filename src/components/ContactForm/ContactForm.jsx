import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = () => {
  const nameFieldId = useId();
  const numberId = useId();

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

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
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          id={nameFieldId}
          className={css.field}
          type="text"
          name="name"
          placeholder="Name"
        />
        <ErrorMessage name="name" component="span" className={css.error} />
        <label htmlFor={numberId}>Number</label>
        <Field
          id={numberId}
          className={css.field}
          type="tel"
          name="number"
          placeholder="111-22-33"
        />
        <ErrorMessage name="number" component="span" className={css.error} />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
