import React from "react";
import PropTypes from "prop-types";

import { withTranslation, Link } from "../i18n";
const screenWidth =
  document.documentElement.clientWidth || document.body.clientWidth;
console.log(screenWidth);
const Cover = ({ t }) => (
  <div className="container-fluid  cover-bg">
    <img src="/images/cover.jpg" alt="Koodo Reader Cover" className="cover" />
    <section className="bg-dark pb-0">
      <div className="container" style={{ height: "100%" }}>
        <div
          className="row justify-content-between align-items-center"
          style={{ height: "100%" }}
        >
          <div
            className="col-xl-6 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0 aos-init"
            data-aos="fade-right"
          >
            <h1 className="title">{t("title")}</h1>
            <p className="subtitle">{t("subtitle")}</p>
            <div
              className="container aos-init"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="row justify-content-start mt-4">
                <Link href="/download">
                  <div className="row download-button col-4 m-3 justify-content-center align-items-center">
                    <div>{t("download")}</div>
                  </div>
                </Link>

                <div className="row preview-button col-4 m-3 justify-content-center align-items-center">
                  <a
                    href="https://troyeguo.gitee.io/koodo-web/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>{t("preview")}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-50 h-50 bottom right position-absolute section-spacer"
        data-jarallax-element="50"
      >
        <div className="blob blob-2 bg-gradient w-100 h-100"></div>
      </div>
      <div
        className="w-50 h-50 bottom right position-absolute section-spacer"
        data-jarallax-element="75"
      >
        <div className="blob blob-4 bg-white opacity-10 w-100 h-100"></div>
      </div>
      <div className="divider divider-bottom bg-white dark-theme"></div>
    </section>
    <style jsx>{`
      .cover-bg {
        background-color: black;
        color: white;
        height: 600px;
      }
      .cover {
        height: 600px;
        position: absolute;
        top: 0px;
        right: 0px;
      }
      .title {
        font-size: calc(1rem + 2.5vw);
        font-weight: bold;
        line-height: 1.2;
        color: rgba(255, 255, 255, 1);
        opacity: 1;
        margin-top: 60px;
      }
      .subtitle {
        font-size: 1.25rem;
        line-height: 1.5;
        color: rgba(190, 190, 190, 1);
        opacity: 1;
        margin-top: 20px;
      }
      @media (max-width: 991.98px) {
        .title {
          margin-top: 100px;
        }
        .subtitle {
          font-size: 1rem;
          line-height: 1.5;
        }
        .cover-bg {
          height: ${screenWidth}px;
        }
        .cover {
          height: ${screenWidth}px;
        }
      }
      .bg-dark {
        height: 100%;
      }
      .download-button {
        height: 46px;
        background: rgba(255, 226, 183, 1);
        opacity: 1;
        border-radius: 23px;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.7);
        font-weight: 500;
      }
      .preview-button {
        height: 46px;
        background: rgba(255, 255, 255, 1);
        opacity: 1;
        border-radius: 23px;
        width: 75px;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.7);
        opacity: 1;
      }
    `}</style>
  </div>
);
Cover.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
Cover.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Cover);
