import { app } from "../app";

import { PortRoute } from "./port.route";
import { BaseRoute } from "./base.route";

const routes: Array<BaseRoute> = [];

// Initilize routes
const portRoute = new PortRoute(app, "/port");

routes.push(portRoute);

export { app, routes };
