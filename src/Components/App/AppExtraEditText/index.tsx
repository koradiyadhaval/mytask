import React from "react";
import { forwardRef } from "react";

import {
  ColorValue,
  StyleProp,
  ViewStyle,
  TextInputScrollEventData,
  TextInput,
  AccessibilityActionInfo,
  LayoutChangeEvent,
  GestureResponderEvent,
  TextInputKeyPressEventData,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextInputSelectionChangeEventData,
  TextInputChangeEventData,
  View,
  ImageStyle,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import { deviceBasedDynamicDimension } from "../../../Util/ApplicationSpace";
import { isNull } from "../../../Util";
import { color_white } from "../../../Util/Colors";

interface CompProps {
  IsLeftIcon?: boolean;
  IsRighIcon?: boolean;
  // RightImagePath?: string | any;

  // IsRightImageActivecolor?: string;
  // IsRightImageInActivecolor?: string;

  ParentViewStyle?: StyleProp<ViewStyle> | undefined;

  leftImageUri?: string | any | undefined;
  leftimagestyle?: StyleProp<ImageStyle> | undefined;
  // rightIconMask?:boolean;

  // children: React$Node | React$Node[] | string;
  contentInsetAdjustmentBehavior?: string;
  style?: any;
  re?: any;
  key?: string;
  accessibilityActions?: ReadonlyArray<AccessibilityActionInfo>;
  disabled?: boolean;
  // adjustsFontSizeToFit?: boolean | undefined;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip" | undefined;
  onPress?: () => void;
  onPressOut?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  lineBreakMode?: "head" | "middle" | "tail" | "clip" | undefined;
  id?: string | undefined;
  allowFontScaling?: boolean;
  numberOfLines?: number | undefined;
  selectionColor?: string | undefined;
  accessibilityIgnoresInvertColors?: boolean | undefined;
  accessibilityViewIsModal?: boolean | undefined;
  // minimumFontScale:number | undefined;
  value?: string | undefined;
  disableFullscreenUI?: boolean | undefined;
  defaultValue?: string | undefined;
  autoFocus?: boolean | undefined;
  blurOnSubmit?: boolean | undefined;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  autoCorrect?: boolean | undefined;
  onKeyPress?:
    | ((e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void)
    | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  keyboardAppearance?: "default" | "light" | "dark" | undefined;
  returnKeyLabel?: string | undefined;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  maxLength?: number | undefined;
  clearButtonMode?:
    | "never"
    | "while-editing"
    | "unless-editing"
    | "always"
    | undefined;
  collapsable?: boolean | undefined;
  cursorColor?: string | undefined;
  textContentType?:
    | "none"
    | "URL"
    | "addressCity"
    | "addressCityAndState"
    | "addressState"
    | "countryName"
    | "creditCardNumber"
    | "emailAddress"
    | "familyName"
    | "fullStreetAddress"
    | "givenName"
    | "jobTitle"
    | "location"
    | "middleName"
    | "name"
    | "namePrefix"
    | "nameSuffix"
    | "nickname"
    | "organizationName"
    | "postalCode"
    | "streetAddressLine1"
    | "streetAddressLine2"
    | "sublocality"
    | "telephoneNumber"
    | "username"
    | "password"
    | "newPassword"
    | "oneTimeCode"
    | undefined;
  textAlign?: "left" | "center" | "right" | undefined;
  secureTextEntry?: boolean | undefined;
  selection?: { start: number; end?: number | undefined } | undefined;
  clearTextOnFocus?: boolean | undefined;
  textAlignVertical?: "auto" | "top" | "bottom" | "center" | undefined;
  underlineColorAndroid?: ColorValue | undefined;
  accessibilityHint?: string | undefined;
  selectTextOnFocus?: boolean | undefined;
  placeholderTextColor?: ColorValue | undefined;
  placeholder?: string | undefined;
  onScroll?:
    | ((e: NativeSyntheticEvent<TextInputScrollEventData>) => void)
    | undefined;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
  onSelectionChange?:
    | ((e: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => void)
    | undefined;
  onChange?:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined;
  // onBlur
  multiline?: boolean | undefined;
  editable?: boolean | undefined;
}

export const AppExtraEditText = forwardRef((props: CompProps, ref: any) => {
  return (
    <View style={[styles.ParentViews, props?.ParentViewStyle]}>
      {props?.IsLeftIcon && isNull({ data: props?.leftImageUri }) === true && (
        <Image
          resizeMethod="resize"
          resizeMode="contain"
          style={[styles.leftImageStyle, props?.leftimagestyle]}
          source={props?.leftImageUri}
        ></Image>
      )}
      <TextInput
        onBlur={props?.onBlur}
        editable={props?.editable}
        multiline={props?.multiline}
        onChange={props?.onChange}
        onSelectionChange={props?.onSelectionChange}
        onSubmitEditing={props?.onSubmitEditing}
        onScroll={props?.onScroll}
        placeholder={props?.placeholder}
        selection={props?.selection}
        placeholderTextColor={props?.placeholderTextColor}
        selectTextOnFocus={props?.selectTextOnFocus}
        secureTextEntry={props?.secureTextEntry}
        onChangeText={props?.onChangeText}
        autoCapitalize={props?.autoCapitalize}
        autoCorrect={props?.autoCorrect}
        blurOnSubmit={props?.blurOnSubmit}
        autoFocus={props?.autoFocus}
        onKeyPress={props?.onKeyPress}
        keyboardType={props?.keyboardType}
        keyboardAppearance={props?.keyboardAppearance}
        returnKeyLabel={props?.returnKeyLabel}
        returnKeyType={props?.returnKeyType}
        value={props?.value}
        disableFullscreenUI={props?.disableFullscreenUI}
        accessibilityActions={props?.accessibilityActions}
        key={props?.key}
        ref={ref}
        onPressOut={props?.onPressOut}
        onLayout={props?.onLayout}
        defaultValue={props?.defaultValue}
        id={props?.id}
        allowFontScaling={props?.allowFontScaling}
        numberOfLines={props?.numberOfLines}
        selectionColor={props?.selectionColor}
        accessibilityIgnoresInvertColors={
          props?.accessibilityIgnoresInvertColors
        }
        accessibilityViewIsModal={props?.accessibilityViewIsModal}
        onPressIn={props?.onPressIn}
        maxLength={props?.maxLength}
        clearButtonMode={props?.clearButtonMode}
        collapsable={props?.collapsable}
        cursorColor={props?.cursorColor}
        textContentType={props?.textContentType}
        underlineColorAndroid={props?.underlineColorAndroid}
        textAlign={props?.textAlign}
        textAlignVertical={props?.textAlignVertical}
        clearTextOnFocus={props?.clearTextOnFocus}
        accessibilityHint={props?.accessibilityHint}
        style={[styles.editTextStyle, props?.style, { flex: 1 }]}
      >
        {/* {props?.children} */}
      </TextInput>
    </View>
  );
});

// AppExtraEditText.defaultProps = {

//   style: {},
//   // ellipsizeMode: 'head',
//   onLayout: () => { },
//   onLongPress: () => { },
//   onPressIn: () => { },
//   lineBreakMode: undefined,
//   id: undefined,
//   allowFontScaling: true,
//   numberOfLines: undefined,
//   selectionColor: '#000000',
//   cursorColor: '#000000',
//   disableFullscreenUI: false,
// };
const styles = StyleSheet.create({
  ParentViews: {
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 10,
    height: deviceBasedDynamicDimension({ originalDimen: 40 }),
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  leftImageStyle: {
    minHeight: "100%",
    height: deviceBasedDynamicDimension({ originalDimen: 14 }),
    width: deviceBasedDynamicDimension({ originalDimen: 14 }),
    marginHorizontal: deviceBasedDynamicDimension({ originalDimen: 8 }),
    alignSelf: "flex-start",
  },
  RightImageStyle: {
    minHeight: "100%",

    height: deviceBasedDynamicDimension({ originalDimen: 14 }),
    width: deviceBasedDynamicDimension({ originalDimen: 14 }),
    padding: deviceBasedDynamicDimension({ originalDimen: 2 }),
    alignSelf: "center",
  },
  editTextStyle: {
    fontSize: deviceBasedDynamicDimension({ originalDimen: 14 }),
    // width:'100%',
    flex: 0.9,
    backgroundColor: color_white,
    marginRight: deviceBasedDynamicDimension({ originalDimen: 5 }),
    height: deviceBasedDynamicDimension({ originalDimen: 25 }),
    paddingVertical: 0,
    // paddingHorizontal:0,
    margin: 0,
    //  lineHeight:deviceBasedDynamicDimension({originalDimen:25}),
  },
  TouchableOpacityRight: {
    flex: 0.1,
    backgroundColor: "red",
    height: "100%",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "flex-end",
    marginHorizontal: deviceBasedDynamicDimension({ originalDimen: 4 }),
  },
});

// export const AppExtraEditText= forwardRef();
