import React from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";

const Share = ({ t }) => (
  <section className="container my-5">
    <div className="container my-5">
      <div className="row align-items-center justify-content-around text-center text-lg-left">
        <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 order-lg-2 pl-lg-5 pl-xl-0">
          <h2 className="h1">{t("share-title")}</h2>
          <p className="lead">{t("share-subtitle")}</p>

          <div className="row justify-content-around my-4">
            <a
              href="https://twitter.com/intent/tweet?text=Koodo+Reader+-+Free+Epub+Reader+for+Windows%2C+Mac%2C+Linux+and+Web+https%3A%2F%2Fkoodo.960960.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="col-sm-12 col-lg-4"
            >
              <div className="twitter row justify-content-center align-items-center">
                <svg className={"icon m-1"} aria-hidden="true">
                  <use href={`#icon-twitter`}></use>
                </svg>

                {t("twitter")}
              </div>
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=koodo.960960.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="col-sm-12 col-lg-4"
            >
              <div className="facebook row justify-content-center align-items-center">
                <svg className={"icon m-1"} aria-hidden="true">
                  <use href={`#icon-facebook`}></use>
                </svg>
                {t("facebook")}
              </div>
            </a>
            <a
              href="http://service.weibo.com/share/share.php?url=https://koodo.960960.xyz/&amp;title=Koodo+Reader+%E4%B8%80%E4%B8%AA%E5%85%8D%E8%B4%B9%E5%BC%BA%E5%A4%A7%E7%9A%84+Epub+%E9%98%85%E8%AF%BB%E5%99%A8%EF%BC%8C%E6%94%AF%E6%8C%81+Windows%2C+Mac%2C+Linux+%E5%92%8C+%E7%BD%91%E9%A1%B5%E7%89%88"
              target="_blank"
              rel="noopener noreferrer"
              className="col-sm-12 col-lg-4"
            >
              <div className="weibo row justify-content-center align-items-center">
                <svg className={"icon m-1"} aria-hidden="true">
                  <use href={`#icon-weibo`}></use>
                </svg>
                {t("weibo")}
              </div>
            </a>
          </div>
        </div>
        <div
          className="col-md-9 col-lg-6 col-xl-5 order-lg-1 aos-init "
          data-aos="fade-right"
        >
          <img
            src="/images/share.svg"
            alt="Share with the world"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
    <div className="divider"></div>
    <style jsx>{`
      .twitter {
        width: 116px;
        height: 48px;
        background: rgba(29, 162, 242, 1);
        opacity: 1;
        border-radius: 24px;
        color: white;
        font-size: 1rem;
        cursor: pointer;
      }
      .facebook {
        width: 118px;
        height: 48px;
        background: rgba(60, 88, 151, 1);
        opacity: 1;
        border-radius: 24px;
        color: white;
        font-size: 1rem;
        cursor: pointer;
      }
      .weibo {
        width: 118px;
        height: 48px;
        background: rgba(230, 22, 45, 1);
        opacity: 1;
        border-radius: 24px;
        color: white;
        font-size: 1rem;
        cursor: pointer;
      }
    `}</style>
  </section>
);
Share.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
Share.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Share);
