import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  height: 77px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

export const Center = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.div`
  background-color: #262626;
  height: 28px;
  margin: 0 16px;
  width: 1px;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchInput = styled.input`
  border-radius: 3px;
  border: 1px solid #aaa;
  padding: 4px 5px;
  background: rgba(0, 0, 0, 0.05);
  text-align: center;
  &:focus {
    text-align: left;
    transition: all 0.2s ease-in;
  }
`;
