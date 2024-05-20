import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { React$Node } from '../../TypesAndInterfaces/AppTypes';
import { color_gray, color_light_gray } from '../../Util/colors';
import { styles } from './style';
import { AppImageView } from '../AppImageView';
import { AppView } from '../AppView';
import { CandidateInterface, getCandidate } from '../../TypesAndInterfaces/CandidateInterface';
import { TextView } from '../TextView';
import english from '../../Util/string/english/index.json';
import { AppViewLine } from '../AppViewLine';
import { TitleView } from '../TitleView';
import { useNavigation } from '@react-navigation/native';
interface CompProps {
  // children: any


  ref?: any;
  key?: string;
  name?: string,
  Imageurl?: any,
  Profilename?: string,
  aboutme?: string,
  Email?: string,
  Mobile?: string,
  Address?: string,
  LinkdikUrl?: string,
}

export const CandidateDetailsView = (props: CompProps) => {


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


  const PrintShortInfoLong = ({ label, value }: { label: string, value: string }) => {

    return (
      <AppView style={[styles.styleRowview, { maxHeight: 45, height: 30 }]}>
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


  const navigation=useNavigation();
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
        style={styles.Headerview}>

        <AppView
          style={styles.InfoViewLeftStyle}>

          <TitleView text={english.label_title_contact}>

          </TitleView>
          <PrintShortInfo
            label={english.label_email}
            value={props.Email || ''}>
          </PrintShortInfo>

          <PrintShortInfo
            label={english.label_mobile}
            value={props.Mobile || ''}>
          </PrintShortInfo>

          <PrintShortInfoLong
            label={english.label_Linkdik}
            value={props.LinkdikUrl || ''}>
          </PrintShortInfoLong>


          <PrintShortInfoLong
            label={english.label_address}
            value={props.Address || ''}>
          </PrintShortInfoLong>
          <AppViewLine style={{ marginTop: 10 }}>

          </AppViewLine>

          <TitleView text={english.label_Abountme}  >

          </TitleView>

          <TextView numberOfLines={16} style={[styles.textstyleAboutme, { marginVertical: 10 }]}>
            {
              props.aboutme
            }
          </TextView>
          <TouchableOpacity onPress={()=>{
                  navigation.push("Second");
          }} style={styles.opacitystyle}>
            <TextView style={styles.opacitytextstyle}>
              {english.label_next}
            </TextView>
          </TouchableOpacity>

        </AppView>

      </AppView>

    </AppView>
  )
}

CandidateDetailsView.defaultProps = {
  style: null
}

