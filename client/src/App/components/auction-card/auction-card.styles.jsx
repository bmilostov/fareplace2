import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const CardContainer = styled(Card)`
  width: 250px;
  margin-right: 20px;
  box-shadow: none !important;
  margin-bottom: 20px;
  border-radius: 10px !important;

  &:hover {
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%) !important;
  }

  @media screen and (max-width: 800px) {
    margin-right: 20px;
  }
`;

export const CardImageContainer = styled.img`
  height: auto;
  width: 100%;
  background-position: center;
  background-size: cover;
`;
