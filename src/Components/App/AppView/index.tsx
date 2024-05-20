import React from "react";
import { View } from "react-native";

interface CompProps {
  // children: any
  children?: React.JSX.Element | React.ReactNode;
  contentInsetAdjustmentBehavior?: string;
  style?: any;
  ref?: any;
  key?: string;
}

// export const Index :  FC<CompProps> = props =>{
export const AppView = (props: CompProps) => {
  return (
    <View key={props?.key} ref={props?.ref} style={props?.style}>
      {props.children}
    </View>
  );
};

// AppView.defaultProps = {};
