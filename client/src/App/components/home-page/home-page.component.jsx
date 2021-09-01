import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { HomePageContainer, LinkButton } from "./home-page.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        FAREPLACE
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        welcome to fareplace, enjoy the best deals and prices on the web.
      </Typography>
      <div>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <LinkButton  to="/auctions" color="secondary">
              Discover Auctions
            </LinkButton>
          </Grid>
        </Grid>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
