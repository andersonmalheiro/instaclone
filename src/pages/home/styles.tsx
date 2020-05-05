import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 50px 19vw;
`;

export const FeedColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin: 0 20px;
  width: 100%;
  border: 1px solid red;
  height: 100%;
`;

export const StoriesColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
