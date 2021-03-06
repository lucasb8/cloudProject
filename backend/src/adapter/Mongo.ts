import * as path from "path";

import * as config from "config";
import { Connection, createConnection } from "typeorm";

import { logger } from "../util/logger";

export class Mongo {
  public static connection: Connection;

  constructor() {
    this.createConnection();
  }

  async createConnection() {
    try {
      Mongo.connection = await createConnection({
        type: "mongodb",
        host: process.env.mongo_host,
        port: parseInt(config.get("mongo.port")),
        database: config.get("mongo.database").toString(),
        synchronize: true,
        entities: [path.resolve("dist", "entity") + "/*.js"],
      });
      logger.info(`
      ------------------------------
      Mongodb Connection Established
      ------------------------------
      `);
    } catch (err) {
      logger.error(err);
    }
  }
}
