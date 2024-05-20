import React from "react";
import { View, StyleSheet } from "react-native";

interface CompProps {
  // children: any
  children?: React.JSX.Element;
  contentInsetAdjustmentBehavior?: string;
  style?: any;
  ref?: any;
  key?: string;
}

export const AppCardView = (props: CompProps) => {
  return (
    <View
      // key={props?.key}
      ref={props?.ref}
      style={
        props?.style ? [styles.CardTemplate, props.style] : styles.CardTemplate
      }
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  CardTemplate: {
    padding: 1,

    borderColor: "#C8C8C8",
    borderWidth: 1,

    backgroundColor: "white",
    borderRadius: 10,

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 6,

    justifyContent: "center",
    alignItems: "center",
  },
});
