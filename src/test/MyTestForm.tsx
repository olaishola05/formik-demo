import { useForm } from '../hooks/useForm';
import { FormikValues } from 'formik';
import { object, string } from "yup";
import '../form/Form.css'

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
    <main className="main">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.errors.name && 'input-err'}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.errors.name && 'input-err'}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default MyForm;
