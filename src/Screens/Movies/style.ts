import {StyleSheet} from 'react-native';
import {color_white} from '../../Util/Colors';

export const GetStyles = () => {
  return StyleSheet.create({
    MainView: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: color_white,
    },
    FlatListStyle: {
      width: '100%',
      backgroundColor: 'white',
    },
  });
};
