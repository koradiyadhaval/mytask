import React, { useLayoutEffect } from "react";
import { AppView } from "../../Components/App/AppView";
import { serUserEmail, serUserLogin } from "../../store/slice/Application";
import { GetStyles } from "./style";
import Icon from "react-native-vector-icons/Ionicons";
import { AppSafeAreaView } from "../../Components/App/AppSafeAreaView";
import json from "../../Util/Language/Eng/index.json";
import { AppTochableOpacity } from "../../Components/App/AppTochableOpacity";
import { TextView } from "../../Components/App/TextView";
import { useNavigation } from "@react-navigation/native";
import { Screen_MapScreen, Screen_Movies } from "../../Router/RouterConstant";
import { CommonActions } from "@react-navigation/native";
import { color_blue } from "../../Util/Colors";
import { Alert, StyleSheet } from "react-native";
import { useAppDispatch } from "../../store/hooks";
import { setData } from "../../store/slice/Movie";

export const Home = () => {
  const navigation = useNavigation();
  const Styles = GetStyles();
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const GetHeaerLogout = () => {
      return (
        <Icon
          size={22}
          onPress={() => {
            //
            Alert.alert(
              "MY Task",
              json.label_logout_confirmation,
              [
                {
                  text: json.label_close,
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: json.label_logout,
                  onPress: () => {
                    console.log("OK Pressed");
                    dispatch(serUserEmail(""));
                    dispatch(serUserLogin(false));
                    dispatch(setData([]));
                  },
                },
              ],
              { cancelable: false }
            );
          }}
          color={color_blue}
          name="log-out-outline"
        ></Icon>
      );
    };
    navigation.setOptions({
      headerRight: () => <GetHeaerLogout></GetHeaerLogout>,
    });
  }, []);

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
                name: Screen_Movies,
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
