import TRoute from "@/types/routeType";
import routes from "./route";

export default function getRoute(routeName: string): TRoute {
  const route = routes.find((route) => route.routeName === routeName) as TRoute;
  return route;
}
