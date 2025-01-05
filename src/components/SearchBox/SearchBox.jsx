import { Formik, Form, Field } from "formik";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <Formik initialValues={{ name: value }} onSubmit={() => {}}>
      {({ values, handleChange }) => (
        <Form className={css.form}>
          <label htmlFor="name">Find contacts by name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            value={values.name}
            onChange={(e) => {
              handleChange(e);
              onChange(e);
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox;
