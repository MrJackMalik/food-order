import { Link, Outlet } from "react-router-dom";
import "./HomePage.scss";
export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="profile d-flex justify-content-space-between align-item-center bg-light">
        <div className="">dfdfdf</div>
        <div className="">
          <input type="text" />
        </div>
      </div>
      <div className="d-lex bg-success p-3">
        <Link className="text-white me-4 text-decoration-none" to="/">
          Hot dishes
        </Link>
        <Link className="text-white me-4 text-decoration-none" to="cold">
          Cold dishes
        </Link>
        <Link className="text-white me-4 text-decoration-none" to="soup">
          Soup
        </Link>
        <Link className="text-white me-4 text-decoration-none" to="grill">
          Grill
        </Link>
        <Link className="text-white me-4 text-decoration-none" to="appertizer">
          Appertizer
        </Link>
        <Link className="text-white me-4 text-decoration-none" to="dessert">
          Dessert
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
