import styled from "styled-components";
import Button from "@mui/material/Button";
import { ContainerFlexWidth } from "../components/styles";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  background: #fff;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  @media (max-width: 930px) {
    flex-direction: column;
    padding: 20px;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerResult = styled.div`
  width: 40%;
  margin-left: 20px;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 20px 20px;
  background-color: #ffffff;
  border-radius: 5px;
  @media (max-width: 930px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const CustomButton = styled(Button)`
  @media (max-width: 930px) {
    width: 100%;
  }
`;

export const ContainerFlexWidthCustom = styled(ContainerFlexWidth)`
  @media (max-width: 930px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
