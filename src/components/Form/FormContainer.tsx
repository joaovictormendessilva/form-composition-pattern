import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type FormContainerProps = {
  children: ReactNode;
};

export function FormContainer({ children }: FormContainerProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
  },
});
