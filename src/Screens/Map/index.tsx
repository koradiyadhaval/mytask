import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react";
import { request, PERMISSIONS } from "react-native-permissions";

import { AppView } from "../../Components/App/AppView";
import { View, Text } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {} from "../../store/slice/Application";
// import { InterfaceHome } from "../../Interface/Response/Home/InterfaceHome";
import { FlatList, StyleSheet } from "react-native";
// import { HomeCellView } from "../../Components/Custom/CellView/HomeCellview";
import { GetStyles } from "./style";
// import { FlatlistLoadmoreview } from "../../Components/Custom/FlatlistLoadmoreview";
import { AppSafeAreaView } from "../../Components/App/AppSafeAreaView";
// import { AppScrollView } from "../../Components/App/AppScrollView";
import MapView, { LatLng, Marker } from "react-native-maps";
import { InterfaceMapMarker } from "../../Interface/Response/Home/InterfaceMapMarker";
import { MapBottomsheetView } from "../../Components/Custom/MapBottomsheetView";

const Map = () => {
  const Styles = GetStyles();
  const [MarketData, setMarketData] = React.useState<InterfaceMapMarker[]>([]);
  const [LocationPermission, setLocationPermission] = useState<boolean>(false);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const [visiblesheet, setvisiblesheet] = useState<InterfaceMapMarker | null>(
    null
  );

  const InitalCallback = useCallback(() => {
    const BeanArray: InterfaceMapMarker[] = [];
    const bean: InterfaceMapMarker = {
      Title: "gir sasan safari",
      weburl: "https://girsafariticket.in/",
      dsc: "Girsafari Booking Online — Book Gir Safari online at the best price! Discover lions & birds in their natural habitat. Book Gir Jeep Safaris! Enjoy Open Jeep Tours at Best Rates. Secure Your",
      pincode: "262135",
      contactno: "08302413027",
      lat: 21.1695,
      long: 70.5988,
      images: [
        "https://lh3.googleusercontent.com/p/AF1QipMrMMd8kVhW3n_iSie3G4z-jfBMUBaRbDxNf8Uj=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipNqBmlKmmAyA7eV-hJNFF9YyBQfmbZ8SzBjGjjp=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipPuiKCaCeZ3UufxzmYz3RC4ZHXccNnG_9IjsC1Y=s680-w680-h510",
      ],
      location: "Reception Center, SH 26, main road, Sasan Gir, Gujarat 362135",
    };
    BeanArray.push(bean);
    setMarketData(BeanArray);
  }, []);

  useEffect(() => {
    /**
     * Set the inital data inside the use state object for first time of screen loading
     */
    InitalCallback();
    /**
     * Also set the by default visibility of bottom sheet
     *
     */
    bottomSheetRef?.current?.forceClose();
  }, [InitalCallback]);

  useEffect(() => {
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
      console.log(" result ", result);
      if (result === "granted") {
        setLocationPermission(true);
      } else {
        setLocationPermission(false);
      }
      // console.log(" settings ", settings);
    });
    bottomSheetRef?.current?.forceClose();
  }, []);

  const snapPoints = useMemo(() => ["25%", "50%", "70%", "99.5%"], []);

  return (
    <AppSafeAreaView style={Styles.MainSafeAreaview}>
      <AppView style={Styles.MainView}>
        <MapView
          onPress={() => {
            if (visiblesheet) {
              bottomSheetRef?.current?.forceClose();
              setvisiblesheet(null);
            }
          }}
          provider={"google"}
          showsUserLocation={LocationPermission == true ? true : false}
          showsMyLocationButton={LocationPermission == true ? true : false}
          style={{ flex: 1 }}
          initialRegion={
            MarketData?.length > 0
              ? {
                  latitude: MarketData[0]?.lat,
                  longitude: MarketData[0]?.long,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }
              : undefined
          }
        >
          {MarketData?.map((marker, index) => (
            <Marker
              onPress={() => {
                setvisiblesheet(marker);
                bottomSheetRef?.current?.expand();
              }}
              key={index}
              coordinate={{
                latitude: marker.lat,
                longitude: marker.long,
              }}
              title={marker?.Title || ""}
              description={marker?.dsc || ""}
            />
          ))}
        </MapView>

        {visiblesheet != null && (
          <BottomSheet
            snapPoints={snapPoints}
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
          >
            <BottomSheetView style={styles.contentContainer}>
              <MapBottomsheetView
                onClose={() => {
                  bottomSheetRef?.current?.close();
                  setvisiblesheet(null);
                }}
                Data={visiblesheet}
              ></MapBottomsheetView>
            </BottomSheetView>
          </BottomSheet>
        )}
      </AppView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default Map;
