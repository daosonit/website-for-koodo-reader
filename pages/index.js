import React from "react";
import PropTypes from "prop-types";

import { i18n, Link, withTranslation } from "../i18n";

import Header from "../components/header";
import Footer from "../components/footer";

const Homepage = ({ t }) => (
  <React.Fragment>
    <main>
      <Header title={t("h1")} />
      <div>
        <button
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "de" : "en")
          }
        >
          {t("change-locale")}
        </button>
        <Link href="/second-page">
          <button type="button">{t("to-second-page")}</button>
        </Link>
        <div className="container">
          <div className="row">
            <div className="col-sm">One of three columns</div>
            <div className="col-sm">One of three columns</div>
            <div className="col-sm">One of three columns</div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </React.Fragment>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common", "footer"],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Homepage);
