import React from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";

import Header from "../components/header";
import Footer from "../components/footer";
import MainFeature from "../components/mainFeature";
import MoreFeature from "../components/moreFeature";
import Ready from "../components/ready";
import Cover from "../components/cover";
const Homepage = ({ t }) => (
  <React.Fragment>
    <Cover />
    <Header />
    <MainFeature />
    <MoreFeature />
    <Ready />
    <Footer />
  </React.Fragment>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: [
    "common",
    "footer",
    "header",
    "moreFeature",
    "mainFeature",
  ],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Homepage);
