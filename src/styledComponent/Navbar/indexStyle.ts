import { styled } from "styled-components";

type Props = {
  $bgColor?: string;
  $textColor?: string;
};

export const NavStyled = styled.nav<Props>`
  display: flex;
  width: 100vw;
  padding: 0 5px;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
`;

export const FlexCenYSpcBTWStyled = styled.div<Props>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.$bgColor};
`;

export const UlStyled = styled.ul<Props>`
  display: flex;
  align-items: center;
  list-style: none;
  color: var(--dark);
  background-color: ${(props) => props.$bgColor};
`;

export const LiStyled = styled.li<Props>`
  position: relative;
  color: var(--secondary);
  font-size: 20px;
  padding: 4px;
  padding-bottom: 2px;
  margin: 0 10px;
  background-color: ${(props) => props.$bgColor};
  &:last-child {
    font-weight: 800;
    font-size: 22px;
    margin-left: 2px;
    margin-right: 0;
    color: var(--dark);
    border: 2px solid var(--dark);
  }
`;
export const ChartBadegeDiv = styled.div<Props>`
  position: absolute;
  top: -10px;
  right: -8px;
  color: var(--light);
  font-size: 20px;
  text-align: center;
  padding: 0;
  height: 20px;
  width: 20px;
  font-size: 16px;
  background-color: var(--orange);
  border-radius: 100%;
`;
