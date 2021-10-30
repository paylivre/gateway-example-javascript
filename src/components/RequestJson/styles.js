import styled from "styled-components";
import Button from "@mui/material/Button";
import { ContainerRow, ContainerFlexWidth } from "../styles";

export const Container = styled.div`
  display: flex;
  background: #292929;
  flex-wrap: nowrap;
  width: auto;
  height: auto;
  min-height: 100px;
  justify-content: center;
  padding: 0 20px 20px 20px;
  border-radius: 5px;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 930px) {
    width: 88%;
    padding: 20px;
  }
`;

export const PColor = styled.p`
  font-size: small;
  color: ${({ color }) => color || "#fff"};
  margin: 0;
  max-width: 100%;
  display: flex;
  font-size: 14px;
  word-break: break-all;
  font-family: "Courier New", Courier, monospace;
`;

export const FormLabelCustom = styled.h2`
  font-size: 18px;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const ContainerFlexWidthCustom = styled(ContainerFlexWidth)`
  @media (max-width: 930px) {
    width: 100%;
    flex-direction: column;
    margin: 5px 0;
  }
`;

export const CustomButton = styled(Button)`
  @media (max-width: 930px) {
    width: 100%;
  }
`;
