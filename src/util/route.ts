import TRoute from "@/types/routeType";
import {
  faBook,
  faHistory,
  faHouse,
  faPlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const routes: TRoute[] = [
  {
    routeName: "Home",
    routeHref: "/home",
    routeIcon: faHouse,
  },
  {
    routeName: "History",
    routeHref: "/history",
    routeIcon: faHistory,
  },
  {
    routeName: "My Courses",
    routeHref: "/courses",
    routeIcon: faBook,
  },
  {
    routeName: "New Session",
    routeHref: "/sessionStart",
    routeIcon: faPlus,
  },
  {
    routeName: "Logout",
    routeHref: "/",
    routeIcon: faRightFromBracket,
  },
];

export default routes;
