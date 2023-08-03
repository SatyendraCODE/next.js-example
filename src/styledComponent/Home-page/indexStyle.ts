import Link from "next/link";
import { keyframes, styled } from "styled-components";

const visiblitie = keyframes`
  from {
    opacity: 0;
  }

  to {
   opacity: 1;
  }
`;

export const HoverDetailsLinkHomePage = styled.div`
  cursor: default;
  display: none;
  padding: 50px 20px;
  position: absolute;
  top: 0;
  left: 228px;
  z-index: 10;
  box-shadow: 0px 2px 5px -3px #0000007a;
`;
export const DivInHoverDetails = styled.div`
  padding-right: 20px;
  min-width: 166.5px;
  width: 250px;
`;
export const LinkInDivInHoverDetails = styled(Link)`
  margin-top: 15px;
  display: block;
  transition: 200ms;

  &:hover {
    color: var(--orange);
  }
`;

export const LiInHomePage = styled.li`
  cursor: pointer;
  width: 100%;
  border: 1px solid var(--border);
  border-top: none;
  position: relative;

  &:first-child {
    border: 1px solid var(--border);
  }

  &:hover {
    ${HoverDetailsLinkHomePage} {
      display: flex;
      background-color: white;
      animation: ${visiblitie} 500ms linear;
    }
  }
`;

export const LinkHomePage = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 10px;
  /* color: red; */
`;
export const PInLinkTextHomePage = styled.p`
  display: flex;
  align-items: center;
`;
