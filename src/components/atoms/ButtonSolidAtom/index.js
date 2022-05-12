import React from "react";
import {StyleSheet, Text, View, Button as Btn} from "react-native";

const ButtonSolidAtom = ({title, onPress, color}) => <Btn title={title} onPress={onPress} color={color} />;

export default ButtonSolidAtom;

const styles = StyleSheet.create({});
