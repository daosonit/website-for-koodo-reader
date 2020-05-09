import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../i18n";
import Header from "../components/header";
import Footer from "../components/footer";
import { aboutInfo } from "../configs/faq";
const FAQ = ({ t }) => {
  const renderFaq = () => {
    return aboutInfo.map((item) => {
      return (
        <div
          className="faq-item row align-items-center aos-init "
          data-aos="fade-up"
          data-offset="200"
          key={item.id}
        >
          <div className="row justify-content-around align-items-center ">
            <div
              className="avatar col-auto row justify-content-center align-items-center"
              style={{
                backgroundImage: `linear-gradient(150deg,${item.color1} 0%,${item.color2} 90%)`,
              }}
            >
              <svg className="icon" aria-hidden="true">
                <use href={`#icon-${item.icon}`}></use>
              </svg>
            </div>
            <div className="col-10">
              <h3 className="faq-question">{t(`question${item.id}`)}</h3>
              <p className="faq-answer">{t(`answer${item.id}`)}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <Header />
      <section className="bg-dynamic pb-5">
        <div className="container mt-4">
          <div className="row section-title justify-content-center text-center">
            <div className="col-md-9 col-lg-8 col-xl-7">
              <h1 className="page-title">{t("title")}</h1>
              <p className="page-subtitle">{t("subtitle")}</p>
            </div>
          </div>
          <div className="row justify-content-center mt-4">{renderFaq()}</div>
        </div>
      </section>
      <style global jsx>{`
        .avatar {
          width: calc(2rem + 4vw);
          height: calc(2rem + 4vw);
          border-radius: 50%;
          opacity: 1;
          font-size: calc(2rem + 1vw);
          position: relative;
          right: calc(1rem + 1.5vw);
        }
        .faq-item {
          width: 759px;
          height: 226px;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(232, 232, 232, 1);
          opacity: 0.23;
          border-radius: 21px;
          margin: 40px 20px 0;
        }

        .faq-question {
          font-size: calc(1rem + 1vw);
          font-weight: 600;
          line-height: 35px;
          color: rgba(0, 0, 0, 0.7);
          opacity: 1;
        }
        .faq-answer {
          font-size: calc(0.6rem + 0.6vw);
          font-weight: 500;
          line-height: 24px;
          color: rgba(0, 0, 0, 1);
          opacity: 0.59;
          margin-top: 10px;
        }
        @media (max-width: 992px) {
          .avatar {
            display: none;
          }
        }
      `}</style>
      <Footer />
    </div>
  );
};
FAQ.getInitialProps = async () => ({
  namespacesRequired: ["common", "header", "faq"],
});
FAQ.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("faq")(FAQ);
