import styled from 'styled-components';

export default function Header() {
  return (
    <>
      <Title>Oi eu sou um h1</Title>
    </>
  );
}

const Title = styled.h1`
  color: ${p => p.theme.primaryBackground};
`;
