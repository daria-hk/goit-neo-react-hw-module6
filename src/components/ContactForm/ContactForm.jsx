import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { ErrorMessage } from "formik";

const ContactForm = ({ initialValues, onSubmit, validationSchema }) => {
  const nameFieldId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
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
