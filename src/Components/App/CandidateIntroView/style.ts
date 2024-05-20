import { StyleSheet } from 'react-native';
import { color_black, color_gray, color_light_gray } from '../../Util/colors';
import { FontRoboto_Black, FontRoboto_Bold,   FontRoboto_Thin } from '../../Util/fonts';

export const styles = StyleSheet.create({
  CardTemplate:
  {
    // margin: 15,

    padding: 1,
    flex: 1,
    flexDirection: 'column',
    maxHeight: 80,
    marginVertical: 12,
    paddingHorizontal: 10,

  },
  ImageViewStyle: {
    // height: 40,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
  // backgroundColor:'green',
    flexDirection: 'column',    
    flex:0.2
  },
  ImageStyle: {
    height: 65,
    width:65,  borderRadius: 50,
  
    flexDirection: 'column',
     
  }
  , Headerview: {    borderBottomWidth:0.6,
    borderBottomColor:color_light_gray,
    // backgroundColor: 'pink',
    height: "auto",
    maxHeight: 80,
    width: "100%",
    flexDirection: 'row',
    flex: 1,
  },
  InfoViewLeftStyle:{
    flex:0.8, 
    paddingHorizontal:5,
    // backgroundColor:"red",
    justifyContent:'center',


  },
    textstyleName:{
      fontSize:12,
      lineHeight:18,
      // backgroundColor:'pink',
      color:color_black,
      fontFamily:FontRoboto_Bold,
      justifyContent:'center',
      textAlignVertical:'center'

    },
    label_style:{
      color:color_gray,
      fontSize:12,  
      fontFamily:FontRoboto_Bold,paddingLeft:15,
      textAlign:'left',
      lineHeight:16,
      justifyContent:'center',
      textAlignVertical:'center'
      
    }   
    ,styleRowview:{
      flex:1,
      flexDirection:'row',
      maxHeight:25,
    },
 
})
