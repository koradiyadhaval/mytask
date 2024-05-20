import React, { useCallback, useEffect } from "react";
// import {View} from 'react-native';
import { AppView } from "../../Components/App/AppView";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setData,
  setLoader,
  setLoadingMore,
  setMergeData,
  setNextDataFound,
  setPagenumber,
} from "../../store/slice/Application";
import { InterfaceHome } from "../../Interface/Response/Home/InterfaceHome";
import { FlatList } from "react-native";
import { HomeCellView } from "../../Components/Custom/CellView/HomeCellview";
import { GetStyles } from "./style";
import { FlatlistLoadmoreview } from "../../Components/Custom/FlatlistLoadmoreview";
import { AppSafeAreaView } from "../../Components/App/AppSafeAreaView";

const renderItemView = ({
  id,
  userId,
  title,
  body,
  index,
  OnCallBack,
}: {
  id?: number | string;
  userId: string | number;
  body?: string;
  title?: string;
  index: number;
  OnCallBack: ({ eventName, Info }: { eventName: string; Info: any }) => void;
}): React.ReactElement => {
  return (
    <HomeCellView
      index={index}
      OnCallBack={OnCallBack}
      title={title}
      body={body}
      id={id}
      userId={userId}
    />
  );
};

export const Login = () => {
  const Styles = GetStyles();

  const dispatch = useAppDispatch();
  const Data = useAppSelector((state) => state.Home.Data);
  const isLoadingMore = useAppSelector((state) => state.Home.isLoadingMore);
  const isNextDataFound = useAppSelector((state) => state.Home.isNextDataFound);

  return (
    <AppSafeAreaView style={Styles.MainView}>
      <AppView></AppView>
    </AppSafeAreaView>
  );
};
