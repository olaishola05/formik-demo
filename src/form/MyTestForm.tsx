import React, { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { FormikValues } from "formik";
import "../form/Form.css";
import { validationSchema } from "../utils/schema";

function MyForm() {
  const [status, setStatus] = useState<boolean>(false);
  const initialValues = {
    name: "",
    email: "",
  };

  const onSubmit = (values: FormikValues) => {
    // mock submit
    setTimeout(() => {
      console.log("Form submitted with values:", values);
      setStatus(true);
    }, 1000);
  };

  const { formik } = useForm(initialValues, validationSchema, onSubmit);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
    handleReset,
  } = formik;

  useEffect(() => {
    if (status) {
      handleReset(values);
      setStatus(false);
    }
  }, [status, handleReset, values]);

  return (
    <main className="main">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && "input-err"}
          />
          {touched.name && errors.name && (
            <div className="error">{errors.name}</div>
          )}
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && "input-err"}
          />
          {touched.email && errors.email && (
            <div className="error">{errors.email}</div>
          )}
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </form>
    </main>
  );
}

export default MyForm;
