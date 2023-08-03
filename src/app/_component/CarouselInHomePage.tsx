"use client";
import Image from "next/image";
import React, { useRef } from "react";
import sliderBg1 from "../../asset/img/slider-bg-1.webp";
import Link from "next/link";
import {
  BtnCarousel,
  CarouselContainer,
  CarouselRoot,
  CarouselUtilities,
  ItemCarousel,
} from "@/styledComponent/Carousel/indexStyle";

function CarouselInHomePage() {
  const ItemContainerRef: any = useRef(null);

  const handleCarouselClick = (direction: string) => {
    const width = ItemContainerRef.current.clientWidth;
    const childs = ItemContainerRef.current.childNodes.length;
    if (direction === "right") {
      const widthWithoutOverflow = width * (childs - 1);

      if (ItemContainerRef.current.scrollLeft === widthWithoutOverflow) {
        ItemContainerRef.current.scrollLeft += width + 1;
        ItemContainerRef.current.scrollLeft = 0;
      } else ItemContainerRef.current.scrollLeft += width;
    } else if (direction === "left") {
      if (ItemContainerRef.current.scrollLeft === 0)
        ItemContainerRef.current.scrollLeft -= width + 1;
      else ItemContainerRef.current.scrollLeft -= width;
    }
  };

  return (
    <div
      style={{
        flex: "1",
      }}
    >
      <CarouselRoot>
        <CarouselContainer ref={ItemContainerRef}>
          <ItemCarousel>
            <Image
              src={sliderBg1}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ItemCarousel>
          <ItemCarousel>
            <Image
              src={sliderBg1}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ItemCarousel>
          <ItemCarousel>
            <Image
              src={sliderBg1}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ItemCarousel>
          <ItemCarousel>
            <Image
              src={sliderBg1}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ItemCarousel>
        </CarouselContainer>
        <CarouselUtilities>
          <BtnCarousel
            onClick={() => {
              handleCarouselClick("left");
            }}
          >
            {"<"}
          </BtnCarousel>
          <BtnCarousel
            onClick={() => {
              handleCarouselClick("right");
            }}
          >
            {">"}
          </BtnCarousel>
        </CarouselUtilities>
      </CarouselRoot>
      <Link href={"/first-page"}>first-page</Link>
    </div>
  );
}

export default CarouselInHomePage;
