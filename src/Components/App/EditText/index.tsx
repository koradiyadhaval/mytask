import React from 'react';
import {
  ColorValue,
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
} from 'react-native';
import {React$Node} from '../../TypesAndInterfaces/AppTypes';

interface CompProps {
  children: React$Node | React$Node[] | string;
  contentInsetAdjustmentBehavior?: string;
  style?: any;
  ref?: any;
  key?: string;
  accessibilityActions?: ReadonlyArray<AccessibilityActionInfo>;
  disabled?: boolean;
  // adjustsFontSizeToFit?: boolean | undefined;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  onPress?: () => void;
  onPressOut?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  lineBreakMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  id: string | undefined;
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
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  autoCorrect?: boolean | undefined;
  onKeyPress?:
    | ((e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void)
    | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  keyboardAppearance?: 'default' | 'light' | 'dark' | undefined;
  returnKeyLabel?: string | undefined;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  maxLength?: number | undefined;
  clearButtonMode?:
    | 'never'
    | 'while-editing'
    | 'unless-editing'
    | 'always'
    | undefined;
  collapsable?: boolean | undefined;
  cursorColor?: string | undefined;
  textContentType?:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode'
    | undefined;
  textAlign?: 'left' | 'center' | 'right' | undefined;
  secureTextEntry?: boolean | undefined;
  selection?: {start: number; end?: number | undefined} | undefined;
  clearTextOnFocus?: boolean | undefined;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
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
  multiline?: boolean | undefined;
  editable?: boolean | undefined;
}

export const EditText = (props: CompProps) => {
  return (
    <TextInput
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
      ref={props?.ref}
      onPressOut={props?.onPressOut}
      onLayout={props?.onLayout}
      defaultValue={props?.defaultValue}
      id={props?.id}
      allowFontScaling={props?.allowFontScaling}
      numberOfLines={props?.numberOfLines}
      selectionColor={props?.selectionColor}
      accessibilityIgnoresInvertColors={props?.accessibilityIgnoresInvertColors}
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
      style={props?.style}>
      {props?.children}
    </TextInput>
  );
};

EditText.defaultProps = {
  children: '',
  style: {},
  ellipsizeMode: 'head',
  onLayout: () => {},
  onLongPress: () => {},
  onPressIn: () => {},
  lineBreakMode: undefined,
  id: undefined,
  allowFontScaling: true,
  numberOfLines: undefined,
  selectionColor: '#000000',
  cursorColor: '#000000',
  disableFullscreenUI: false,
};
