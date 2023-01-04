import Link from 'next/link';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <nav>
      <Wrapper>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
      </Wrapper>
    </nav>
  );
}

const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  gap: 8px;
  a {
    color: ${p => p.theme.pageForeground};
    text-decoration: none;
    text-transform: lowercase;
  }
`;
