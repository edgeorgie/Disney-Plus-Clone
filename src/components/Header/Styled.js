import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 36px;
  height: 70px;
  background: #090b13;
  overflow-x: hidden;
`;

export const Logo = styled.img`
  width: 80px;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  flex: 1;
  
  a {
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0 16px;
    text-decoration: none;

    img {
      height: 20px;
    }

    span {
      font-size: 14px;
      letter-spacing: 1.42px;
      margin-left: 4px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        width: auto;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: center;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

export const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;

`;
