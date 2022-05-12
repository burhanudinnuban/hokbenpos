import React, {Fragment} from "react";
import {SplashOrg} from "../../components";

const SplashTemplate = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace("Main");
    }, 1000);
  }, []);

  return (
    <Fragment>
      <SplashOrg />
    </Fragment>
  );
};

export default SplashTemplate;
