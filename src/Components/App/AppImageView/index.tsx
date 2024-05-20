import React from 'react';
import { ImageResizeMode, NativeSyntheticEvent, StyleSheet, ImageLoadEventData, Image } from 'react-native';
import { ImageSourcePropType } from 'react-native';
// import { React$Node } from '../../TypesAndInterfaces/AppTypes';

interface CompProps {
  // children: any

  // contentInsetAdjustmentBehavior?: string;
  style?: any | undefined;
  ref?: any | undefined;
  key?: string | undefined;
  
  height?: number | undefined;
  width?: number | undefined;
  borderRadius?: number | undefined;
  resizeMode?: ImageResizeMode | undefined;
  resizeMethod?: 'auto' | 'resize' | 'scale' | undefined;
  blurRadius?: number | undefined;
  onLoad?:
  | ((event: NativeSyntheticEvent<ImageLoadEventData>) => void)
  | undefined;
  onLoadEnd?: (() => void) | undefined;
  onLoadStart?: (() => void) | undefined;
  source: ImageSourcePropType;
}

// export const Index :  FC<CompProps> = props =>{
export const AppImageView = (props: CompProps) :JSX.Element=> {

  return (
    <Image
      onLoadEnd={props?.onLoadEnd}
      onLoadStart={props?.onLoadStart}
      onLoad={props.onLoad}
      blurRadius={props?.blurRadius}
      resizeMethod={props?.resizeMethod}
      resizeMode={props?.resizeMode}
      borderRadius={props?.borderRadius}
      // ={props.uri}
      source={props?.source}
      key={props.key}
      ref={props.ref}
      style={props.style}
    />


  )

}

AppImageView.defaultProps = {
  source:undefined
}

