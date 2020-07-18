const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require("next-i18next/middleware").default;
const compression = require("compression");
const nextI18next = require("./i18n");
const download = require("./configs/download");
const logs = require("./configs/logs");
const port = process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3001;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();
const cors = require("cors");
(async () => {
  await app.prepare();
  const server = express();
  server.use(cors());
  await nextI18next.initPromise;
  server.use(nextI18NextMiddleware(nextI18next));
  server.use(compression());
  server.get("/update", (req, res) => {
    res.send({ download: download, log: logs[0] });
  });
  server.get("*", (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
