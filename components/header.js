import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import { i18n, Link, withTranslation } from "../i18n";
import HeaderOption from "./headerOption";
const Header = ({ t, router }) => {
  const [theme, setTheme] = useState("dark");
  const routeName = router.pathname;
  const [collapse, setCollapse] = useState(true);
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
        <div className="row justify-content-between">
          <div className="my-2 ">
            <Link href="/">
              {theme === "dark" && routeName === "/" ? (
                <a>
                  <svg className="icon icon-black" aria-hidden="true">
                    <use href="#icon-zu49"></use>
                  </svg>
                </a>
              ) : (
                <a>
                  <svg className="icon icon-black" aria-hidden="true">
                    <use href="#icon-zu48"></use>
                  </svg>

                  <span className="header-name">Koodo Reader</span>
                </a>
              )}
            </Link>
          </div>

          <div style={{ position: "relative" }}>
            <ul className={"row header-collapse mt-lg-4 mr-0"}>
              {!collapse ? <HeaderOption theme={theme} /> : null}
              <div className=" shadow-nav">
                <HeaderOption theme={theme} />
              </div>
              <svg
                className="icon icon-more"
                aria-hidden="true"
                onClick={() => {
                  setCollapse(!collapse);
                }}
              >
                <use href="#icon-more"></use>
              </svg>

              <div className={"row ml-3"}>
                {theme === "dark" && routeName === "/" ? null : (
                  <li className="col-auto">
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
          font-weight: 600;
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
          font-weight: 600;
          opacity: 0.8;
        }
        .icon-more {
          font-size: 0;
          cursor: pointer;
          margin-top: 20px;
        }
        .icon-black {
          font-size: 70px;
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
          .header-wrapper {
            height: 70px;
            line-height: 10px;
            position: absolute;
          }
          .shadow-nav {
            display: none;
          }
          .download-button {
            display: none;
          }
          .icon-more {
            font-size: 30px;
            position: absolute;
            top: 10px;
            right: 10px;
            margin-top: 0px;
          }
          .icon-black {
            font-size: 50px;
            visibility: true;
          }
          .header-name {
            display: none;
          }
          .header-collapse {
            background-color: ${theme === "light" || routeName !== "/"
              ? "rgba(250,250,250,1)"
              : "rgba(0, 0, 0, 1)"};
            text-align: center;
            line-height: 40px;
            width: 200px;
            border-radius: 10px;
            box-shadow: 0 0 8px rgba(75, 75, 75, 0.2);
            position: relative;
            top: 10px;
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
