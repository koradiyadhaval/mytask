import { InterfaceMapMarker } from "../../../Interface/Response/Home/InterfaceMapMarker";
import { AppScrollView } from "../../App/AppScrollView";
import { AppTochableOpacity } from "../../App/AppTochableOpacity";
import { AppView } from "../../App/AppView";
import { TextView } from "../../App/TextView";
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
