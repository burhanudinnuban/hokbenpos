import {StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import TextAtom from "../../atoms/TextAtom";
import {colors, metrics, size} from "../../../themes";
import {ButtonBorderAtom, ButtonSolidAtom, GapAtom} from "../../atoms";
import {translator} from "../../../i18n/i18n";
import CheckBox from "@react-native-community/checkbox";
import {money} from "../../../utils/format";
import moment from "moment";


const ListCartMol = ({cart, onPressMin, onPressPlus, onPressPay}) =>  {
  const {t} = translator;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleTunai, setToggleTunai] = useState(false);
  const [toggleFlazz, setToggleFlazz] = useState(false);
  const [toggleEDCMandiri, setToggleEDCMandiri] = useState(false);
  let total = 0;
  cart.map((item) => total = total + (toggleCheckBox ? (item.price + 1000) * item.qty : item.price * item.qty));

  const totalCart = {
    id: moment().format("YYYYMMDDHHmmss"),
    total: total,
    cart: cart,
    createdAt: moment().format("LLLL"),
    jenisLayanan: toggleCheckBox ? t("take_away") : t("dine_in"),
    jenisPembayaran: toggleTunai ? "tunai" : toggleFlazz ? "Flazz BCA" : "EDC Mandiri",
  };
  
  return (
    <View style={styles.container}>
      { cart.map((item, index) => (
        <>
          <View key={item.id} style={styles.containerList}>
            <TextAtom label={item.name} width={metrics.screenWidth * 0.4}/>
            <View style={[styles.containerList]}>
              <ButtonBorderAtom title={"-"} onPress={() => onPressMin(item)}/>
              <GapAtom width={size.small}/>
              <View style={[styles.quantity]}>
                <ButtonBorderAtom title={item.qty} color={colors.ratingColor}/>
              </View>
              <GapAtom width={size.small}/>
              <ButtonBorderAtom title={"+"} onPress={() => onPressPlus(item)}/>
            </View>
            <GapAtom width={size.small}/>
            <View style={styles.price}>
              <TextAtom label={`Rp ${money.format(toggleCheckBox ? (item.price + 1000) * item.qty : item.price * item.qty) }`} width={metrics.screenWidth * 0.3} weight={"bold"}/>
            </View>
          </View>
          <GapAtom height={size.small}/>
        </>
      ))}
      <GapAtom height={size.medium}/>
      <View style={[styles.total, styles.spacebetween]} />
      <View>
        <View style={[styles.containerList]}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <GapAtom width={size.medium}/>
          <TextAtom label={t("take_away", 2)}/>
          <GapAtom width={size.xlarge}/>
        </View>
        <View style={[styles.containerList]}>
          <CheckBox
            disabled={false}
            value={toggleTunai}
            onValueChange={(newValue) => {
              setToggleTunai(newValue);
              setToggleFlazz(false);
              setToggleEDCMandiri(false);
            }}
          />
          <GapAtom width={size.medium}/>
          <TextAtom label={"Tunai"}/>
          <GapAtom width={size.xlarge}/>
        </View>
        <View style={[styles.containerList]}>
          <CheckBox
            disabled={false}
            value={toggleFlazz}
            onValueChange={(newValue) => {
              setToggleTunai(false);
              setToggleFlazz(newValue);
              setToggleEDCMandiri(false); 
            }}
          />
          <GapAtom width={size.medium}/>
          <TextAtom label={"Flazz BCA"}/>
          <GapAtom width={size.xlarge}/>
        </View>
        <View style={[styles.containerList]}>
          <CheckBox
            disabled={false}
            value={toggleEDCMandiri}
            onValueChange={(newValue) => {
              setToggleTunai(false);
              setToggleFlazz(false);
              setToggleEDCMandiri(newValue); 
            }}
          />
          <GapAtom width={size.medium}/>
          <TextAtom label={"EDC Mandiri"}/>
          <GapAtom width={size.xlarge}/>
        </View>
        <TextAtom label={`Total Rp ${money.format(total)}`} color={colors.ratingColor} weight={"bold"}/>
      </View>
      
      <ButtonSolidAtom title={`${t("pay")}`} onPress={() => onPressPay(totalCart)}/>
    </View>

  ); 
};

export default ListCartMol;

const styles = StyleSheet.create({
  containerList: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    width: metrics.screenWidth * 0.1
  },
  price: {
    width: metrics.screenWidth * 0.4,
    alignItems: "flex-end"
  },
  total: {
    marginRight: size.xlarge,
    flexDirection: "row"
  },
  container: {
    padding: size.medium
  },
  spacebetween: {
    justifyContent: "space-between"
  }
});