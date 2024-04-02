import routes from "@/util/route";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NavigationCard() {
  return (
    <div className={NavigationCardStyles.cardWrapper}>
      <ul className={NavigationCardStyles.ul}>
        {routes.map((route, index) => (
          <Link
            href={route.routeHref}
            key={index}
            className={NavigationCardStyles.navLinks}
          >
            <li className={NavigationCardStyles.listItem}>
              <div className={NavigationCardStyles.iconWrapper}>
                <FontAwesomeIcon icon={route.routeIcon as IconProp} />
              </div>
              <div className={NavigationCardStyles.contentWrapper}>
                <p className={NavigationCardStyles.content}>
                  {route.routeName}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

const NavigationCardStyles = {
  cardWrapper: "col-span-2 col-start-1 row-span-6 bg-white rounded-md shadow py-2",
  ul: " w-full h-full flex flex-col gap-4 justify-start",
  navLinks: "hover:bg-slate-300/30 transition-bg duration-[.25s]",
  listItem: " flex items-center px-2 py-1 gap-4",
  iconWrapper:
    "w-[50px] h-[50px] min-w-[50px] min-h-[50px] bg-gradient-pink-green-cross flex justify-center items-center rounded-md text-white text-lg",
  contentWrapper: "",
  content: "text-sm",
};
