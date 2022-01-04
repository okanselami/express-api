import { Application } from "express";

export abstract class BaseRoute {
  app: Application;
  name: string;
  path: string;

  constructor(app: Application, name: string, path: string) {
    this.app = app;
    this.name = name;
    this.path = path;

    this.routes();
  }
  getName() {
    return this.name;
  }

  abstract routes(): Application;
}
