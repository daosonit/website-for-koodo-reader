/* eslint react/no-danger: 0 */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);};gtag('js', new Date());gtag('config', 'UA-149740367-1') 
      `,
    };
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="keywords" content="epub reader free koodo" />
          <meta name="application-name" content="Koodo Reader" />
          <meta
            name="description"
            content="Koodo Reader is a open-source epub reader with backup and restore support, runs on Windows, Mac and Web"
          />
          <meta name="referrer" content="unsafe-url" />
          <meta
            itemProp="name"
            content="Koodo Reader - Free Epub Reader for Windows, Mac and Web"
          />
          <meta
            itemProp="description"
            content="Koodo Reader is a open-source epub reader with backup and restore support, runs on Windows, Mac and Web"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://koodo.960960.xyz" />
          <meta
            property="og:title"
            content="Koodo Reader - Free Epub Reader for Windows, Mac and Web"
          />
          <meta
            property="og:description"
            content="Koodo Reader is a open-source epub reader with backup and restore support, runs on Windows, Mac and Web"
          />
          <meta
            property="og:image"
            content="https://koodo.960960.xyz/images/meta.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://koodo.960960.xyz" />
          <meta
            property="twitter:title"
            content="Koodo Reader - Free Epub Reader for Windows, Mac and Web"
          />
          <meta
            property="twitter:description"
            content="Koodo Reader is a open-source epub reader with backup and restore support, runs on Windows, Mac and Web"
          />
          <meta
            property="twitter:image"
            content="https://koodo.960960.xyz/images/meta.png"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
            rel="stylesheet"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/icons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
          <link href="/lib/aos.css" rel="stylesheet" />{" "}
          <script src="/lib/aos.js"></script>
          <script src="https://at.alicdn.com/t/font_1803854_8gc5u8bw7eq.js" />
          <link href="/lib/bootstrap-grid.min.css" rel="stylesheet" />
          <link rel="dns-prefetch" href="https://koodo.960960.xyz" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-149740367-1"
          ></script>
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script>AOS.init();</script>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
