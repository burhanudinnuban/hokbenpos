import {View, Text} from "react-native";
import React from "react";
import {ButtonTextAtom} from "../../components";
import {colors} from "../../themes";
import {useTranslation} from "react-i18next";

const HomeTemplate = () => {
  const {t, i18n} = useTranslation();

  return (
    <View>
      <ButtonTextAtom
        title={t("id")}
        onPress={() => i18n.changeLanguage("id")}
        color={colors.gray}
      />
    </View>
  );
};

export default HomeTemplate;
