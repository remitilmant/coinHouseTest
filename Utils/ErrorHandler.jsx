import { Alert } from "react-native";

export function errorHandler(e) {
  Alert.alert(
    "Error",
    e.length > 0 ? ` ${e}` : "Invalid ETH adress",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );
}
