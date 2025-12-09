import { NavLink } from "react-router";
import styles from "./sidebar.module.css";
import { House, Search, LibraryBig } from "lucide-react";

const navigationLinks = [
  {
    label: "Home",
    icon: House,
    path: "/",
  },
  {
    label: "Search",
    icon: Search,
    path: "/search",
  },
  {
    label: "Your Library",
    icon: LibraryBig,
    path: "/library",
  },
];

const musicCategory = [
  "Running playlist",
  "21st Birthday",
  "April 2023",
  "Gym Session",
  "Classic Anthems",
  "Discover Weekly",
  "Liked from Radio",
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        {navigationLinks.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.path} className={styles.navListItem}>
              <NavLink to={item.path} className={styles.navItems}>
                <Icon /> <span>{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <ul className={styles.categoryList}>
        {musicCategory?.map((category) => {
          return (
            <li key={category} className={styles.categoryListItem}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
