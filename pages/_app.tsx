import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { light } from '../styles/theme';
import GlobalStyles from '../styles/globalStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Error from 'next/error';
import ProgressBar from '@badrap/bar-of-progress';
import { Router } from 'next/router';

interface CustomAppProps extends NextPageProps {}

const progress = new ProgressBar({
  size: 2,
  color: light.primaryBackground,
  delay: 100,
});

export default function App({
  Component,
  pageProps,
}: AppProps<CustomAppProps>) {
  if (pageProps.error) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
    );
  }
  return (
    <ThemeProvider theme={light}>
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);
