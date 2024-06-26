import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import monsterService from '../services/monsterService';

interface MonsterState {
  monsters: any[];
  error: string | null;
  success: boolean;
  loading: boolean;
  message: string;
}

const initialState: MonsterState = {
  monsters: [],
  error: null,
  success: false,
  loading: false,
  message: "",
};

export const getAllMonsters = createAsyncThunk(
  'monsters/get',
  async (_, thunkAPI) => {
    try {
      const data = await monsterService.getAllMonsters();
      return data;
    } catch (error) {
      let errorMessage = 'An unknown error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const monsterSlice = createSlice({
  name: 'monsters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMonsters.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getAllMonsters.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.success = true;
        state.monsters = action.payload;
      })
      .addCase(getAllMonsters.rejected, (state, action:any) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
        state.message = "Houve um erro, tente novamente mais tarde.";
      });
  },
});

export default monsterSlice.reducer;
