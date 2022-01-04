import { app, routes } from "./routes/routes";

import logger from "./util/logger";

const PORT = 3000;

app.listen(PORT, () => {
  routes.forEach((route) => {
    logger.info(`Routes setted ${route.getName()}`);
  });

  logger.info(`Express app is running`);
});
