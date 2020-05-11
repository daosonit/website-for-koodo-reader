import React from "react";
import PropTypes from "prop-types";
import { moreFeature } from "../configs/moreFeature";
import { withTranslation } from "../i18n";

const MoreFeature = ({ t }) => {
  const renderFeature = () => {
    return moreFeature.map((item) => {
      return (
        <div
          className="col-md-6 col-lg-4 mb-4 mb-md-5 aos-init"
          data-aos="fade-up"
          data-aos-delay={item.id * 50}
          key={item.id}
        >
          <div className="mx-xl-4 more-icon">
            <svg className={"icon"} aria-hidden="true">
              <use href={`#icon-${item.icon}`}></use>
            </svg>
            <h5 className={"more-title"}>{t(`title${item.id}`)}</h5>
            <p className={"more-subtitle"}>{t(`subtitle${item.id}`)}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <section className="container my-lg-5">
      <div className="more-question">{t("question")}</div>
      <div className="row text-center">{renderFeature()}</div>

      <style global jsx>{`
        .more-icon {
          font-size: calc(2.2rem + 2vw);
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
          font-size: calc(1rem + 2.2vw);
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
          opacity: 1;
          text-align: center;
          margin: 20px 0px 80px;
        }
        @media (max-width: 992px) {
          .more-question {
            margin: 40px 0px;
          }
          .more-subtitle {
            padding: 0px 50px;
          }
        }
      `}</style>
    </section>
  );
};
MoreFeature.getInitialProps = async () => ({
  namespacesRequired: ["moreFeature"],
});
MoreFeature.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("moreFeature")(MoreFeature);
