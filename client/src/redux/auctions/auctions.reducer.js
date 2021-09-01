import AuctionsActionTypes from "./auctions.types";

const INITIAL_STATE = {
  auctions: null,
  isFetching:false,
  errorMessage:null
};


const AuctionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case AuctionsActionTypes.FETCH_AUCTIONS_START:
        return {
          ...state,
          isFetching: true,
        };
      case AuctionsActionTypes.FETCH_AUCTIONS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          auctions: action.payload,
          errorMessage: null,
        };
      case AuctionsActionTypes.FETCH_AUCTIONS_ERROR:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default AuctionsReducer;