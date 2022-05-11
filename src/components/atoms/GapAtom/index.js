import {StyleSheet, View} from "react-native";
import React from "react";
import {size} from "../../../themes";

const GapAtom = ({width, height}) => (
  <View style={styles.container(width, height)}/>
);

export default GapAtom;

const styles = StyleSheet.create({
  container: (width, height) => ({
    width: width ? width : size.small,
    height: height ? height : size.small
  })
});