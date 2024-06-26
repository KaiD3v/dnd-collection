import { configureStore } from "@reduxjs/toolkit";

import monsterReducer from "./slices/monsterSlice"

export const store = configureStore({
    reducer: {
        monsters: monsterReducer
    }
})