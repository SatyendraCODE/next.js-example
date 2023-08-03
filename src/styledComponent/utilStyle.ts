import { styled } from "styled-components";

type PropsContainer = {
  $width?: string;
};

export const ContainerStyled = styled.div<PropsContainer>`
  width: ${(props) => props.$width || "80%"};
  margin: auto;
`;
export const FlexDiv = styled.div<PropsContainer>`
  display: flex;
`;
