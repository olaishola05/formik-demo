import React from 'react';
import { Formik, Field, ErrorMessage, FormikValues, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import './Form.css';

interface FormValues {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	password: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password')], 'Passwords must match')
		.required('Confirm Password is required'),
});

const Form: React.FC = () => {
	const initialValues: FormValues = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const handleSubmit = (values: FormikValues,
		{ setSubmitting }: FormikHelpers<FormValues>) => {
		setTimeout(() => {
			console.log(values);
			setSubmitting(false);
		}, 500);
	}

	return (
		<div>
			<h1>Form Validation Example</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<form>
						<div>
							<label htmlFor="name">Name</label>
							<Field name="name" type="text" />
							<ErrorMessage name="name" component="div" />
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<Field name="email" type="email" />
							<ErrorMessage name="email" component="div" />
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<Field name="password" type="password" />
							<ErrorMessage name="password" component="div" />
						</div>
						<div>
							<label htmlFor="confirmPassword">Confirm Password</label>
							<Field name="confirmPassword" type="password" />
							<ErrorMessage name="confirmPassword" component="div" />
						</div>
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default Form;