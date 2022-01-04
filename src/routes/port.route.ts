import { BaseRoute } from "./base.route";
import { Application, Request, Response, NextFunction } from "express";
import { Fragment } from "../../types";
import logger from "../util/logger";

export class PortRoute extends BaseRoute {
  data: Fragment[] = [];

  constructor(app: Application, path: string) {
    super(app, "PortRoute", path);
  }

  routes() {
    this.app
      .route(this.path)
      .all((req: Request, res: Response, next: NextFunction) => {
        logger.info(`request body is ${JSON.stringify(req.body)}`);
        req.body;
        next();
      })
      .get((req, res) => {
        res.status(200).json(this.data);
      })
      .post((req, res) => {
        this.addToData(req.body);
        res.json(req.body);
      });

    return this.app;
  }

  private addToData = (args: Fragment) => {
    const { url, scope } = args;

    if (!url && !scope) return;
    this.data.push(args);
  };
}
