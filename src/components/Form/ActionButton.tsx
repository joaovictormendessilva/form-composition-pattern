import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";

type ActionButtonProps = TouchableOpacityProps & {
  type?: "cancel" | "submit";
  title: string;
};

export function ActionButton({
  type = "submit",
  title,
  ...props
}: ActionButtonProps) {
  const isSubmitButton = type === "submit";

  const buttonBgColor = isSubmitButton
    ? styles.submitButton
    : styles.cancelButton;

  const textColor = isSubmitButton ? styles.submitText : styles.cancelTextColor;

  return (
    <TouchableOpacity {...props} style={buttonBgColor}>
      <Text style={textColor}>{title}</Text>
    </TouchableOpacity>
  );
}

const baseButtonStyle = {
  padding: 10,
  borderRadius: 4,
  minWidth: 76,
  alignItems: "center" as "center",
};
const baseTextStyle = {
  fontWeight: "bold" as "bold",
};

const styles = StyleSheet.create({
  submitButton: {
    ...baseButtonStyle,
    backgroundColor: "#2196F3",
  },
  cancelButton: {
    ...baseButtonStyle,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  submitText: {
    ...baseTextStyle,
    color: "white",
  },
  cancelTextColor: {
    ...baseTextStyle,
    color: "#636363",
  },
});
