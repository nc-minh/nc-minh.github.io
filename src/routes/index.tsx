import { HomePage } from "core/app/pages/HomePage";
import { PublicRoutes } from "./type";
import { routeConfig } from "./routeConfig";
import { ResumePage } from "core/app/pages/Resume";

const publicRoutes: PublicRoutes[] = [
  {
    path: routeConfig.home,
    component: HomePage,
  },
  {
    path: routeConfig.resume,
    component: ResumePage,
  },
];

export { publicRoutes };
