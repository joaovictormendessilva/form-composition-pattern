import { Formik, FormikValues } from "formik";
import { ReactNode } from "react";
import { View } from "react-native";

type FormRootProps<T extends FormikValues> = {
  initialValues: T;
  onSubmit: (values: T) => void;
  children: (handleSubmit: () => void, resetForm: () => void) => ReactNode;
  validationSchema: any;
};

export function FormRoot<T extends FormikValues>({
  children,
  ...props
}: FormRootProps<T>) {
  return (
    <Formik
      onSubmit={props.onSubmit}
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
    >
      {({ handleSubmit, resetForm }) => (
        <View>{children(handleSubmit, resetForm)}</View>
      )}
    </Formik>
  );
}
