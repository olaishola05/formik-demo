import React from "react";
import { useForm } from '../hooks/useForm';
import {FormikValues} from 'formik';
import { object, string } from "yup";

function MyForm() {
  const initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = object({
    name: string().required("Name is required"),
    email: string().email("Invalid email").required("Email is required"),
  });

  const onSubmit = (values: FormikValues) => {
    console.log("Form submitted with values:", values);
  };

  const { formik } = useForm(initialValues, validationSchema, onSubmit);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error">{formik.errors.name}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
