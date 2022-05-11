import {StyleSheet, View} from "react-native";
import React from "react";
import {ImageAtom} from "../../atoms";
import {IMGLogoKotak} from "../../../assets";

const SplashOrg = () => (
  <View style={styles.container}>
    <ImageAtom source={IMGLogoKotak} width={250} height={250}/>
  </View>
);

export default SplashOrg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});