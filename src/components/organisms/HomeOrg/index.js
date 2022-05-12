import {StyleSheet, ScrollView,} from "react-native";
import React from "react";
import {BottomSheetCartMol, HeaderHomeMol, ListMenuMol} from "../../molecules";
import {GapAtom} from "../../atoms";
import {size} from "../../../themes";

const HomeOrg = ({menus, onPressAdd, cart, onPressMin, onPressPlus, onPressPay}) => (
  <ScrollView style={styles.container}>
    <HeaderHomeMol />
    <GapAtom height={size.medium}/>
    <ListMenuMol menus={menus} onPressAdd={onPressAdd} />
    <BottomSheetCartMol cart={cart} onPressMin={onPressMin} onPressPlus={onPressPlus} onPressPay={onPressPay}/>
  </ScrollView>
);

export default HomeOrg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }
});