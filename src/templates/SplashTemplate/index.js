import React from "react";
import {SplashOrg} from "../../components";

const SplashTemplate = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace("Main");
    }, 1000);
  }, []);

  return (
    <SplashOrg />
  );
};

export default SplashTemplate;
