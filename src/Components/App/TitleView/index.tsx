import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { React$Node } from '../../TypesAndInterfaces/AppTypes';
import { color_gray, color_light_gray } from '../../Util/colors';
import { TextView } from '../TextView';
import { FontRoboto_Medium } from '../../Util/fonts';

interface CompProps {


  style?: any;
  ref?: any;
  text?: string;
  key?: string;
}

export const TitleView = (props: CompProps) => {
  return (
    <View
      key={props?.key}
      ref={props?.ref}
      style={props?.style ? [styles.CardTemplate, props.style] : styles.CardTemplate}
    >

      <TextView style={styles.TextStyle}>
        {props.text}
      </TextView>
    </View>
  )
}

TitleView.defaultProps = {
  style: null
}

const styles = StyleSheet.create({
  CardTemplate:
  {
    minHeight: 30,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: color_light_gray,
    marginVertical:15,
  },
  TextStyle: {
    lineHeight: 16,
    fontFamily: FontRoboto_Medium,
    fontSize: 14,
    textAlign: 'center',
    color: 'black',

  }
})
