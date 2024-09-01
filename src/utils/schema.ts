import { object, string } from "yup";

export const validationSchema = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
});