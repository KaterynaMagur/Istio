import {NavLink} from "react-router-dom";
import "./MainLayout.css";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const routes = [
  {label: "Dashboard", url: "dashboard"},
  {label: "Goals", url: "goals"},
]

export const MainLayout = ({children}) => {
  return (
    <div className={"main-layout"}>
      <header>
        <Header/>
        <nav>
          <ul>
            {routes.map(route =>
              <li key={route.url}><NavLink to={route.url}>{route.label}</NavLink></li>
            )}
          </ul>
        </nav>
        </header>
      <SideBar />
      <main className={"main-content"}>{children}</main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};