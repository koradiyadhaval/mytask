import React, { useCallback, useEffect } from "react";
// import {View} from 'react-native';
import { AppView } from "../../Components/App/AppView";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {} from "../../store/slice/Application";
import { InterfaceHome } from "../../Interface/Response/Home/InterfaceHome";
import { FlatList } from "react-native";
import { HomeCellView } from "../../Components/Custom/CellView/HomeCellview";
import { GetStyles } from "./style";
import { FlatlistLoadmoreview } from "../../Components/Custom/FlatlistLoadmoreview";
import { AppSafeAreaView } from "../../Components/App/AppSafeAreaView";
import { AppScrollView } from "../../Components/App/AppScrollView";

export const Home = () => {
  const Styles = GetStyles();

  return (
    <AppSafeAreaView style={Styles.MainSafeAreaview}>
      <AppView style={Styles.MainView}>
        <AppScrollView style={Styles.AppScrollView}></AppScrollView>
      </AppView>
    </AppSafeAreaView>
  );
};
