import {ActivityIndicator} from 'react-native';
import React from 'react';
import {AppView} from '../../App/AppView';
import {getStyle} from './styles';
import {TextView} from '../../App/TextView';

export const FlatlistLoadmoreview = () => {
  const styles = getStyle();
  return (
    <AppView style={styles.MainCellview}>
      <ActivityIndicator size="small" color="#0000ff" />
      <TextView style={styles.TextStyle}>Load More</TextView>
    </AppView>
  );
};
