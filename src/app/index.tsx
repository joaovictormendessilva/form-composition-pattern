import { useState } from "react";
import { Text, View } from "react-native";
import * as Yup from "yup";
import { Form } from "../components/Form";
import {
  ageValidation,
  requiredString,
} from "../components/Form/BaseValidations";

type FormValues = {
  name: string;
  age: string;
};

export default function Index() {
  const FormRoot = Form.Root<FormValues>;
  const FormInput = Form.Input<FormValues>;

  const [formValuesState, setFormValuesState] =
    useState<FormValues>(initialValues);

  const onChangeText = (field: string, value: string) => {
    setFormValuesState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <View style={{ padding: 10 }}>
      <FormRoot
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        {(handleSubmit, resetForm) => (
          <Form.Container>
            <FormInput
              name="name"
              placeholder="Insira seu nome"
              onChangeText={onChangeText}
            />
            <FormInput
              name="age"
              placeholder="Insira sua idade"
              onChangeText={onChangeText}
            />

            <Form.ActionsContainer>
              <Form.ActionButton
                type="cancel"
                title="Cancelar"
                onPress={() => {
                  resetForm();
                  setFormValuesState(initialValues);
                }}
              />
              <Form.ActionButton
                type="cancel"
                title="Deletar tudo"
                onPress={() => {
                  resetForm();
                  setFormValuesState(initialValues);
                }}
              />
              <Form.ActionButton title="Enviar" onPress={handleSubmit} />
            </Form.ActionsContainer>
          </Form.Container>
        )}
      </FormRoot>

      <Text>Valores digitados: {JSON.stringify(formValuesState, null, 2)}</Text>
    </View>
  );
}

const initialValues = { name: "", age: "" };

const validationSchema = Yup.object().shape({
  name: requiredString,
  age: ageValidation,
});
