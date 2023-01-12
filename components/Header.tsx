import { transparentize } from 'polished';
import styled from 'styled-components';
import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from '../_constants';
import Logo from './Logo';
import Navbar from './Navbar';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Navbar />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: ${p => p.theme.activeElementBackground};
  color: ${p => p.theme.activeElementForeground};
  box-shadow: 0 3px 10px ${p => transparentize(0.9, p.theme.pageForeground)};

  width: 100%;
  height: ${HEADER_HEIGHT}px;
  
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  @media screen and (max-width: 767px) {
    height: ${MOBILE_HEADER_HEIGHT}px;
  }

`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 848px;
  margin: auto;
  height: 100%;

  padding: 0 16px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }
`;
