import React from "react";
import { ContainerFlexWidth } from "../styles";
import { Container, ListContainer, ListItem, SectionTitle } from "./styles";

const UrlParametersList = (props) => {
  const { parameters } = props;
  const requiredFields = [
    "merchant_id",
    "operation",
    "merchant_transaction_id",
    "amount",
    "currency",
    "mock_type",
    "account_id",
    "mock_auto_approve",
    "callback_url",
  ];

  const renderParametersList = () => {
    return Object.entries(parameters).map((param) => {
      const isBold = requiredFields.includes(param[0]);
      const isEmpty = param[1].length === 0;
      console.log(isBold);
      return (
        <ListItem isBold={isBold} isEmpty={isEmpty}>
          {`${param[0]} = ${param[1]}`}
        </ListItem>
      );
    });
  };

  return (
    <Container>
      <ContainerFlexWidth>
        <SectionTitle>Url Parameters</SectionTitle>
        <ListContainer>{renderParametersList()}</ListContainer>
      </ContainerFlexWidth>
    </Container>
  );
};

export default UrlParametersList;
