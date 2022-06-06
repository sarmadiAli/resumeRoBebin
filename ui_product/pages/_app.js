import '../styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
function MyApp({ Component, pageProps }) {
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin]
  });
  return
  <CacheProvider value={cacheRtl}>
        <ThemeProvider>
   <Component {...pageProps} />
   </ThemeProvider>

  </CacheProvider>
}

export default MyApp
