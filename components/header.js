import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import { i18n, Link, withTranslation } from "../i18n";
const Header = ({ t, router }) => {
  const [theme, setTheme] = useState("dark");
  const routeName = router.pathname;
  useEffect(() => {
    var scrollFunc = function (e) {
      e = e || window.event;
      if (e.wheelDelta) {
        let offsetHeight =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (offsetHeight > 150) {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      } else if (e.detail) {
        //Firefox滑轮事件
        let offsetHeight =
          document.body.scrollTop || document.documentElement.scrollTop;
        console.log(offsetHeight);
        if (offsetHeight > 150) {
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
    <div
      className={
        theme === "dark" && routeName === "/"
          ? "container-fluid header-wrapper froze"
          : "container-fluid header-wrapper scroll"
      }
    >
      <div className="container">
        <div className={"row justify-content-between"}>
          <div className="my-2 ">
            <Link href="/">
              {theme === "dark" && routeName === "/" ? (
                <a>
                  <svg className={"icon icon-black mt-2"} aria-hidden="true">
                    <use href="#icon-zu49"></use>
                  </svg>
                </a>
              ) : (
                <a>
                  <svg className={"icon icon-black"} aria-hidden="true">
                    <use href="#icon-zu48"></use>
                  </svg>
                  <span className="header-name">Koodo Reader</span>
                </a>
              )}
            </Link>
          </div>

          <div>
            <ul className="row">
              <li className="col-auto my-2 py-4">
                <Link href="/faq">
                  <a
                    className={
                      theme === "dark" && routeName === "/" ? "froze" : ""
                    }
                  >
                    {t("faq")}
                  </a>
                </Link>
              </li>
              <li className="col-auto my-2 py-4">
                <Link href="/log">
                  <a
                    className={
                      theme === "dark" && routeName === "/" ? "froze" : ""
                    }
                  >
                    {t("log")}
                  </a>
                </Link>
              </li>
              <li className="col-auto my-2 py-4">
                <Link href="/support">
                  <a
                    className={
                      theme === "dark" && routeName === "/" ? "froze" : ""
                    }
                  >
                    {t("support")}
                  </a>
                </Link>
              </li>
              {
                // <li className="col-auto my-2 py-4">
                //   <Link href="/donate">
                //     <a
                //       className={
                //         theme === "dark" && routeName === "/" ? "froze" : ""
                //       }
                //     >
                //       {t("donate")}
                //     </a>
                //   </Link>
                // </li>
              }
              <div className={"navbar-collapse row mr-4 ml-2"}>
                <li className="col-auto my-2 py-4">
                  <a
                    href="https://github.com/troyeguo/koodo-reader"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      theme === "dark" && routeName === "/" ? "froze" : ""
                    }
                  >
                    <svg className="icon" aria-hidden="true">
                      <use href="#icon-github"></use>
                    </svg>
                  </a>
                </li>
                <li
                  onClick={() =>
                    i18n.changeLanguage(i18n.language === "en" ? "cn" : "en")
                  }
                  className="col-auto my-2 py-4"
                >
                  <a
                    href="#"
                    className={
                      theme === "dark" && routeName === "/" ? "froze" : ""
                    }
                  >
                    <svg className="icon" aria-hidden="true">
                      <use href="#icon-earth"></use>
                    </svg>
                    <span className="change-lang mx-2">{t("lang")}</span>
                  </a>
                </li>
                {theme === "dark" && routeName === "/" ? null : (
                  <li className="col-auto py-4">
                    <Link href="/download">
                      <div
                        className={
                          "download-button row justify-content-center align-items-center"
                        }
                      >
                        <div>
                          <a>{t("download")}</a>
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .header-wrapper {
          opacity: 1;
          font-size: calc(0.9rem + 0.2vw);
          font-weight: 500;
          line-height: 24px;
          position: fixed;
          top: 0;
          z-index: 10;
          height: 93px;
        }
        .header-name {
          display: inline-block;
          font-size: 1.3rem;
          position: relative;
          bottom: 15px;
          left: 10px;
          font-weight: 500;
          opacity: 0.8;
        }
        .icon-black {
          font-size: calc(2.8rem + 2.3vw);
        }
        .froze {
          color: white;
        }
        .scroll {
          color: black;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(75, 75, 75, 0.2);
        }
        @media all and (max-width: 992px) {
          .navbar-collapse {
            display: none;
          }
          .header-name {
            display: none;
          }
          .header-wrapper {
            height: 70px;
            line-height: 10px;
          }
        }
      `}</style>
    </div>
  );
};
Header.getInitialProps = async () => ({
  namespacesRequired: ["header"],
});
Header.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation("header")(withRouter(Header));
