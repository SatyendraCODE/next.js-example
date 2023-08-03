"use client";
import React from "react";
import {
  ChartBadegeDiv,
  FlexCenYSpcBTWStyled,
  LiStyled,
  NavStyled,
  UlStyled,
} from "../../styledComponent/Navbar/indexStyle";
import Image from "next/image";
import Link from "next/link";
import { ContainerStyled } from "@/styledComponent/utilStyle";
import logoImg from "../../asset/img/logo_medium.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { PiListBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <NavStyled $bgColor="white" $textColor="black">
      <ContainerStyled>
        <FlexCenYSpcBTWStyled style={{ height: "90px" }}>
          <div style={{ marginLeft: "10px" }}>
            <Image src={logoImg} alt="logo" />
          </div>
          <div>
            <UlStyled>
              <LiStyled>
                <Link href="#">
                  <AiOutlineSearch />
                </Link>
              </LiStyled>
              <LiStyled>
                <Link href="#">
                  <FaRegUser />
                </Link>
              </LiStyled>
              <LiStyled>
                <Link href="#">
                  <FiShoppingCart />
                  <ChartBadegeDiv>0</ChartBadegeDiv>
                </Link>
              </LiStyled>
              <LiStyled>
                <Link href="#">
                  <PiListBold />
                </Link>
              </LiStyled>
              <LiStyled>
                <Link href="#">
                  <PiListBold />
                </Link>
              </LiStyled>
            </UlStyled>
          </div>
        </FlexCenYSpcBTWStyled>
      </ContainerStyled>
    </NavStyled>
  );
};

export default Navbar;
