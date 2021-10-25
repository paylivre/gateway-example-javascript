import styled from 'styled-components';

export const Container = styled.div`
  width: 45%;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 20px 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 930px) {
    width: 100%;
  }
`;

export const ContainerHeight = styled.div`
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : 0)};
`;

export const ContainerCheckTypes = styled.div`
  width: 100%;
  flex-direction: row;
  height: auto;
`;

export const FormLabelCustom = styled.h2`
  font-size: 18px;
  color: grey;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
