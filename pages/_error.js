import React from "react";
import PropTypes from "prop-types";

import { withTranslation,Link } from "../i18n";

const Error = ({ statusCode, t }) => (
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="wrap-404 row " style={{ width: "100%" }}>
        <div className="col-lg-6 col-md-12 row justify-content-end">
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg"
            alt="404 error"
          />
        </div>
        <div className="content-error col-lg-6 col-md-12">
          <h1>{statusCode}</h1>
          <p className="desc">{t("error")}</p>
          <Link href="/">
            <a>
              <div>{t("back")}</div>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .wrap-404 {
          min-height: 500px;
          padding-top: 100px;
          font-weight: 500;
        }
        .wrap-404 .content-error {
          padding-top: 130px;
        }
        .wrap-404 .content-error h1 {
          color: #434e59;
          font-size: 72px;
          font-weight: 600;
          line-height: 72px;
          margin-bottom: 24px;
        }
        .wrap-404 .content-error .desc {
          color: rgba(0, 0, 0, 0.45);
          font-size: 20px;
          line-height: 28px;
          margin-bottom: 16px;
        }
      `}</style>
    </div>
  </div>
);

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null;
  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }
  return {
    namespacesRequired: ["common"],
    statusCode,
  };
};

Error.defaultProps = {
  statusCode: null,
};

Error.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Error);
