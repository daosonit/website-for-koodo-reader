import React from "react";
import PropTypes from "prop-types";
import { downloadOptions } from "../configs/download";
import { withTranslation, Link } from "../i18n";

const DownloadDemo = ({ t }) => {
  const renderDownload = () => {
    return downloadOptions.map((item) => {
      return (
        <div
          className="download-item col-md-6 col-lg-3 mb-4 mb-md-5 aos-init row my-lg-5 justify-content-center ml-1"
          data-aos="fade-up"
          data-aos-delay={50 + item.id * 50}
          key={item.id}
        >
          <svg className={"icon download-icon col-12 mt-4"} aria-hidden="true">
            <use href={`#icon-${item.icon}`}></use>
          </svg>
          <h1 className="download-title col-12 my-2">{item.title}</h1>
          <a
            href="https://github.com/troyeguo/koodo-reader/releases/download/v0.1.7/Koodo.Reader-Web-Setup-0.1.7.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="download-button row justify-content-center align-items-center col-9 m-4">
              {item.id === 4 ? t("preview") : t("download")}
            </div>
          </a>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="row justify-content-between">{renderDownload()}</div>
      <style global jsx>{`
        .download-icon {
          font-size: calc(1rem + 4vw);
        }
        .download-title {
          width: 84px;
          height: 27px;
          font-size: 20px;
          font-family: Segoe UI;
          font-weight: 600;
          line-height: 27px;
          color: rgba(0, 0, 0, 1);
          opacity: 1;
          text-align: center;
        }
        .download-item:hover {
          box-shadow: 0 0 12px rgba(75, 75, 75, 0.2);
        }
      `}</style>
    </div>
  );
};
DownloadDemo.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
DownloadDemo.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(DownloadDemo);
