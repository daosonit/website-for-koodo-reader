const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: "cn",
  otherLanguages: ["en"],
  browserLanguageDetection: true,
  detection: {
    lookupCookie: "next-i18next",
    order: ["cookie", "querystring", "localStorage", "path", "subdomain"],
    caches: ["cookie"],
  },
});
