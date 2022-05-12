import {View} from "react-native";
import React, {Fragment} from "react";
import {ButtonTextAtom, HomeOrg} from "../../components";
import {colors} from "../../themes";
import {translator} from "../../i18n/i18n";
import {IMGbakpaoCoklat, IMGbakpaoKeju} from "../../assets";
import {constant} from "../../constants";
import {didAddCart, didDeleteCart, didPayCart} from "../../redux/action";
import {useDispatch, useSelector} from "react-redux";
import firestore from "@react-native-firebase/firestore";

const HomeTemplate = () => {
  const dispatch = useDispatch();
  const dataCartRequest = useSelector((state) => state.cart.dataCartRequest);
  const dataCartSuccess = useSelector((state) => state.cart.dataCartSuccess);

  const {t} = translator;
  const menus = [{id: "BP-0001", name: `${t("bakpao", 1)} ${t("chocolate", 1)}`, image: IMGbakpaoCoklat, ingredients: `${t("bakpao")} 1 ${t("peaces")}, ${t("butter")} 5 gram, ${t("cocholate")} 3 gram`, qty: 1, price: 10000}, {id: "BP-0002", name: `${t("bakpao", 1)} ${t("cheese", 1)}`, image: IMGbakpaoKeju, ingredients: `${t("bakpao")} 1 ${t("peaces")}, ${t("butter")} 5 gram, ${t("cheese")} 3 gram`, qty: 1, price: 11000}];

  console.log(dataCartSuccess, "dataCartSuccess");

  const onPressAdd = (menu) => {
    if (dataCartRequest.length === 0) {
      dispatch(didAddCart(menu));
    }

    if (dataCartRequest.length > 0) {
      const index = dataCartRequest.findIndex((item) => item.id === menu.id);
      if (index === -1) {
        dispatch(didAddCart(menu));
      } else {
        let newDataCart = dataCartRequest;
        newDataCart[index].qty += 1;
        dispatch(didAddCart(newDataCart[index]));
      }
      
    }
  };

  const onPressMin = (menu) => {
    let newDataCart = dataCartRequest;
    const index = dataCartRequest.findIndex((item) => item.id === menu.id);

    newDataCart[index].qty -= 1;
    dispatch(didAddCart(newDataCart[index]));
  };

  const onPressDelete = (menu) => {};

  const onPressPay = (menu) => {
    firestore().
      collection("transactions").
      add(menu).
      then(() => {
        dispatch(didPayCart(menu));
        alert("success pay!");
      });
  };

  return (
    <Fragment>
      <HomeOrg menus={menus} onPressAdd={(menu) => onPressAdd(menu)} cart={dataCartRequest} onPressMin={onPressMin} onPressPlus={onPressAdd} onPressPay={onPressPay}/>
    </Fragment>
  );
};

export default HomeTemplate;
