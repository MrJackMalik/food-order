import { Link, Route, Routes } from "react-router-dom";
import {
  DashboardIcon,
  HomepageIcon,
  KnowMoreIcon,
  LogoIcon,
  LogOutIcon,
  NotificationsIcon,
  PaymentIcon,
  SettingsIcon,
} from "../../assets/svg-img/svg";
import { Appertizer } from "../../layout/Appertizer/Appertizer";
import { ColdDishes } from "../../layout/ColdDishes/ColdDishes";
import { Dessert } from "../../layout/Dessert/Dessert";
import { Grill } from "../../layout/Grill/Grill";
import { HotDishes } from "../../layout/HotDishes/HotDishes";
import { Soup } from "../../layout/Soup/Soup";
import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { Homepage } from "../../pages/Homepage/Homepage";
import { KnowMore } from "../../pages/KnowMore/KnowMore";
import { Logo } from "../../pages/Logo/Logo";
import { LogOut } from "../../pages/LogOut/LogOut";
import { Notifications } from "../../pages/Notifications/Notifications";
import { Payment } from "../../pages/Payment/Payment";
import { Settings } from "../../pages/Settings/Settings";
import "./sidebar.scss";
export const Sidebar = () => {
  return (
    <div className="row">
      <div className="col-2 sidebar-bg py-1 px-2">
        <Link
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/logo"
          id="logo"
        >
          <span>
            <LogoIcon />
          </span>
        </Link>
        <Link className={({ isActive }) => (isActive ? "active" : "")} to="/">
          <span>
            <HomepageIcon />
          </span>
        </Link>
        <Link
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/payment"
        >
          <span>
            <PaymentIcon />
          </span>
        </Link>
        <Link
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/dashboard"
        >
          <span>
            <DashboardIcon />
          </span>
        </Link>
        <Link
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/knowmore"
        >
          <span>
            <KnowMoreIcon />
          </span>
        </Link>
        <Link
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/notifications"
        >
          <span>
            <NotificationsIcon />
          </span>
        </Link>
        <Link
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/settings"
        >
          <span>
            <SettingsIcon />
          </span>
        </Link>
        <Link
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/logout"
        >
          <span>
            <LogOutIcon />
          </span>
        </Link>
      </div>

      <div className="col-10">
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route index element={<HotDishes />} />
            <Route path="cold" element={<ColdDishes />} />
            <Route path="soup" element={<Soup />} />
            <Route path="grill" element={<Grill />} />
            <Route path="appertizer" element={<Appertizer />} />
            <Route path="dessert" element={<Dessert />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/knowmore" element={<KnowMore />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </div>
  );
};
