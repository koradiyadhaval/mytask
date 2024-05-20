import {StyleSheet} from 'react-native';
import {color_gray} from '../../../../Util/Colors';

export const GetStyle = () => {
  return StyleSheet.create({
    MainCellView: {
      // flex: 1,
      width: '100%',
      height: 'auto',
      minHeight: 200,
      // backgroundColor: 'red',
    },
    cardViewStyle: {
      minHeight: 100,
      // flex: 1,
      height: 'auto',
      // height: 50,
      padding: 15,
      // width: '100%',
      marginVertical: 20,
      // backgroundColor: 'green',
      marginHorizontal: 15,
    },
    InnerCardmainView: {
      flexDirection: 'column',
      // flex: 1,
      // backgroundColor: 'green',
      // padding: 10,
      minHeight: 200,
      width: '100%',
    },
    AppCellviewStyle: {
      flexDirection: 'row',
      marginTop: 10,
      flex: 1,
      maxHeight: 'auto',
      height: 'auto',
      minHeight: 30,
      width: '100%',
    },
    keyNameSTyle: {
      padding: 0,
      fontSize: 14,
      flex: 0.25,
      color: color_gray,
      fontWeight: 500,
      lineHeight: 18,
      justifyContent: 'flex-start',
      textAlign: 'left',
      paddingLeft: 10,
      textAlignVertical: 'center',
      // backgroundColor: 'pink',
    },
    keyValuestyle: {
      fontSize: 14,
      flex: 0.75,
      color: 'black',
      fontWeight: 500,
      lineHeight: 18,
      // backgroundColor: 'yellow',
      justifyContent: 'center',
      textAlign: 'left',
      textAlignVertical: 'center',
    },
  });
};
