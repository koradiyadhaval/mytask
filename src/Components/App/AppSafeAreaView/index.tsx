import React from 'react';
import {
 
  SafeAreaView,
 
  AccessibilityActionInfo,
} from 'react-native';
 
 
import {React$Node} from '../../TypesAndInterfaces/AppTypes';
 
interface CompProps {
 
  children: React$Node | React$Node[];
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
      style={props?.style}>
      {props?.children}
    </SafeAreaView>
  );
};

AppSafeAreaView.defaultProps = {};
