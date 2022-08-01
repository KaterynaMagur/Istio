import {NavLink} from "react-router-dom";
import "./MainLayout.css";
import SideBar from "../../components/SideBar/SideBar";

const routes = [
  {label: "Dashboard", url: "dashboard"},
  {label: "Goals", url: "goals"}
]

export const MainLayout = ({children}) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            {routes.map(route =>
              <li key={route.url}><NavLink to={route.url}>{route.label}</NavLink></li>
            )}
          </ul>
        </nav>
        </header>
      <SideBar />
      <main>{children}</main>
    </div>
  );
};