import { useFormik, FormikValues } from "formik";
import { ObjectSchema} from "yup";

type Submit = (values: FormikValues) => void;

function useForm<T extends FormikValues>(
  initialValues: T,
  validation: ObjectSchema<T>,
  onSubmit: Submit
) {
  const formik = useFormik({
    initialValues,
    validationSchema: validation,
    onSubmit
  });
  return { formik };
}

export { useForm };
