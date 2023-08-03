import { ContainerStyled, FlexDiv } from "@/styledComponent/utilStyle";
import ListInHomePage from "./_component/ListInHomePage";
import CarouselInHomePage from "./_component/CarouselInHomePage";

function HomePage() {
  return (
    <>
      <ContainerStyled>
        <FlexDiv>
          <ListInHomePage />
          <CarouselInHomePage />
        </FlexDiv>
      </ContainerStyled>
    </>
  );
}

export default HomePage;
