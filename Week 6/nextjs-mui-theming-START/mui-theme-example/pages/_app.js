import { ThemeProvider } from '@mui/material';
import { theme } from '../utils/theme/config.js'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
