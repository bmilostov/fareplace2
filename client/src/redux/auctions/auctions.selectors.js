import { createSelector } from "reselect";

const selectData = (state) => state.auctions;

export const selectAuctions = createSelector(
  [selectData],
  (data) => data.auctions
);

export const selectAuctionsToPreview = createSelector(
  [selectAuctions],
  (auctions) => {
    return auctions ? Object.keys(auctions).map((key) => auctions[key]) : [];
  }
);
