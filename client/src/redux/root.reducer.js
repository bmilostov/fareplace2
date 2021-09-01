import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auctionsReducer from "./auctions/auctions.reducer";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auctions"],
};

const rootReducer = combineReducers({
  auctions: auctionsReducer,
});

export default persistReducer(persistConfig, rootReducer);
