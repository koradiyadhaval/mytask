import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
// import type {RootState} from '../../../store';
import {HomescreenState} from './InterfaceHome';
import {InterfaceHome} from '../../../Interface/Response/Home/InterfaceHome';

// Define the initial state using that type
const initialState: HomescreenState = {
  UserLogin:false,
  UserName:'',
  Loader:false
};
export const HomeScreenSlice = createSlice({
  name: 'Application',
  initialState,
  reducers: {
    serUserLogin: (state, action: PayloadAction<boolean>) => {
      Object.assign({state, Loader: action.payload});
      state.UserLogin = action.payload;
    },
    serUserName: (state, action: PayloadAction<string>) => {
      Object.assign({state, Loader: action.payload});
      state.UserName = action.payload;
    },
  },
});

export const {
  serUserName,serUserLogin
} = HomeScreenSlice.actions;
export default HomeScreenSlice.reducer;
