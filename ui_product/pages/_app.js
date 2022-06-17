import '../styles/globals.css'
import { ThemeProvider } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Layout from '../components/Layout';
import makeTheme from './../util/makeTheme';

function MyApp({ Component, pageProps }) {
  const { theme } = makeTheme();

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin]
  });
  return(
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
