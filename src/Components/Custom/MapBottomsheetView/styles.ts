import { StyleSheet } from "react-native";
import { deviceBasedDynamicDimension } from "../../../Util/ApplicationSpace";
import {
  color_black,
  color_blue,
  color_gray,
  color_white,
} from "../../../Util/Colors";

export const getSheet = () => {
  return StyleSheet.create({
    MainView: {
      backgroundColor: "black",
      height: "100%",
      width: "100%",
      //   flexGrow: 1,
      //   flex:1,
      flexDirection: "column",
    },
    Appscrollview: {
      backgroundColor: color_white,
      height: "100%",
      width: "100%",
      //   flexGrow: 1,
      flexDirection: "column",
    },
    InnerChildview: {
      // backgroundColor: "gray",
      height: "100%",
      // minHeight:200,
      width: "100%",
      flexGrow: 1,
      flexDirection: "column",
      paddingHorizontal: deviceBasedDynamicDimension({ originalDimen: 20 }),
      paddingVertical: deviceBasedDynamicDimension({ originalDimen: 10 }),
    },
    textcaptionStyle: {
      color: color_black,
      fontWeight: "600",
      justifyContent: "center",
      textAlignVertical: "center",
      padding: 0,
      fontSize: deviceBasedDynamicDimension({ originalDimen: 18 }),
      lineHeight: deviceBasedDynamicDimension({ originalDimen: 20 }),
    },
    textdsc: {
      color: color_black,
      fontWeight: "500",
      justifyContent: "center",
      textAlignVertical: "center",
      padding: 0,
      fontSize: deviceBasedDynamicDimension({ originalDimen: 14 }),
      lineHeight: deviceBasedDynamicDimension({ originalDimen: 16 }),
    },
    textlocation: {
      color: color_black,
      fontWeight: "600",
      justifyContent: "center",
      textAlignVertical: "center",
      padding: 0,
      fontSize: deviceBasedDynamicDimension({ originalDimen: 18 }),
      lineHeight: deviceBasedDynamicDimension({ originalDimen: 20 }),
    },
    lineviewstyle: {
      width: "100%",
      height: "auto",
      marginVertical: deviceBasedDynamicDimension({ originalDimen: 5 }),
      borderBottomColor: color_gray,
      paddingBottom: deviceBasedDynamicDimension({ originalDimen: 15 }),
      paddingTop: deviceBasedDynamicDimension({ originalDimen: 15 }),
      borderBottomWidth: deviceBasedDynamicDimension({ originalDimen: 0.5 }),
    },
    apptouchableopacity: {
      alignSelf: "center",
      backgroundColor: color_blue,
      borderRadius: deviceBasedDynamicDimension({ originalDimen: 30 }),
      justifyContent: "center",
      marginVertical: deviceBasedDynamicDimension({ originalDimen: 30 }),
      width: deviceBasedDynamicDimension({ originalDimen: 200 }),
      height: deviceBasedDynamicDimension({ originalDimen: 40 }),
    },
    textcloseOpacity: {
        fontWeight:"600",
      fontSize: deviceBasedDynamicDimension({ originalDimen: 16 }),
      lineHeight: deviceBasedDynamicDimension({ originalDimen: 18 }),
      color: color_white,
      alignSelf: "center",
    },
  });
};
