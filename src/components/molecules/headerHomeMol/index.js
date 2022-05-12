import {StyleSheet, Image, View} from "react-native";
import React from "react";
import {IMGLogoPersegi} from "../../../assets";
import {metrics} from "../../../themes";

const HeaderHomeMol = () => (
  <View>
    <Image source={IMGLogoPersegi} style={styles.image}/>
  </View>
);

export default HeaderHomeMol;

const styles = StyleSheet.create({
  image: {
    width: metrics.screenWidth,
    height: metrics.screenWidth * 0.25,
  }
});