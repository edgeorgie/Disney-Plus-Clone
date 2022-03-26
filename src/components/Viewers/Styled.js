import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0 26px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

export const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: 0px 26px 30px -10px black;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
    border-color: rgba(249, 249, 249, 0.8);
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;