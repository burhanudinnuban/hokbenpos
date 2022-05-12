import {StyleSheet, Text, View} from "react-native";
import React from "react";
import TextAtom from "../../atoms/TextAtom";
import ListCartMol from "../ListCartMol";
import {colors, metrics, size} from "../../../themes";
import {translator} from "../../../i18n/i18n";
import {fontSize} from "../../../themes/fonts";
import {GapAtom} from "../../atoms";

const BottomSheetCartMol = ({cart, onPressMin, onPressPlus, onPressPay}) => {
  const {t} = translator;
  return (
    <View style={styles.container}>
      <GapAtom height={size.medium} width={metrics.screenWidth}/>
      <View style={styles.text}>
        <TextAtom label={t("cart", 3)} weight={"bold"} fontSize={fontSize.font14}/>
      </View>
      {cart.length > 0 && <ListCartMol cart={cart} onPressMin={onPressMin} onPressPlus={onPressPlus} onPressPay={onPressPay}/>
      }
    </View>
  ); 
};

export default BottomSheetCartMol;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    marginTop: size.large
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: metrics.screenWidth
  }
});

