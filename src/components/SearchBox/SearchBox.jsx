import { Formik, Form, Field } from "formik";
import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter) ?? "";

  return (
    <Formik initialValues={{ name: filter }} onSubmit={() => {}}>
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
              dispatch(changeFilter(e.target.value));
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox;
