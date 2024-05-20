/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
// import {render} from 'react-dom';
import {Provider} from 'react-redux';
// import React from 'react';
// import type {PropsWithChildren} from 'react';
import {ApplicationWrapper} from './src/Components/ApplicationWrapper';
import {store} from './src/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ApplicationWrapper />
    </Provider>
  );
}

export default App;
