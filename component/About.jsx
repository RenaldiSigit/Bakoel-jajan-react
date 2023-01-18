import styled from "styled-components";

const Abouts = styled.section``;
const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  color: #333;
  padding: 1rem;
  margin: 2rem 0;
  background: rgba(225, 51, 153, 0.05);
`;
const Span = styled.span`
  color: #9d620a;
`;
const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 30%;
  padding: 20px;
`;
const Image = styled.img`
  margin: 15px;
  border-radius: 30px;
`;
const TitleImg = styled.h3`
  text-align: center;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
`;
const TitleContent = styled.h3`
  font-size: 2.5rem;
`;
const Paragraf = styled.p`
  font-size: 1rem;
  color: #999;
`;
const Button = styled.a`
  text-decoration: none;
  display: inline-block;
  margin-top: 1px;
  border-radius: 5px;
  background: #333;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
`;
const About = () => {
  return (
    <Abouts>
      <Title>
        <Span>About</Span> us
      </Title>
      <WrapperRow>
        <ContainerImg>
          <Image src="/Images/kering kue.jpeg"></Image>
          <TitleImg>Delicioso</TitleImg>
        </ContainerImg>
        <ContentWrapper>
          <TitleContent>Why choose us ?</TitleContent>
          <Paragraf>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Paragraf>
          <Paragraf>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraf>
          <div>
            <Button>Read More</Button>
          </div>
        </ContentWrapper>
      </WrapperRow>
    </Abouts>
    // <section class="about" id="about">
    //   <h1 class="heading">
    //     <span> About </span> us
    //   </h1>

    //   <div class="row">
    //     <div class="img-container">
    //       <img src="/Images/kering kue.jpeg" />
    //       <h3>Delicioso</h3>
    //     </div>

    //     <div class="content">
    //       <h3>Why choose us ?</h3>
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book.
    //       </p>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //       </p>
    //       <div class="button">
    //         <a href="#" class="btn">
    //           Read More
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};
export default About;
