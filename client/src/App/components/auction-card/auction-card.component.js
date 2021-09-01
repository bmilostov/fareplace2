import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import CustomButton from "../custom-button/custom-button.component";
import FromTo from "../from-to/from-to.component";
import NumberOfViews from "../number-of-views/number-of-views.component";

import { CardContainer, CardImageContainer } from "./auction-card.styles";

const AuctionCard = ({ auction }) => {
  const { imageUrl, inboundId, outboundId, viewersCount, currentMinPrice,currencySymbol } =
    auction;
  return (
    <CardContainer>
      {/* <CardMedia className="media" image={imageUrl} title="" />  */}
      <CardImageContainer src={imageUrl} alt="" />
      <link rel="preload" as="image" href={imageUrl} />
      <CardContent>
        <FromTo from={inboundId} to={outboundId} />
        <NumberOfViews numberOfViews={viewersCount} />
      </CardContent>
      <CardActions>
        <CustomButton color="secondary">
          Now from {currencySymbol}{currentMinPrice}
        </CustomButton>
      </CardActions>
    </CardContainer>
  );
};

export default React.memo(AuctionCard);
