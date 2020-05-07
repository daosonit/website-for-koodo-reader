/*
  Do not copy/paste this code. It is used internally
  to manage end-to-end test suites.
*/

const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;

const localeSubpathVariations = {
  none: {},
  foreign: {
    cn: "cn",
  },
  all: {
    en: "en",
    cn: "cn",
  },
};

module.exports = new NextI18Next({
  otherLanguages: ["cn"],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
});
