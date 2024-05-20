import React from "react";
import { SafeAreaView, AccessibilityActionInfo } from "react-native";

interface CompProps {
  children: React.JSX.Element;
  contentInsetAdjustmentBehavior?: string;
  style?: any;
  ref?: any;
  key?: string;
  accessibilityActions?: ReadonlyArray<AccessibilityActionInfo>;
}

export const AppSafeAreaView = (props: CompProps) => {
  return (
    <SafeAreaView
      accessibilityActions={props?.accessibilityActions}
      key={props?.key}
      ref={props?.ref}
      style={props?.style}
    >
      {props?.children}
    </SafeAreaView>
  );
};

AppSafeAreaView.defaultProps = {};
