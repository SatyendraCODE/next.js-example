import { styled } from "styled-components";
import css from "styled-jsx/css";

type PropsHeight = {
  $height?: string;
};

export const CarouselRoot = styled.div<PropsHeight>`
  /* height: 100%; */
  height: ${(props) => (props.$height ? props.$height + "px" : "100%")};
  display: flex;
  position: relative;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  float: left;
  white-space: nowrap;
  overflow: hidden;
  scroll-behavior: smooth;
`;
export const ItemCarousel = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  /* border: 1px solid; */
`;

export const CarouselUtilities = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  transition: 1s;

  &:hover {
    opacity: 1;
    padding: 50px;
  }
`;
export const BtnCarousel = styled.button`
  cursor: pointer;
  font-size: 120px;
  background-color: transparent;
  color: #d7d7d7;
  outline: none;
  border: none;
  transition: 1s;

  &:hover {
    color: #a8a8a8;
  }
`;
