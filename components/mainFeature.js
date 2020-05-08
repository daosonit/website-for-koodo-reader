import React from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";

const MainFeature = ({ t }) => (
  <section className="container my-5">
    <div className="container my-5">
      <div className="row align-items-center justify-content-around text-center text-lg-left">
        <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 order-lg-2 pl-lg-5 pl-xl-0">
          <h2 className="h1">{t("title1")}</h2>
          <p className="lead">{t("subtitle1")}</p>
        </div>
        <div
          className="col-md-9 col-lg-6 col-xl-5 order-lg-1 aos-init aos-animate"
          data-aos="fade-right"
        >
          <img
            src="/images/image1.svg"
            alt="Take notes while reading"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
    <div className="divider"></div>
    <div className="container my-5">
      <div className="row align-items-center justify-content-around text-center text-lg-left">
        <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 pl-lg-5 pl-xl-0">
          <div>
            <h2 className="h1">{t("title2")}</h2>
            <p className="lead">{t("subtitle2")}</p>
          </div>
        </div>
        <div
          className="col-md-9 col-lg-6 col-xl-5 feature-image  aos-init aos-animate"
          data-aos="fade-left"
        >
          <img
            src="/images/image2.svg"
            alt="Highlight your favorite parts"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
    <div className="divider"></div>
    <div className="container my-5">
      <div className="row align-items-center justify-content-around text-center text-lg-left">
        <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 order-lg-2 pl-lg-5 pl-xl-0">
          <h2 className="h1">{t("title3")}</h2>
          <p className="lead">{t("subtitle3")}</p>
        </div>
        <div
          className="col-md-9 col-lg-6 col-xl-5 order-lg-1 aos-init aos-animate"
          data-aos="fade-right"
        >
          <img
            src="/images/image3.svg"
            alt="Take notes while reading"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
    <div className="divider"></div>
    <div className="container my-5">
      <div className="row align-items-center justify-content-around text-center text-lg-left">
        <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 pl-lg-5 pl-xl-0">
          <div>
            <h2 className="h1">{t("title4")}</h2>
            <p className="lead">{t("subtitle4")}</p>
          </div>
        </div>
        <div
          className="col-md-9 col-lg-6 col-xl-5 feature-image aos-init aos-animate"
          data-aos="fade-left"
        >
          <img
            src="/images/image4.svg"
            alt="Organize books with shelfs"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
    <div className="divider"></div>
    <style jsx>{`
      .h1 {
        font-size: 35px;
        font-weight: bold;
        line-height: 45px;
        color: rgba(0, 0, 0, 1);
        opacity: 1;
      }
      .lead {
        font-size: 18px;
        font-weight: 500;
        line-height: 20px;
        color: rgba(0, 0, 0, 1);
        opacity: 0.55;
        margin-top: 15px;
      }
    `}</style>
  </section>
);
MainFeature.getInitialProps = async () => ({
  namespacesRequired: ["mainFeature"],
});
MainFeature.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("mainFeature")(MainFeature);
