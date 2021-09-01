import styled from "styled-components";

export const AuctionListContainer = styled.div`
  display: "flex";
  margin-top: 20px;
  padding: 30px;
`;

export const AuctionListHeader = styled.h1`
  color: #f50057;
  margin-left: -30px;
`;

export const MobileContainer = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const WebContainer = styled.div`
  display: block;
  .slick-slider {
    width: 50%;
  }

  .slick-next:before,
  .slick-prev:before {
    color: #f50057;
    margin-left: -50px;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 1600px) {
    .slick-slider {
      width: 60%;
    }

    .slick-next:before,
    .slick-prev:before {
      margin-left: -40px;
    }
  }

  @media screen and (max-width: 1400px) {
    .slick-next:before,
    .slick-prev:before {
      margin-left: -10px;
    }
  }

  @media screen and (max-width: 1200px) {
    .slick-slider {
      width: 80%;
    }
  }

  @media screen and (max-width: 1024px) {
    .slick-slider {
      width: 95%;
    }
  }

  
`;
