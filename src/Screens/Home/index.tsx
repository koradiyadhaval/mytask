import React, { useCallback, useEffect } from "react";
// import {View} from 'react-native';
import { AppView } from "../../Components/App/AppView";
import {} from "../../store/slice/Application";

import { GetStyles } from "./style";

import { AppSafeAreaView } from "../../Components/App/AppSafeAreaView";
import json from "../../Util/Language/Eng/index.json";
import { AppTochableOpacity } from "../../Components/App/AppTochableOpacity";
import { TextView } from "../../Components/App/TextView";
import { useNavigation } from "@react-navigation/native";
import { Screen_MapScreen } from "../../Router/RouterConstant";
import { CommonActions } from "@react-navigation/native";

export const Home = () => {
  const navigation = useNavigation();
  const Styles = GetStyles();

  return (
    <AppSafeAreaView style={Styles.MainSafeAreaview}>
      <AppView style={Styles.MainView}>
        <AppTochableOpacity
          onPress={() => {
            //
            // navigation.navigate(Screen_MapScreen);
            navigation.dispatch(
              CommonActions.navigate({
                name: Screen_MapScreen,
              })
            );
          }}
          style={Styles.appTouchableView}
        >
          <TextView style={Styles.textButton}>{json.label_load_map}</TextView>
        </AppTochableOpacity>

        <AppTochableOpacity
          onPress={() => {
            //
            // navigation.navigate(Screen_MapScreen);
            navigation.dispatch(
              CommonActions.navigate({
                name: Screen_MapScreen,
              })
            );
          }}
          style={Styles.appTouchableView}
        >
          <TextView style={Styles.textButton}>{json.label_load_Movie}</TextView>
        </AppTochableOpacity>
      </AppView>
    </AppSafeAreaView>
  );
};
