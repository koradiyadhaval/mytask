import React from "react";
import { ScrollView, ViewStyle, StyleProp } from "react-native";

interface CompProps {
  // children: any
  children: React.JSX.Element;
  contentInsetAdjustmentBehavior?:
    | "automatic"
    | "scrollableAxes"
    | "never"
    | "always"
    | undefined;
  style?: StyleProp<ViewStyle>;
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
}

// export const Index :  FC<CompProps> = props =>{
export const AppScrollView = (props: CompProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={props?.showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={props?.showsHorizontalScrollIndicator}
      style={props?.style}
      contentInsetAdjustmentBehavior={props?.contentInsetAdjustmentBehavior}
    >
      {props?.children}
    </ScrollView>
  );
};

AppScrollView.defaultProps = {
  children: null,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  contentInsetAdjustmentBehavior: "automatic",
};

// export default index;
