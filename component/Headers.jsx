import styled from "styled-components";
const Headers = styled.header`
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #a9a9a9;
`;
const Logo = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
`;
const LogoImg = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;
const NavLink = styled.a`
  color: #9d6320;
  text-decoration: none;
`;
const IconLink = styled.a`
  text-decoration: none;
  color: black;
`;

const Navbar = styled.nav`
  width: 30%;
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: space-evenly;
`;
const Icon = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: space-evenly;
`;
const Header = () => {
  return (
    <Headers>
      <Logo>
        <LogoImg src="Images/Bakoel Jajan.png"></LogoImg>
        Bakoel Jajan
      </Logo>
      <Navbar>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Product</NavLink>
        <NavLink>Categories</NavLink>
      </Navbar>
      <Icon>
        <IconLink className="fa fa-envelope"></IconLink>
        <IconLink className="fas fa-search"></IconLink>
        <IconLink className="fas fa-shopping-bag"></IconLink>
        <IconLink className="fas fa-user"></IconLink>
      </Icon>
    </Headers>
  );
};
export default Header;
