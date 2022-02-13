import * as path from "path";

import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as express from "express";
import { Response } from "express";
import * as helmet from "helmet";
import { useContainer, useExpressServer } from "routing-controllers";
import { Container } from "typedi";

export class ExpressConfig {
  app: express.Express;
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(helmet());
    this.app.use(this.clientErrorHandler);
    this.setUpControllers();
  }

  setUpControllers() {
    const controllersPath = path.resolve("dist", "controller");
    useContainer(Container);
    useExpressServer(this.app, {
      controllers: [controllersPath + "/*.js"],
      cors: true,
      validation: true,
      classTransformer: true,
    });
  }

  clientErrorHandler(
    err: any,
    _: unknown,
    res: Response,
    next: express.NextFunction
  ): void {
    if (err.hasOwnProperty("thrown")) {
      res.status(err["status"]).send({ error: err.message });
    }
    next();
  }
}
