import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  background: transparent;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  padding: 20px;
  border-radius: 5px;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 930px) {
    width: 88%;
    padding: 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  color: grey;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: small;
  color: ${(props) => props.isEmpty && "#be453a"};
  margin: 0;
  max-width: 100%;
  display: flex;
  font-size: 1.2rem;
  word-break: break-all;
  margin: 0.2rem 0;
  /* font-family: "Courier New", Courier, monospace; */
`;

export const Alert = styled.h2`
  font-size: 18px;
  color: #be453a;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const AlertContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  padding: 20px;
  border-radius: 5px;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 930px) {
    width: 88%;
    padding: 20px;
  }
`;
