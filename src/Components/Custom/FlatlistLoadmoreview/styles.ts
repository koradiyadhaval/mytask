import {StyleSheet} from 'react-native';

export const getStyle = () => {
  return StyleSheet.create({
    MainCellview: {
      width: '100%',
      height: 40,
      backgroundColor: 'white',
      justifyContent: 'center',
      flexDirection: 'row',
      marginBottom: 15,
      alignItems: 'center',
    },
    TextStyle: {
      fontSize: 16,
      color: 'black',
      marginHorizontal: 20,
      fontWeight: 600,
    },
  });
};
