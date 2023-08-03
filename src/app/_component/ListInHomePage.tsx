import { ListArrayHome } from "@/data/listArrayHomePage";
import {
  DivInHoverDetails,
  HoverDetailsLinkHomePage,
  LiInHomePage,
  LinkHomePage,
  LinkInDivInHoverDetails,
  PInLinkTextHomePage,
} from "@/styledComponent/Home-page/indexStyle";
import { UlStyled } from "@/styledComponent/Navbar/indexStyle";
import React from "react";

function ListInHomePage() {
  return (
    <div
      style={{
        flex: 1,
        maxWidth: "260px",
      }}
    >
      <UlStyled
        style={{
          flexDirection: "column",
          marginRight: "30px",
        }}
      >
        <LiInHomePage
          style={{
            background: "var(--dark)",
            color: "var(--light)",
          }}
        >
          <LinkHomePage href="">
            <PInLinkTextHomePage>
              {ListArrayHome.icon}
              <span style={{ marginLeft: "10px" }}>{ListArrayHome.title}</span>
            </PInLinkTextHomePage>
          </LinkHomePage>
        </LiInHomePage>
        {ListArrayHome.data.map((ele, i) => {
          if (ele.products) {
            return (
              <LiInHomePage key={`list-${i}`}>
                <LinkHomePage href={`${ele.id}`}>
                  <PInLinkTextHomePage>
                    {ele.icon}
                    <span style={{ marginLeft: "10px" }}>{ele.title}</span>
                  </PInLinkTextHomePage>
                  {">"}
                </LinkHomePage>
                <HoverDetailsLinkHomePage>
                  {ele.products.map((product, iPro) => (
                    <DivInHoverDetails key={iPro}>
                      <h4>{product.title}</h4>
                      {product.category.map((cat, iCat) => (
                        <LinkInDivInHoverDetails href="" key={iCat}>
                          {cat}
                        </LinkInDivInHoverDetails>
                      ))}
                    </DivInHoverDetails>
                  ))}
                </HoverDetailsLinkHomePage>
              </LiInHomePage>
            );
          }
          return (
            <LiInHomePage key={`list-${i}`}>
              <LinkHomePage href={`${ele.id}`}>
                <PInLinkTextHomePage>
                  {ele.icon}
                  <span style={{ marginLeft: "10px" }}>{ele.title}</span>
                </PInLinkTextHomePage>
              </LinkHomePage>
            </LiInHomePage>
          );
        })}
      </UlStyled>
    </div>
  );
}

export default ListInHomePage;
