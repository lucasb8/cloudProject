import * as config from "config";

import { Mongo } from "../adapter/Mongo";
import { ExpressConfig } from "../middleware/common/Express";
import { logger } from "../util/logger";

export class Application {
  server: any;
  express: ExpressConfig;

  constructor() {
    this.express = new ExpressConfig();

    const port = config.get("express.port");

    new Mongo();

    this.server = this.express.app.listen(port, () => {
      logger.info(`
      -------------------------------------------------
      Server Started! Express: http://localhost:${port}
      -------------------------------------------------
      `);
    });
  }
}
