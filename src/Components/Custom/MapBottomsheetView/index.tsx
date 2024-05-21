import { InterfaceMapMarker } from "../../../Interface/Response/Home/InterfaceMapMarker";
import { AppScrollView } from "../../App/AppScrollView";
import { AppTochableOpacity } from "../../App/AppTochableOpacity";
import { AppView } from "../../App/AppView";
import { TextView } from "../../App/TextView";
import FastImage from "react-native-fast-image";
import { FlatList } from "react-native";

import { getSheet } from "./styles";
import json from "../../../Util/Language/Eng/index.json";
interface MapBottomsheetViewParams {
  Data: InterfaceMapMarker;
  onClose?: () => void;
}
export const MapBottomsheetView = ({
  Data,
  onClose,
}: MapBottomsheetViewParams) => {
  const styles = getSheet();

  const YourImage = ({ image }: { image: string }) => (
    <FastImage
      style={{ width: 200, height: 200 }}
      source={{
        uri: image,
        // headers: { Authorization: "someAuthToken" },
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );

  return (
    <AppView style={styles.MainView}>
      <AppScrollView style={styles.Appscrollview}>
        <AppView style={styles.InnerChildview}>
          <TextView style={styles.textcaptionStyle}>{Data?.Title}</TextView>

          {Data?.dsc && (
            <AppView style={styles.lineviewstyle}>
              <TextView style={styles.textdsc}>{Data?.dsc}</TextView>
            </AppView>
          )}
          {Data?.images?.length > 0 && (
            <AppView style={styles.lineviewstyle}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                data={Data?.images}
                //   numColumns={2}
                keyExtractor={(item, index) => index?.toString()}
                renderItem={({ index, item }) => <YourImage image={item} />}
              />
            </AppView>
          )}

          {Data?.location && (
            <AppView style={styles.lineviewstyle}>
              <TextView style={styles.textdsc}>{Data?.location}</TextView>
            </AppView>
          )}

          {Data?.weburl && (
            <AppView style={styles.lineviewstyle}>
              <TextView style={styles.textdsc}>{Data?.weburl}</TextView>
            </AppView>
          )}

          {Data?.contactno && (
            <AppView style={styles.lineviewstyle}>
              <TextView style={styles.textdsc}>{Data?.contactno}</TextView>
            </AppView>
          )}

          <AppTochableOpacity
            onPress={onClose}
            style={styles.apptouchableopacity}
          >
            <TextView style={styles.textcloseOpacity}>
              {json.label_close}
            </TextView>
          </AppTochableOpacity>
        </AppView>
      </AppScrollView>
    </AppView>
  );
};
