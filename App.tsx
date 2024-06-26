/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as React from "react";
import { Provider } from "react-redux";
import { ApplicationWrapper } from "./src/Components/ApplicationWrapper";
import { store } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./src/store";

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ApplicationWrapper />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
