import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {SettingTemplate} from "../../templates";
import HomeTemplate from "../../templates/HomeTemplate";
import {ICHistoryPrimary, ICHistorySecondary, ICHomePrimary, ICHomeSecondary, ICSettingPrimary, ICSettingSecondary} from "../../assets";
import {colors, image, size} from "../../themes";
import {SvgXml} from "react-native-svg";

const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator 
      initialRouteName='Home'
      activeColor={colors.primary}
      inactiveColor={colors.gray}
      barStyle={{backgroundColor: colors.lightGray}}>
      <Tab.Screen name='Home' component={HomeTemplate} options={{
        tabBarIcon: ({focused}) => <SvgXml width={image.small}
          height={image.small} xml={focused ? ICHomePrimary : ICHomeSecondary} />
      }}/>
      <Tab.Screen name='History' component={SettingTemplate} options={{
        tabBarIcon: ({focused}) => <SvgXml width={image.small}
          height={image.small} xml={focused ? ICHistoryPrimary : ICHistorySecondary} />
      }}/>
      <Tab.Screen name='Settings' component={SettingTemplate} options={{
        tabBarIcon: ({focused}) => <SvgXml width={image.small}
          height={image.small} xml={focused ? ICSettingPrimary : ICSettingSecondary} />
      }}/>
    </Tab.Navigator>
  );
}
export default BottomTabs;