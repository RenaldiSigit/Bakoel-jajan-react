import styled from "styled-components";
const SectionProduct = styled.section`
  height: 450px;
`;
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
const ContainerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.3rem;
  padding: 20px;
  width: 1000px;
  margin: auto;
`;
const BoxContentTitle = styled.div`
  font-size: 2.5rem;
  color: #9d620a;
`;
const Images = styled.img`
  height: 300px;
  width: 300px;
`;
const Box = styled.div``;
const Content = styled.div``;
const Price = styled.div``;
const Product = () => {
  return (
    <SectionProduct>
      <Title>
        Our <Span>Products</Span>
      </Title>
      <ContainerBox>
        <Box>
          <Images src="/Images/kue bulan sabit.jpg"></Images>
          <Content>
            <BoxContentTitle>Kue Bulan Coklat</BoxContentTitle>
            <Price>
              Rp 25.000 -<span>Rp 35.000</span>
            </Price>
          </Content>
        </Box>
        <Box>
          <Images src="/Images/kue kering.jpg"></Images>
          <Content>
            <BoxContentTitle>Kue Bulan Coklat</BoxContentTitle>
            <Price>
              Rp 25.000 -<span>Rp 35.000</span>
            </Price>
          </Content>
        </Box>
        <Box>
          <Images src="/Images/kue nona manis.jpeg"></Images>
          <Content>
            <BoxContentTitle>Kue Bulan Coklat</BoxContentTitle>
            <Price>
              Rp 25.000 -<span>Rp 35.000</span>
            </Price>
          </Content>
        </Box>
      </ContainerBox>
    </SectionProduct>
  );
};
export default Product;
