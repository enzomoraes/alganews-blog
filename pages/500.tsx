import styled from 'styled-components';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../_constants';
import InternalErrorImage from '../public/internal_error.svg';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
export default function InternalError() {
  return (
    <Wrapper>
      <Head>
        <title>Erro interno - 500</title>
      </Head>
      <Image
        src={InternalErrorImage}
        width={200}
        height={200}
        alt='não encontrado'
      ></Image>
      <h1>Erro interno</h1>
      <p>O estagiário desconectou um cabo errado</p>
      <BackToHome href='/'>Tentar acessar a Home</BackToHome>
    </Wrapper>
  );
}

const BackToHome = styled(Link)`
  color: ${p => p.theme.primaryBackground};
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;

  min-height: calc(100vh) - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px;
`;
