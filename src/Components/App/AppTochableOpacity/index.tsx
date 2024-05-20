import React from 'react';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';
import { React$Node } from '../../TypesAndInterfaces/AppTypes';

interface CompProps {
  // children: any
  children?: React$Node | React$Node[];
  contentInsetAdjustmentBehavior?: string;
  style?: any;
  ref?: any;
  key?: string;
  disabled?: boolean | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onPressIn?: ((event: GestureResponderEvent) => void) | undefined;

  onPressOut?: ((event: GestureResponderEvent) => void) | undefined;
}

// export const Index :  FC<CompProps> = props =>{
export const AppTochableOpacity = (props: CompProps) => {

  return (
    <TouchableOpacity
      key={props?.key}
      ref={props?.ref}
      style={props?.style}
      disabled={props?.disabled}
      onPressOut={props?.onPressOut}
      onPressIn={props?.onPressIn}
      onPress={props?.onPress}>
      {props?.children}
    </TouchableOpacity>

  )

}

AppTochableOpacity.defaultProps = {

}

