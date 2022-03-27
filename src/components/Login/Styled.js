import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: calc(100vh - 70px);

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background-image: url('/images/login-background.jpg');
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: -1;
  }
`;

export const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
`;

export const CTALogoOne = styled.img`

`;

export const SignUp = styled.a`
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 10px;
  padding: 20px 0;

  &:hover {
    background-color: #0483ee;
  }
`;

export const Description = styled.p`
  text-align: center;
  font-size: 12px;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;

export const CTALogoTwo = styled.img`
  width: 100%;
`;