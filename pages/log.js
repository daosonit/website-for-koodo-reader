import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../i18n";
import Header from "../components/header";
import Footer from "../components/footer";
import changeLogs from "../configs/logs";
const Log = ({ t }) => {
  const generateLogsInfo = (isNew, item) => {
    let arr = new Array();
    let num = isNew ? item.new : item.fix;
    for (let i = 1; i <= num; i++) {
      arr.push(`${isNew ? "new" : "fix"}${i}-${item.versionTag}`);
    }
    return arr;
  };
  const renderFix = (fixLogs) => {
    return fixLogs.map((item) => {
      return (
        <div className="my-3 d-flex" key={item}>
          <div className="changelog-label label-fix mr-3">FIX</div>
          <div className="changelog-item-content">
            <span>{t(item)}</span>
          </div>
        </div>
      );
    });
  };
  const renderNew = (newLogs) => {
    return newLogs.map((item) => {
      return (
        <div className="my-3 d-flex" key={item}>
          <div className="changelog-label label-new mr-3">NEW</div>
          <div className="changelog-item-content">
            <span>{t(item)}</span>
          </div>
        </div>
      );
    });
  };
  const renderLogs = () => {
    return changeLogs.map((item, index) => {
      return (
        <div
          data-aos="fade-up"
          data-aos-delay={50 + index * 50}
          key={item.version}
          className="container mt-5 ml-sm-4 mr-sm-4"
        >
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="changelog-meta row justify-content-between align-items-center">
                <div>
                  <h3 className="version-title">
                    {"Version" + " " + item.version}
                  </h3>
                  <div className="changelog-date">{item.date}</div>
                </div>

                <div className="log-firework mr-sm-3">🎉🎉🎉</div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7  p-0 m-0 mt-4">
              {renderNew(generateLogsInfo(true, item))}
              {renderFix(generateLogsInfo(false, item))}
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <Header />
      <div className="container bg-dynamic mb-4">
        <div className="row section-title justify-content-center text-center ">
          <div className="col-md-9 col-lg-8 col-xl-7">
            <h1 className="page-title">{t("log-title")}</h1>
            <p className="page-subtitle">{t("log-subtitle")}</p>
          </div>
        </div>
        {renderLogs()}
      </div>
      <style global jsx>{`
        .version-title {
          font-size: calc(1rem + 2vw);
          font-weight: bold;
          line-height: 46px;
          color: rgba(0, 0, 0, 1);
          opacity: 0.7;
        }
        .version-detail {
          font-size: 20px;
          font-weight: 500;
          line-height: 27px;
          color: rgba(0, 0, 0, 1);
          opacity: 0.59;
        }
        .changelog-date {
          font-size: 18px;
          font-weight: 600;
          line-height: 30px;
          color: rgba(0, 0, 0, 1);
          opacity: 0.39;
        }
        .label-new {
          min-width: 50px;
          height: 23px;
          background: linear-gradient(
            166deg,
            rgba(32, 193, 141, 1) 0%,
            rgba(15, 214, 67, 1) 100%
          );
          opacity: 1;
          border-radius: 17px;
          font-size: 12px;
          font-weight: 500;
          line-height: 16px;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          line-height: 23px;
        }
        .label-fix {
          min-width: 50px;
          height: 23px;
          background: linear-gradient(
            166deg,
            rgba(49, 83, 247, 0.99) 0%,
            rgba(18, 134, 255, 1) 100%
          );
          opacity: 1;
          border-radius: 17px;
          font-size: 12px;
          font-weight: 500;
          line-height: 16px;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          line-height: 23px;
        }
        .log-firework {
          font-size: 22px;
          line-height: 30px;
          opacity: 1;
        }
        .changelog-item-content {
          font-size: 18px;
          font-weight: 500;
          line-height: 24px;
          color: rgba(0, 0, 0, 1);
          opacity: 0.59;
        }
        @media (max-width: 992px) {
          .log-firework {
            font-size: 18px;
          }
          .changelog-item-content {
            font-size: 15px;
          }
        }
      `}</style>
      <Footer />
    </div>
  );
};

Log.getInitialProps = async () => ({
  namespacesRequired: ["common", "header", "log"],
});

Log.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("log")(Log);
