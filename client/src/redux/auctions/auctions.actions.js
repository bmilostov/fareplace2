import AuctionsActionTypes from "./auctions.types";
import api from "../../data/api";

export const fetchAuctionsStart = () => ({
  type: AuctionsActionTypes.FETCH_AUCTIONS_START,
});

export const fetchAuctionsSuccess = (data) => ({
  type: AuctionsActionTypes.FETCH_AUCTIONS_SUCCESS,
  payload: data,
});

export const fetchAuctionsError = (error) => ({
  type: AuctionsActionTypes.FETCH_AUCTIONS_ERROR,
  payload: error,
});

export const fetchAuctionsStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchAuctionsStart());

    api.Auctions.getData()
      .then((data) => {
        console.log(data);
        dispatch(fetchAuctionsSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchAuctionsError(error));
      });
  };
};
