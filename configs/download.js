import { changeLogs } from "./logs";
const version = changeLogs[changeLogs.length - 1].version;
export const downloadOptions = [
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
