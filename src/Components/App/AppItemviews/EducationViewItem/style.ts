import {StyleSheet} from 'react-native';
import { color_black, color_light_gray } from '../../../Util/colors';
import { FontRoboto_Bold, FontRoboto_Medium, FontRoboto_Regular } from '../../../Util/fonts';


export const Styles=StyleSheet.create({
    MainView:{
        flex:1,
        marginHorizontal:10,
        backgroundColor:color_light_gray,
        borderRadius:20,
        marginTop:10,
        marginBottom:10,
        // width:'100%',
        height:"auto",
        maxHeight:'auto',
        padding:10,
        
    },
    rowview:{
        flexDirection:'row',
        flex:1,
        maxHeight:35,
        // backgroundColor:"pink",
        marginVertical:2,
    },
    textname:{
        color:color_black,
        fontFamily:FontRoboto_Medium,
        fontSize:14,
        lineHeight:16,
        textAlign:'left',
        flex:0.4,
        alignSelf:'center'

    }
    , textvalue:{
        color:color_black,
        fontFamily:FontRoboto_Medium,
        fontSize:14,
        lineHeight:16,
        textAlign:'left',
        flex:0.6,
        paddingLeft:5
    }
})