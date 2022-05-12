import "react-native-gesture-handler";
import React from "react";
import "./i18n/i18n";
import MainNavigation from "./navigation";
import {persistor, store} from "./redux/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

const App   = () => <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <MainNavigation />
  </PersistGate>
</Provider>;

export default App;
