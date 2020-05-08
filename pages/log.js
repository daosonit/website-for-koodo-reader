import React from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";

import Header from "../components/header";
import Footer from "../components/footer";
const Log = ({ t }) => (
  <React.Fragment>
    <Header />
    <div className="container changelogs">
      <div className="row section-title justify-content-center text-center">
        <div className="col-md-9 col-lg-8 col-xl-7">
          <h1 className="display-4">Changelog</h1>
        </div>
      </div>
      <div id="1.3.11" data-aos="fade-up">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-7">
            <div className="changelog-meta">
              <h3>Version</h3>
              <div className="changelog-date">27 Apr, 2020</div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3 mb-5">
          <div className="col-lg-7">
            <div className="changelog-item d-flex">
              <div className="changelog-label label-new">new</div>
              <div className="changelog-item-content">
                <span>
                  Added the ability to show icons count in sidebar. You can turn
                  it on/off using sidebar context menu.
                </span>
              </div>
            </div>
            <div className="changelog-item d-flex">
              <div className="changelog-label label-new">new</div>
              <div className="changelog-item-content">
                <span>
                  Fixed the scrollbar issue on macOS 10.15+ with Dark Mode
                  enabled
                </span>
              </div>
            </div>
            <div className="changelog-item d-flex">
              <div className="changelog-label label-fix">fix</div>
              <div className="changelog-item-content">
                <span>
                  Fixed the compatibility issue with some color SVG icons
                </span>
              </div>
            </div>
            <div className="changelog-item d-flex">
              <div className="changelog-label label-fix">fix</div>
              <div className="changelog-item-content">
                <span>Minor UI and UX improvements</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="1.3.10" data-aos="fade-up">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-7">
            <div className="changelog-meta">
              <h3>Version</h3>
              <div className="changelog-date">2 Apr, 2020</div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3 mb-5">
          <div className="col-lg-7">
            <div className="changelog-item d-flex">
              <div className="changelog-label label-new">new</div>
              <div className="changelog-item-content">
                <span>
                  Added the ability to make window always stay on top for panel
                  mode on Windows
                </span>
              </div>
            </div>
            <div className="changelog-item d-flex">
              <div className="changelog-label label-new">new</div>
              <div className="changelog-item-content">
                <span>
                  Added option to copy selected icon path in context menu
                </span>
              </div>
            </div>
            <div className="changelog-item d-flex">
              <div className="changelog-label label-fix">fix</div>
              <div className="changelog-item-content">
                <span>Fixed the issue that pasting SVG code not working</span>
              </div>
            </div>
            <div className="changelog-item d-flex">
              <div className="changelog-label label-fix">fix</div>
              <div className="changelog-item-content">
                <span>Minor UI and UX improvements</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

Log.getInitialProps = async () => ({
  namespacesRequired: ["common", "footer", "header"],
});

Log.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Log);
