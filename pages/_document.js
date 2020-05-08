/* eslint react/no-danger: 0 */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="keywords" content="epub reader free koodo" />
          <meta name="application-name" content="Koodo Reader" />
          <meta
            name="description"
            content="Koodo Reader is a open-source epub reader with backup and restore support, runs on Windows, Mac, Linux and Web"
          />
          <meta name="referrer" content="unsafe-url" />
          <meta
            itemProp="name"
            content="Koodo Reader - Free Epub Reader for Windows, Mac, Linux and Web"
          />
          <meta
            itemProp="description"
            content="Koodo Reader is a open-source epub reader with backup and restore support, runs on Windows, Mac, Linux and Web"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Koodo Reader" />
          <meta
            name="description"
            content="Free Epub Reader for Windows, Mac, Linux and Web"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />

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
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <script src="http://at.alicdn.com/t/font_1803854_ia4mnioote.js" />
          <link
            href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap-grid.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdn.bootcdn.net/ajax/libs/aos/3.0.0-beta.6/aos.css"
            rel="stylesheet"
          />
          <script src="https://cdn.bootcdn.net/ajax/libs/aos/3.0.0-beta.6/aos.js"></script>
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
