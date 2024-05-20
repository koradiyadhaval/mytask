import React, {Component} from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
import style from './style';
const Loader = props => {
   return (
    <Modal
      statusBarTranslucent={true}
      transparent={true}
      animationType={'none'}
      visible={
        props.visible != null && props.visible != undefined
          ? props.visible
          : false
      }
      supportedOrientations={['portrait', 'landscape']}
     
    >
      <View style={style.modalBackground}>
        <View style={style.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color="green" animating={true} />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
