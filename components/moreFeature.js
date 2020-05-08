import React from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";

const MoreFeature = ({ t }) => (
  <section className="container my-5">
    <div className="more-question">{t("question")}</div>
    <div className="row text-center">
      <div
        className="col-md-6 col-lg-4 mb-4 mb-md-5 aos-init"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <div className="mx-xl-4 more-icon">
          <svg className={"icon"} aria-hidden="true">
            <use href="#icon-zu9"></use>
          </svg>
          <h5 className={"more-title"}>{t("title1")}</h5>
          <p className={"more-subtitle"}>{t("subtitle1")}</p>
        </div>
      </div>
      <div
        className="col-md-6 col-lg-4 mb-4 mb-md-5 aos-init"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="mx-xl-4 more-icon">
          <svg className={"icon"} aria-hidden="true">
            <use href="#icon-zu11"></use>
          </svg>
          <h5 className={"more-title"}>{t("title2")}</h5>
          <p className={"more-subtitle"}>{t("subtitle2")}</p>
        </div>
      </div>
      <div
        className="col-md-6 col-lg-4 mb-4 mb-md-5 aos-init"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="mx-xl-4 more-icon">
          <svg className={"icon"} aria-hidden="true">
            <use href="#icon-zu16"></use>
          </svg>
          <h5 className={"more-title"}>{t("title3")}</h5>
          <p className={"more-subtitle"}>{t("subtitle3")}</p>
        </div>
      </div>
      <div
        className="col-md-6 col-lg-4 mb-4 mb-md-5 aos-init"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <div className="mx-xl-4 more-icon">
          <svg className={"icon"} aria-hidden="true">
            <use href="#icon-zu12"></use>
          </svg>
          <h5 className={"more-title more-icon"}>{t("title4")}</h5>
          <p className={"more-subtitle"}>{t("subtitle4")}</p>
        </div>
      </div>
      <div
        className="col-md-6 col-lg-4 mb-4 mb-md-5 aos-init"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="mx-xl-4 more-icon">
          <svg className={"icon"} aria-hidden="true">
            <use href="#icon-zu14"></use>
          </svg>
          <h5 className={"more-title"}>{t("title5")}</h5>
          <p className={"more-subtitle"}>{t("subtitle5")}</p>
        </div>
      </div>
      <div
        className="col-md-6 col-lg-4 mb-4 mb-md-5 aos-init"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        <div className="mx-xl-4 more-icon">
          <svg className={"icon"} aria-hidden="true">
            <use href="#icon-zu13"></use>
          </svg>
          <h5 className={"more-title"}>{t("title6")}</h5>
          <p className={"more-subtitle"}>{t("subtitle6")}</p>
        </div>
      </div>
    </div>

    <style jsx>{`
      .more-icon {
        font-size: 80px;
        text-align: center;
      }
      .more-title {
        font-size: 22px;
        font-weight: 500;
        line-height: 33px;
        color: rgba(0, 0, 0, 1);
        opacity: 1;
        margin: 10px 0px;
      }
      .more-subtitle {
        font-size: 15px;
        font-weight: 500;
        line-height: 18px;
        color: rgba(85, 90, 100, 1);
        opacity: 1;
      }
      .more-question {
        font-size: 45px;
        font-weight: bold;
        line-height: 55px;
        color: rgba(0, 0, 0, 1);
        opacity: 1;
        text-align: center;
        margin: 20px 0px 80px;
      }
    `}</style>
  </section>
);
MoreFeature.getInitialProps = async () => ({
  namespacesRequired: ["moreFeature"],
});
MoreFeature.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("moreFeature")(MoreFeature);
