import {StyleSheet, Image, View} from "react-native";
import React from "react";
import TextAtom from "../../atoms/TextAtom";
import {colors, image, metrics, size} from "../../../themes";
import {ButtonBorderAtom, ButtonSolidAtom, ButtonTextAtom, GapAtom} from "../../atoms";
import {translator} from "../../../i18n/i18n";
import {fontSize} from "../../../themes/fonts";
import {money} from "../../../utils/format";

const ListMenuMol = ({menus, onPressAdd}) => {
  const {t} = translator;

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <TextAtom label={t("menu", 3)} weight={"bold"} fontSize={fontSize.font14}/>
      </View>
      {menus.map((menu) => (
        <View style={styles.containerList} key={menu.id}>
          <Image source={menu.image} style={styles.image}/>
          <GapAtom width={size.small}/>
          <View style={styles.ingredients}>
            <TextAtom label={menu.name} weight={"bold"}/>
            <TextAtom label={t(`${"ingredients"} :`)} width={metrics.screenWidth * 0.75}/>
            <TextAtom label={menu.ingredients}/>
          </View>
          <GapAtom width={size.small}/>
          <View style={styles.money}>
            <TextAtom label={`Rp${money.format(menu.price)}`} weight={"bold"} color={colors.ratingColor}/>
            <ButtonBorderAtom title={t("add")} color={colors.ratingColor} borderColor={colors.ratingColor} onPress={() => onPressAdd(menu)}/>
          </View>
        </View>
      ))}
    </View>
  ); 
};

export default ListMenuMol;

const styles = StyleSheet.create({
  container: {
    // margin: size.medium
  },
  ingredients: {
    width: metrics.screenWidth * 0.45
  },
  money: {
    width: metrics.screenWidth * 0.2
  },
  containerTitle: {
    margin: size.medium,
    alignItems: "center"
  },
  containerList: {
    flexDirection: "row",
    margin: size.medium,
    alignItems: "center"
  },
  image: {
    width: image.large,
    height: image.large
  }
});