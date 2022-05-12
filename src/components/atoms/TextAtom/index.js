import {StyleSheet, Text} from "react-native";
import React from "react";
import {family, fontSize as fs} from "../../../themes/fonts";
import {colors} from "../../../themes";

const TextAtom = ({label, color, weight, fontSize, width}) => (
  <Text style={styles.text(color, weight, fontSize, width)} >{label}</Text>
);

export default TextAtom;

const styles = StyleSheet.create({
  text: (color, weight, fontSize, width) => ({
    fontSize: fontSize ? fontSize : fs.font12,
    color: color ? color : colors.black,
    fontFamily: weight === "bold" ? family.bold : weight === "medium" ? family.medium : family.regular,
    width: width ? width : null
  }),
});