import styled from 'styled-components';

export const ContainerRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  @media (max-width: 930px) {
    flex-direction: column;
  }
`;

export const ContainerFlexWidth = styled.div`
  width: ${({ widthPercent }) => (widthPercent ? `${widthPercent}%` : '100%')};
  flex-direction: row;
  height: auto;
  @media (max-width: 930px) {
    flex-direction: column;
  }
`;
