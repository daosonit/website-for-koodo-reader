import React from "react";
import App from "next/app";
import { appWithTranslation } from "../i18n";
import "../public/static/app.css";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>
            Koodo Reader - Free Epub Reader for Windows, Mac, Linux and Web
          </title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default appWithTranslation(MyApp);
