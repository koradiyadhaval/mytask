import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
// import type {RootState} from '../../../store';
import {HomescreenState} from './InterfaceHome';
import {InterfaceHome} from '../../../Interface/Response/Home/InterfaceHome';

// Define the initial state using that type
const initialState: HomescreenState = {
  Loader: false,
  isLoadingMore: false,
  isNextDataFound: false,
  Data: [],
  pagenumber: 0,
};
export const HomeScreenSlice = createSlice({
  name: 'HomeScreenSlice',
  initialState,
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => {
      Object.assign({state, Loader: action.payload});
      state.Loader = action.payload;
    },
    setLoadingMore: (state, action: PayloadAction<boolean>) => {
      // Object.assign({state, isLoadingMore: action.payload});
      state.isLoadingMore = action.payload;
    },
    setNextDataFound: (state, action: PayloadAction<boolean>) => {
      // Object.assign({state, isNextDataFound: action.payload});
      state.isNextDataFound = action.payload;
    },
    setData: (state, action: PayloadAction<InterfaceHome[]>) => {
      state.Data = action.payload;
    },
    setMergeData: (state, action: PayloadAction<InterfaceHome[]>) => {
      const Result = [...state.Data, ...action.payload];

      state.Data = Result;
    },
    setPagenumber: (state, action: PayloadAction<number>) => {
      const number = action.payload;
      state.pagenumber = number;
      // Object.assign({state, pagenumber: number});
    },
  },
});

export const {
  setLoader,
  setMergeData,
  setNextDataFound,
  setLoadingMore,
  setData,
  setPagenumber,
} = HomeScreenSlice.actions;
export default HomeScreenSlice.reducer;
