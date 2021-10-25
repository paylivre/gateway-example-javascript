import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  background: #fff;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
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
  }
`;
