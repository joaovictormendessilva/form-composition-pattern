import * as Yup from "yup";

export const requiredString = Yup.string().required();
export const ageValidation = Yup.string().required().min(2);
