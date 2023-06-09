import * as React from 'react';
import Head from 'next/head';
import createCache from '@emotion/cache';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy';
import { Inter, JetBrains_Mono } from 'next/font/google';


// Application Theme (JoyUI = MUI) & Fonts (Next.js)

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['monospace'],
});

export const theme = extendTheme({
  fontFamily: {
    body: inter.style.fontFamily,
    code: jetBrainsMono.style.fontFamily,
  },
});

export const bodyFontClassName = inter.className;


// Client-side cache, shared for the whole session of the user in the browser.

const isBrowser = typeof document !== 'undefined';

export function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    // On the client side, _document.tsx has a meta tag with the name "emotion-insertion-point" at the top of the <head>.
    // This assures that MUI styles are loaded first, and allows allows developers to easily override MUI styles with other solutions like CSS modules.
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]',
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: 'mui-style', insertionPoint });
}

const clientSideEmotionCache = createEmotionCache();


export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
      <title>FetchGPT - Open Source Chat-GPT App</title>


        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta name='description' 
        content='Discover the power of open source chat with our GPT app featuring GPT-4 integration. Engage your audience with intelligent and natural conversations, powered by the latest advancements in AI technology. Experience the future of chatbots today.'/>
                <link rel="shortcut icon" href="https://pbs.twimg.com/profile_images/1652308062202658816/pUGzlhNm_400x400.jpg" />

      </Head>
      <CssVarsProvider defaultMode='dark' theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </CssVarsProvider>
    </CacheProvider>
  );
}