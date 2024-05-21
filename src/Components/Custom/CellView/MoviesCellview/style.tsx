import { StyleSheet } from "react-native";
import { color_gray } from "../../../../Util/Colors";

export const GetStyle = () => {
  return StyleSheet.create({
    MainCellView: {
      width: "100%",
      height: "auto",
    },
    cardViewStyle: {
      minHeight: 60,

      height: "auto",

      padding: 10,

      marginVertical: 10,

      marginHorizontal: 15,
      flexDirection: "column",
      flex: 1,
    },
    InnerCardmainView: {
      flexDirection: "row",
      flex: 1,
      justifyContent: "center",
      // minHeight: 100,
      width: "100%",
    },
    InnerImageview: {
      flex: 0.3,
    },
    InnerDetailsview: {
      flex: 0.7,
    },
    AppCellviewStyle: {
      flexDirection: "row",
      marginTop: 10,
      flex: 1,
      maxHeight: "auto",
      height: "auto",
      minHeight: 30,
      width: "100%",
    },
    keyNameSTyle: {
      padding: 0,
      fontSize: 14,
      flex: 0.25,
      color: color_gray,
      fontWeight: 500,
      lineHeight: 18,
      justifyContent: "flex-start",
      textAlign: "left",
      paddingLeft: 10,
      textAlignVertical: "center",
      // backgroundColor: 'pink',
    },
    keyValuestyle: {
      fontSize: 14,
      flex: 0.75,
      color: "black",
      fontWeight: 500,
      lineHeight: 18,
      justifyContent: "center",
      textAlign: "left",
      textAlignVertical: "center",
    },
    RatingParentview: {
      flex: 0.75,
      maxHeight: 35,
      height: 35,
      justifyContent: "center",
      textAlignVertical: "center",
      paddingVertical: 15,
      paddingHorizontal: 15,
    },
  });
};
