import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
// import type {RootState} from '../../../store';
import {InterfaceInitMovies} from './InterfaceInitMovies';
import {InterfaceMovie} from '../../../Interface/Response/InterfaceMovie';

// Define the initial state using that type
const initialState: InterfaceInitMovies = {
 Data:[]
};
export const MovieSlice = createSlice({
  name: 'Movie',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<InterfaceMovie>) => {
      Object.assign({state, Loader: action.payload});
      state.Data = action.payload;
    },
 
  },
});

export const {
  setData
} = MovieSlice.actions;
export default MovieSlice.reducer;
