import styled, { css } from "styled-components";

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  text-decoration: underline;
  text-align: center;
  ${(props) =>
    props.theme === "dark" &&
    css`
      background: #000;
      color: grey;
      &:hover {
        background: #fff;
        color: green;
      }
    `};
`;
