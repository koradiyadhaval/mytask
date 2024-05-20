import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { React$Node } from '../../TypesAndInterfaces/AppTypes';
import { color_gray, color_light_gray } from '../../Util/colors';

interface CompProps {
 
 
  style?: any;
  ref?: any;
  key?: string;
}

export const AppViewLine = (props: CompProps) => {
  return (
    <View
      key={props?.key}
      ref={props?.ref}
      style={props?.style ?[styles.CardTemplate,props.style] : styles.CardTemplate}
    >
 
    </View>
  )
}

AppViewLine.defaultProps = {
  style: null
}

const styles = StyleSheet.create({
  CardTemplate: 
  {
  height:0.6,
  backgroundColor:color_light_gray,
  }
})
