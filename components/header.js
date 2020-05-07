import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { i18n, Link, withTranslation } from "../i18n";
const Header = ({ t }) => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    var scrollFunc = function (e) {
      e = e || window.event;
      if (e.wheelDelta) {
        let offsetHeight =
          document.body.scrollTop || document.documentElement.scrollTop;
        console.log(offsetHeight);
        if (offsetHeight > 600) {
          setTheme("light");
        }else{
          setTheme("dark")
        }
      } else if (e.detail) {
        //Firefox滑轮事件
        let offsetHeight =
          document.body.scrollTop || document.documentElement.scrollTop;
        console.log(offsetHeight);
        if (offsetHeight > 600) {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }
    };
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
      //firefox
      document.addEventListener("DOMMouseScroll", scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法 //ie 谷歌
    window.onmousewheel = document.onmousewheel = scrollFunc;
  }, []);
  useEffect(() => {
    console.log(theme);
  }, [theme]);

  

  return (
    <div className="container px-0">
      <nav className="navbar navbar-expand-lg navbar-light px-0 bg-dynamic">
        <Link href="/">
          <a className="nav-link px-0">
            <svg className="icon icon-color my-2" aria-hidden="true">
              <use href="#icon-zu49"></use>
            </svg>
            <span className="logo-text mx-2">Koodo Reader</span>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  justify-content-end container">
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">{t("about")}</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/log">
                <a className="nav-link">{t("log")}</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/donate">
                <a className="nav-link">{t("donate")}</a>
              </Link>
            </li>
            <li className="nav-item mx-1">
              <a
                href="https://github.com/troyeguo/koodo-reader"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <svg className="icon my-2" aria-hidden="true">
                  <use href="#icon-github"></use>
                </svg>
              </a>
            </li>
            <li className="nav-item mx-1">
              <a
                href="https://dribbble.com/troyeguo"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <svg className="icon my-2" aria-hidden="true">
                  <use href="#icon-dribbble"></use>
                </svg>
              </a>
            </li>
            <li className="nav-item mx-1">
              <a
                href="https://www.linkedin.com/in/troyeguo"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <svg className="icon my-2" aria-hidden="true">
                  <use href="#icon-linkedin"></use>
                </svg>
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() =>
                i18n.changeLanguage(i18n.language === "en" ? "cn" : "en")
              }
              className="nav-link mr-0 pr-0"
            >
              <a className="nav-link  mr-0 pr-0">
                <svg className="icon my-2" aria-hidden="true">
                  <use href="#icon-earth"></use>
                </svg>
                <span className="ml-1 change-lang mr-0 pr-0">{t("lang")}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container px-0 header-bg"></div>
    </div>
  );
};
Header.getInitialProps = async () => ({
  namespacesRequired: ["header"],
});
Header.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation("header")(Header);
