import { Dimensions, StyleSheet } from "react-native";
import { color_black, color_blue, color_blue_gray, color_code_blue_bright, color_gray, color_white } from "../../Util/Colors";
import { deviceBasedDynamicDimension } from "../../Util/ApplicationSpace";

export const GetStyles = () => {
  return StyleSheet.create({
    MainSafeAreaview: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: color_white,
    },
    MainView: {
   
      height: "100%",
      minHeight: "100%",
      width: "100%",
      flexDirection: "column",
      alignSelf: "center",
      flexGrow: 1, justifyContent: 'center'
      
    },
    AppScrollView: {    
      paddingHorizontal: "5%",    
      // paddingVertical: 10,   
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent:'center',
      flexGrow: 1,   
    },
    AppCardViewstyle: {
      width: "100%",
      height: "auto",
      minHeight: 250,      
      alignSelf:'center',
    },
    InnerAppView:{
      // flex:1,
      // backgroundColor:'red',
      height:"auto",
      width:'100%',  padding : "5%",   
    },
    LoginTextInputStyle:{
      fontSize:16,
      lineHeight:20,
      fontWeight:"500",
      borderColor:color_black,
      borderWidth:1,
      width:'100%',
      height:45,
      color:color_black,
      paddingHorizontal:15,
      borderRadius:10,
      marginTop:15,
    },
    ErrorView:{
      fontSize: 12,
      lineHeight:14,
       color: "red",
       fontWeight:"500",
      marginVertical:10,
      paddingLeft:5
    },
    screen_title:{
      fontSize:16,
      lineHeight:18,
      width:'100%',
      padding:0,
      fontWeight:"800",
      marginVertical:20,
 
      verticalAlign:'middle',
      textAlign:'center'
    },
    appTouchableView:{
      width:"100%",
      height:deviceBasedDynamicDimension({originalDimen:45}),
      justifyContent:'center',
      backgroundColor:color_code_blue_bright,
      marginVertical:20,
      
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
