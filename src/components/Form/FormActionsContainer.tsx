import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type FormActionsContainerProps = {
  children: ReactNode;
};

export function FormActionsContainer({ children }: FormActionsContainerProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
});
