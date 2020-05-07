import React from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";

const About = ({ t }) => (
  <footer>
    <p>{t("description")}</p>
  </footer>
);

About.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("footer")(About);
