import React from "react";
import PropTypes from "prop-types";

import { withTranslation, Link } from "../i18n";

const Ready = ({ t }) => (
  <section className="container-fluid question-wrapper">
    <div className="container">
      <div className="row section-title justify-content-center text-center">
        <div className="col-md-11 col-lg-10 col-xl-9">
          <h3 className="question aos-init" data-aos="fade-up">
            {t("ready")}
          </h3>
          <div className="ads aos-init" data-aos="fade-up" data-aos-delay="50">
            {t("ads")}
          </div>
        </div>
        <div
          className="container aos-init"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row justify-content-center mt-4">
            <div className="row download-button col-2 m-3 justify-content-center align-items-center">
              <Link href="/download">
                <div>{t("download")}</div>
              </Link>
            </div>
            <div className="row preview-button col-2 m-3 justify-content-center align-items-center">
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
    <style jsx>{`
      .question-wrapper {
        height: 334px;
        background: rgba(255, 226, 183, 1);
        opacity: 1;
        margin-bottom: 80px;
      }
      .question {
        font-size: 40px;
        font-weight: bold;
        line-height: 80px;
        color: rgba(0, 0, 0, 1);
        opacity: 0.83;
        text-align: center;
        margin-top: 50px;
      }
      .ads {
        font-size: 22px;
        font-weight: 500;
        color: rgba(85, 90, 100, 1);
        opacity: 1;
        text-align: center;
      }
      .download-button {
        width: 175px;
        height: 46px;
        background: rgba(43, 38, 31, 1);
        opacity: 1;
        border-radius: 23px;
        width: 104px;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        color: rgba(255, 226, 183, 1);
        opacity: 1;
      }
      .preview-button {
        width: 175px;
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
  </section>
);
Ready.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
Ready.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Ready);
