import {StyleSheet} from 'react-native';
import {color_code_blue_bright, color_white} from '../../Util/Colors';
import { deviceBasedDynamicDimension } from '../../Util/ApplicationSpace';

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
      backgroundColor: color_white,
    },

    appTouchableView:{
      
      height:deviceBasedDynamicDimension({originalDimen:45}),
      justifyContent:'center',
      backgroundColor:color_code_blue_bright,
      marginVertical:deviceBasedDynamicDimension({originalDimen:15}),
      marginHorizontal:deviceBasedDynamicDimension({originalDimen:20}),
      borderRadius:12,
    },
    textButton:{
      color:color_white,
      fontSize:18,
      lineHeight:20,
      width:'auto',
      fontWeight:"700",
      alignSelf:'center',
    }

  });
};
