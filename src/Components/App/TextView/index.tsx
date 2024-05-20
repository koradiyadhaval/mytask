import React from 'react';
import {
  Text,
  AccessibilityActionInfo,
  LayoutChangeEvent,GestureResponderEvent
} from 'react-native';
import { React$Node } from '../../TypesAndInterfaces/AppTypes';

interface CompProps {
  children?: React$Node | React$Node[] | string
  contentInsetAdjustmentBehavior?: string;
  style?: any;
  ref?: any;
  key?: string;
  accessibilityActions?: ReadonlyArray<AccessibilityActionInfo>;
  disabled?: boolean;
  adjustsFontSizeToFit?: boolean | undefined;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  onPress?: () => void;
  onPressOut?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void
  onLongPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  lineBreakMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  id: string | undefined;
  allowFontScaling?: boolean;
  numberOfLines?: number | undefined;
  selectionColor?: string | undefined;
  accessibilityIgnoresInvertColors?: boolean | undefined;
  accessibilityViewIsModal?: boolean | undefined;
  minimumFontScale?:number | undefined;
}

export const TextView = (props: CompProps) => {
  return (
    <Text
      disabled={props?.disabled}
      adjustsFontSizeToFit={props.adjustsFontSizeToFit}
      onLongPress={props.onLongPress}
      ellipsizeMode={props.ellipsizeMode}
      accessibilityActions={props?.accessibilityActions}
      key={props?.key}
      ref={props?.ref}
      onPress={props?.onPress}
      onPressOut={props?.onPressOut}
      onLayout={props?.onLayout}
      lineBreakMode={props?.lineBreakMode}
      id={props?.id}
      allowFontScaling={props?.allowFontScaling}
      numberOfLines={props?.numberOfLines}
      selectionColor={props?.selectionColor}
      accessibilityIgnoresInvertColors={props?.accessibilityIgnoresInvertColors}
      accessibilityViewIsModal={props?.accessibilityViewIsModal}
      minimumFontScale={props?.minimumFontScale}
      onPressIn={props?.onPressIn}
      style={[props?.style]}>
      {props?.children}
    </Text>
  );
};

TextView.defaultProps = {
  disabled: true,
  children: '',
  style: {},
  adjustsFontSizeToFit: undefined,
  ellipsizeMode: 'head',
  onLayout: () => { },
  onLongPress:()=>{},
  onPressIn:()=>{},
  lineBreakMode: undefined,
  id: undefined,
  allowFontScaling: true,
  numberOfLines: undefined,
  selectionColor: '#000000'
};
