import React, { useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuctionsToPreview } from "../../../redux/auctions/auctions.selectors";
import { fetchAuctionsStartAsync } from "../../../redux/auctions/auctions.actions";
import AuctionCard from "../auction-card/auction-card.component";
import { Grid } from "@material-ui/core";
import {
  AuctionListContainer,
  WebContainer,
  MobileContainer,
} from "./auctions-list.styles";
import Slider from "react-slick";

const AuctionsList = () => {
  const auctions = useSelector(selectAuctionsToPreview);
  const dispatch = useDispatch();

  const settings = {
    focusOnSelect: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  };
  useEffect(() => {
    dispatch(fetchAuctionsStartAsync());
  }, [fetchAuctionsStartAsync]);

  return (
    <AuctionListContainer>
      <WebContainer>
        <Grid container spacing={40} justify="center">
          <Slider {...settings}>
            {auctions &&
              auctions.map((auction) => (
                <Grid item key={auction.id}>
                  <AuctionCard auction={auction} />
                </Grid>
              ))}
          </Slider>
        </Grid>
      </WebContainer>

      <MobileContainer>
        <Grid container spacing={40} justify="center">
          {" "}
          {auctions &&
            auctions.map((auction) => (
              <Grid item key={auction.id}>
                <AuctionCard auction={auction} />
              </Grid>
            ))}
        </Grid>
      </MobileContainer>
    </AuctionListContainer>
  );
};

export default AuctionsList;
