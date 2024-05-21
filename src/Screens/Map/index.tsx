import React, { useCallback, useEffect } from "react";
// import {View} from 'react-native';
import { AppView } from "../../Components/App/AppView";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {} from "../../store/slice/Application";
// import { InterfaceHome } from "../../Interface/Response/Home/InterfaceHome";
import { FlatList } from "react-native";
import { HomeCellView } from "../../Components/Custom/CellView/HomeCellview";
import { GetStyles } from "./style";
import { FlatlistLoadmoreview } from "../../Components/Custom/FlatlistLoadmoreview";
import { AppSafeAreaView } from "../../Components/App/AppSafeAreaView";
import { AppScrollView } from "../../Components/App/AppScrollView";
import MapView from "react-native-maps";
import { InterfaceMapMarker } from "../../Interface/Response/Home/InterfaceMapMarker";

export const Map = () => {
  const Styles = GetStyles();
  const [MarketData, setMarketData] = React.useState<InterfaceMapMarker[]>([]);

  const InitalCallback = React.useCallback(() => {
    const BeanArray: InterfaceMapMarker[] = [];
    const bean: InterfaceMapMarker = {
      Title: "gir sasan safari",
      weburl: "https://girsafariticket.in/",
      dsc: "Girsafari Booking Online — Book Gir Safari online at the best price! Discover lions & birds in their natural habitat. Book Gir Jeep Safaris! Enjoy Open Jeep Tours at Best Rates. Secure Your",

      pincode: "262135",
      contactno: "08302413027",
      lat: "21.1695",
      long: "70.5988",
      images: [
        "https://lh3.googleusercontent.com/p/AF1QipMrMMd8kVhW3n_iSie3G4z-jfBMUBaRbDxNf8Uj=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipNqBmlKmmAyA7eV-hJNFF9YyBQfmbZ8SzBjGjjp=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipPuiKCaCeZ3UufxzmYz3RC4ZHXccNnG_9IjsC1Y=s680-w680-h510",
      ],
      location: "Reception Center, SH 26, main road, Sasan Gir, Gujarat 362135",
    };
  }, []);

  return (
    <AppSafeAreaView style={Styles.MainSafeAreaview}>
      <AppView style={Styles.MainView}>
        <MapView
          provider={"google"}
          showsUserLocation={true}
          showsMyLocationButton={true}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </AppView>
    </AppSafeAreaView>
  );
};
