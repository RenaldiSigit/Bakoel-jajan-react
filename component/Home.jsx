import styled from "styled-components";
const SectionHome = styled.section`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url("/Images/bahankue.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Content = styled.div`
  width: 850px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 3rem;
`;
const Span = styled.span`
  font-size: 3rem;
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
const Home = () => {
  return (
    <SectionHome>
      <Content>
        <Title>Fresh And Halal Product For You</Title>
        <Span>Lezat and Bergizi</Span>
        <p>
          Bakoel jajan menjual berbagai macam kue yang sehat, lezat dan bergizi
        </p>
        <Button>Shop Now</Button>
      </Content>
    </SectionHome>
  );
};

export default Home;
