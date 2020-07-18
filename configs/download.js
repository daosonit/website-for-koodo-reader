const changeLogs = require("./logs");
const version = changeLogs[0].version;
const downloadOptions = [
  {
    id: 1,
    icon: "windows",
    title: "Windows",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-Web-Setup-${version}.exe`,
  },
  {
    id: 2,
    icon: "mac",
    title: "macOS",
    url: `https://github.com/troyeguo/koodo-reader/releases/download/v${version}/Koodo-Reader-${version}.dmg`,
  },
  {
    id: 3,
    icon: "web",
    title: "Web",
    url: "https://reader.960960.xyz",
  },
];
module.exports = downloadOptions;
