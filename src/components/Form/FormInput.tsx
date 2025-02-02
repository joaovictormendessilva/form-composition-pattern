import { Field, FieldProps } from "formik";
import { StyleSheet, TextInput, View, Text } from "react-native";

type FormInputProps<T> = {
  name: keyof T;
  placeholder: string;
  onChangeText?: (field: string, value: string) => void;
};

export function FormInput<T>({
  name,
  placeholder,
  onChangeText,
}: FormInputProps<T>) {
  return (
    <Field name={String(name)}>
      {({ field, form }: FieldProps<T>) => (
        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor="green"
            placeholder={placeholder}
            value={field.value as string}
            onChangeText={(value) => {
              form.handleChange(name)(value);
              onChangeText && onChangeText(name as string, value);
            }}
          />
          {form.touched[name] && form.errors[name] && (
            <Text style={styles.errorText}>{form.errors[name] as string}</Text>
          )}
        </View>
      )}
    </Field>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "green",
    height: 48,
    padding: 10,
    borderRadius: 8,
    color: "white",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
