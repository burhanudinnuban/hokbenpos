import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button as Btn,
  TouchableOpacity,
} from "react-native";
import {colors, size} from "../../../themes";

const ButtonBorderAtom = ({title, onPress, color, borderColor}) => (
  <TouchableOpacity onPress={onPress} style={styles.container(borderColor)}>
    <Text style={styles.text(color)}>{title}</Text>
  </TouchableOpacity>
);

export default ButtonBorderAtom;

const styles = StyleSheet.create({
  text: (color) => ({
    fontSize: 16,
    color: color ? color : colors.primary,
    textAlign: "center"
  }),
  container: (color) => ({
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: size.medium,
    paddingVertical: size.small,
    borderColor: color ? color : colors.primary,
  }),
});
