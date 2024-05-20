import { StyleSheet } from 'react-native';
import { color_black, color_blue_light, color_gray, color_light_gray } from '../../Util/colors';
import { FontRoboto_Black, FontRoboto_Bold, FontRoboto_Medium, FontRoboto_Thin } from '../../Util/fonts';

export const styles = StyleSheet.create({
  CardTemplate:
  {
    // margin: 15,

    padding: 1,
    flex: 1,
    flexDirection: 'column',
    maxHeight: 'auto',
    height: 150,


    paddingHorizontal: 10,

  },

  ImageStyle: {
    height: 65,
    width: 65, borderRadius: 50,

    flexDirection: 'column',

  }
  , Headerview: {
    borderBottomWidth: 0.6,
    borderBottomColor: color_light_gray,
    // backgroundColor: 'pink',
    // height: "auto",
    // maxHeight: "auto",
    // alignContent:'flex-start',
    // justifyContent:'flex-start',
    // alignItems:'flex-start',
    width: "100%",
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'column',
    flex: 1,
    // height: '100%'
  },
  InfoViewLeftStyle: {
    flex: 0.8,
    paddingHorizontal: 5,
    justifyContent: 'flex-start',

  },
  textstyleName: {
    fontSize: 12,
    lineHeight: 14,
    // backgroundColor:'pink',
    color: color_black,
    fontFamily: FontRoboto_Medium,
    justifyContent: 'center',
    textAlignVertical: 'center'

  },
  textstyleAboutme: {
    fontSize: 12,
    lineHeight: 14,
    // backgroundColor:'pink',
    color: color_black,
    fontFamily: FontRoboto_Medium,
    justifyContent: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 5,

    textAlign: 'left'
  },
  label_style: {
    color: color_gray,
    fontSize: 12,
    fontFamily: FontRoboto_Medium, paddingLeft: 5,
    textAlign: 'left',
    lineHeight: 14,
    justifyContent: 'center',
    textAlignVertical: 'center'

  }
  , styleRowview: {
    flex: 1,
    flexDirection: 'row',
    height: 25,
    maxHeight: 25
  },
  opacitystyle: {
    width: 100, alignSelf: 'center',
    height: 40, alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginVertical: 20, backgroundColor: color_blue_light,
    borderRadius: 30,
  }, opacitytextstyle: {
    //  flex:1,
    fontFamily: FontRoboto_Medium,
    fontSize: 16,
    lineHeight: 18, alignSelf: 'center',

    color: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  }

})
