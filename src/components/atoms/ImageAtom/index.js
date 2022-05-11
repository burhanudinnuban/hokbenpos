import {StyleSheet, Text, View, Image} from "react-native";
import React from "react";
import {size} from "../../../themes";

const ImageAtom = ({source, width, height, borderRadius}) => (
  <Image source={source} style={styles.image(width, height, borderRadius)}/>
);

export default ImageAtom;

const styles = StyleSheet.create({
  image: (width, height, borderRadius) => ({
    width: width ? width : size.large,
    height: height ? height : size.large,
    borderRadius: borderRadius ? borderRadius : 0
  })
});