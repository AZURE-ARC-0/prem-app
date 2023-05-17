import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import brandLogo from "../../assets/images/brand-logo.svg";
import {
  DashboardIcon,
  Documentation,
  LeftArrow,
  Pipeline,
  Services,
  Setting,
} from "../Icon";

const Sidebar = ({ setSidebarToggle, sidebarToggle }: any) => {

  return (
    <div className={clsx(sidebarToggle && "sidebar-toggle", "sidebar-main")}>
      <div className="pt-[18px] pb-[70px] flex-col px-2 flex h-screen sidebar">
        <div className={clsx(sidebarToggle ? "flex-col flex" : "flex")}>
          <img className="sidebar__logo" src={Logo} alt="logo" />
          <img
            className={clsx(sidebarToggle ? "mx-auto" : "hidden")}
            src={brandLogo}
            alt="brandLogo"
          />
        </div>
        <ul className="my-6 overflow-y-auto flex-grow scrollbar-none">
          <li>
            <NavLink
              to={`/`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <DashboardIcon className={clsx(!sidebarToggle && "mr-4")} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/service`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Services className={clsx(!sidebarToggle && "mr-4")} />
              <span>Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/pipeline`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Pipeline className={clsx(!sidebarToggle && "mr-4")} />
              <span>Pipeline</span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <div className="border-t border-timberwolf opacity-30 -mx-2 pt-[13px]"></div>
          <li>
            <Link to={`/`}>
              <Documentation className={clsx(!sidebarToggle && "mr-4")} />
              <span>Documentation</span>
            </Link>
          </li>
          <li>
            <Link to={`/`}>
              <Setting
                className={clsx(!sidebarToggle && "mr-4", "svg-stroke")}
              />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-toggle__btn">
        <button
          onClick={() => setSidebarToggle(!sidebarToggle)}
          className="bg-Onyx px-[8.4px] mr-3 -ml-[6px] py-[10px] rounded-md"
        >
          <LeftArrow />
        </button>
        <span>Close Sidebar</span>
      </div>
    </div>
  );
};

export default Sidebar;
