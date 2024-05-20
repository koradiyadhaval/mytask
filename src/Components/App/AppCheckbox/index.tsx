import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  AccessibilityActionInfo,
  LayoutChangeEvent,
  GestureResponderEvent,
} from 'react-native';
import {React$Node} from '../../TypesAndInterfaces/AppTypes';
import {deviceBasedDynamicDimension} from '../../Util/ApplicationSpace';
import {color_white, login_field_text_hint_color} from '../../Util/Colors';
import {
  image_data_selected,
  image_data_unselected,
} from '../../Util/ImageAssets';
import {font_HKGrotesk_Regular} from '../../Util/Fonts';
// import { isNull } from '../../Util';

interface CompProps {
  label: string;
  contentInsetAdjustmentBehavior?: string;
  textstyle?: any;

  selecetdstyle?: any;
  unselectedstyle?: any;
  imagestyle?: any;
  parentcontainerstyle?: any;
  ref?: any;
  key?: string;
  accessibilityActions?: ReadonlyArray<AccessibilityActionInfo>;
  disabled?: boolean;
  adjustsFontSizeToFit?: boolean | undefined;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  onPress?: () => void;
  onPressOut?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  lineBreakMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  id?: string | undefined;
  allowFontScaling?: boolean;
  numberOfLines?: number | undefined;
  selectionColor?: string | undefined;
  accessibilityIgnoresInvertColors?: boolean | undefined;
  accessibilityViewIsModal?: boolean | undefined;
  minimumFontScale?: number | undefined;
  checked: boolean | undefined;
  onChange?:(status:boolean)=>void;
}

export const AppCheckbox = (props: CompProps) => {
  const [status, setstatus] = useState(props?.checked || false);

  return (
    <TouchableOpacity
      onPress={() => {
        setstatus(!status);
      }}
      style={[
        {flexDirection: 'row', width: 'auto'},
        props?.parentcontainerstyle,
      ]}>
      <View style={{flex: 1, flexDirection: 'row', width: 'auto'}}>
        {status === false && (
          <Image
          resizeMethod={'scale'}
          resizeMode={'cover'}
            style={[styles.unselectedImage, props?.unselectedstyle]}
            source={image_data_unselected}></Image>
        )}

        {status === true && (
          <Image
            resizeMethod={'scale'}
            resizeMode={'cover'}
            style={[styles.selectedImage, props?.selecetdstyle]}
            source={image_data_selected}></Image>
        )}

        <Text
          disabled={false}
          adjustsFontSizeToFit={props.adjustsFontSizeToFit}
          ellipsizeMode={props.ellipsizeMode}
          accessibilityActions={props?.accessibilityActions}
          key={props?.key}
          ref={props?.ref}
          lineBreakMode={props?.lineBreakMode}
          id={props?.id}
          allowFontScaling={props?.allowFontScaling}
          numberOfLines={props?.numberOfLines}
          selectionColor={props?.selectionColor}
          accessibilityIgnoresInvertColors={
            props?.accessibilityIgnoresInvertColors
          }
          
          accessibilityViewIsModal={props?.accessibilityViewIsModal}
          minimumFontScale={props?.minimumFontScale}
          onPressIn={props?.onPressIn}
          style={[styles.fontstyle, props?.textstyle]}>
          {props.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

AppCheckbox.defaultProps = {
  checked: false,
  disabled: false,
  label: '',
  textstyle: {},
  adjustsFontSizeToFit: undefined,
  ellipsizeMode: 'head',
  onLayout: () => {},
  onLongPress: () => {},
  onPressIn: () => {},
  lineBreakMode: undefined,
  id: undefined,
  allowFontScaling: true,
  numberOfLines: undefined,
  selectionColor: '#000000',
  parentcontainerstyle: {},
};

const styles = StyleSheet.create({
  unselectedImage: {
    height: deviceBasedDynamicDimension({originalDimen: 15}),
    width: deviceBasedDynamicDimension({originalDimen: 15}),
    tintColor: color_white,
    marginRight: deviceBasedDynamicDimension({originalDimen: 10}),
  },
  selectedImage: {
    height: deviceBasedDynamicDimension({originalDimen: 15}),
    width: deviceBasedDynamicDimension({originalDimen: 15}),
    // tintColor: login_field_text_hint_color,
    marginRight: deviceBasedDynamicDimension({originalDimen: 10}),
  },
  fontstyle: {
    color: 'black',
    fontSize: deviceBasedDynamicDimension({originalDimen: 12}),
    fontFamily: font_HKGrotesk_Regular,
    padding: 0,
    margin: 0,

    paddingHorizontal: 0,
    paddingVertical: 0,

    justifyContent: 'center',
    textAlignVertical: 'center',

    height: deviceBasedDynamicDimension({originalDimen: 18}),
    lineHeight: deviceBasedDynamicDimension({originalDimen: 18}),
    textAlign: 'center',
  },
});
