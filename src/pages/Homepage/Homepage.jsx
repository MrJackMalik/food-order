import { Link, Outlet } from "react-router-dom";
import "./HomePage.scss";
export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="profile d-flex justify-content-space-between align-item-center">
        <div className="">
          <h3>Jaegor Resto</h3>
          <p>Tuesday, 2 Feb 2021</p>
        </div>
        <div className=""></div>
      </div>
      <div className="col p-3">
        <Link
          className=" col-2 text-white me-4 text-decoration-none food-types"
          to="/"
        >
          Hot dishes
        </Link>
        <Link
          className="col-2 text-white me-4 text-decoration-none food-types"
          to="cold"
        >
          Cold dishes
        </Link>
        <Link
          className="col-2 text-white me-4 text-decoration-none food-types"
          to="soup"
        >
          Soup
        </Link>
        <Link
          className="col-2 text-white me-4 text-decoration-none food-types"
          to="grill"
        >
          Grill
        </Link>
        <Link
          className="col-2 text-white me-4 text-decoration-none food-types"
          to="appertizer"
        >
          Appertizer
        </Link>
        <Link
          className="col-2 text-white me-4 text-decoration-none food-types"
          to="dessert"
        >
          Dessert
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
