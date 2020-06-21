import React from "react";
import App from "next/app";
import { appWithTranslation } from "../i18n";
import Head from "next/head";
import "../styles/global.css";
import "../styles/reset.css";
class MyApp extends App {
  componentDidMount() {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "4747dcab-17be-4169-8cfb-41d72b8cd672";
    (function () {
      const s = document.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      document.getElementsByTagName("head")[0].appendChild(s);
    })();
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>
            Koodo Reader - Free Epub Reader for Windows, Mac and Web
          </title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default appWithTranslation(MyApp);
