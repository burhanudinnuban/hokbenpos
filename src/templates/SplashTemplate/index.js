import {View, Text} from "react-native";
import React from "react";
import {SplashOrg} from "../../components";

const SplashTemplate = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 1000);
  }, []);

  return (
    <SplashOrg />
  );
};

export default SplashTemplate;
