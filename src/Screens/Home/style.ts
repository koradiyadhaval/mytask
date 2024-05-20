import {StyleSheet} from 'react-native';
import {color_white} from '../../Util/Colors';

export const GetStyles = () => {
  return StyleSheet.create({
    MainSafeAreaview: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: color_white,
    },
    MainView: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: color_white,
    },
    AppScrollView: {
      width: '100%',
      paddingHorizontal:5,
      paddingVertical:10,
      backgroundColor: 'black',
    },
  });
};
