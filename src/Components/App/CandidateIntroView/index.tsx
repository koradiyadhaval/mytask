import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { React$Node } from '../../TypesAndInterfaces/AppTypes';
import { color_gray, color_light_gray } from '../../Util/colors';
import { styles } from './style';
import { AppImageView } from '../AppImageView';
import { AppView } from '../AppView';
import { CandidateInterface, getCandidate } from '../../TypesAndInterfaces/CandidateInterface';
import { TextView } from '../TextView';
import english from '../../Util/string/english/index.json';
interface CompProps {
  // children: any
  children?: React$Node | React$Node[];
  contentInsetAdjustmentBehavior?: string;
  style?: any;
  ref?: any;
  key?: string;
  name?: string,
  Imageurl?: any,
  Profilename?: string,

}

export const CandidateIntroView = (props: CompProps) => {


  const PrintShortInfo = ({ label, value }: { label: string, value: string }) => {


    return (
      <AppView style={styles.styleRowview}>
        <TextView style={[styles.label_style, { flex: 0.3 }]}>
          {
            label ? label : ''
          }
        </TextView>

        <TextView numberOfLines={2} style={[styles.textstyleName, { flex: 0.7 }]}>
          {
            value ? value : ''
          }
        </TextView>
      </AppView>
    )
  }

  return (
    <AppView
      key={props?.key}
      ref={props?.ref}
      style={styles.CardTemplate}
    >

      {/* this is parentview for Header */}

      <AppView
        key={props?.key}
        ref={props?.ref}
        style={styles.Headerview}   >
        <AppView style={styles.ImageViewStyle}>
          <AppImageView style={styles.ImageStyle}
            source={props?.Imageurl}>
          </AppImageView>
        </AppView>
        <AppView 
          style={styles.InfoViewLeftStyle}>

          <PrintShortInfo
            label='Name :-'
            value={props.name || ''}>
          </PrintShortInfo>

          <PrintShortInfo
            label={english.label_profile} 
            value={props.Profilename || ''}>
          </PrintShortInfo>

        </AppView>
      </AppView>


    </AppView>
  )
}

CandidateIntroView.defaultProps = {
  style: null
}

