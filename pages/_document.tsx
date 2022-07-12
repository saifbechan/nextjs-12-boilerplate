import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import emotionCache from '../utils/emotion-cache';

type Props = {
  lang: string;
};

const { extractCritical } = createEmotionServer(emotionCache);

class MyDocument extends NextDocument<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style
          key="emotion-css"
          dangerouslySetInnerHTML={{ __html: styles.css }}
          data-emotion-css={styles.ids.join(' ')}
        />,
      ],
    };
  }

  render() {
    return (
      <Html lang={this.props.lang || 'en'}>
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
          <link
            rel="icon"
            href="/favicon.ico"
            type="image/x-icon"
            sizes="64x64 32x32 24x24 16x16"
          />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bungee+Outline&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
