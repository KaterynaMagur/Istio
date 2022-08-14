import {NavLink} from "react-router-dom";
import "./MainLayout.css";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useState} from 'react';

{/* const routes = [
  {label: "Dashboard", url: "dashboard"},
  {label: "Goals", url: "goals"},
] */
}

export const MainLayout = ({children}) => {
    const [isSideBar, setSidebar] = useState(true);

    const handleToggleSideBar = () => {
        setSidebar(!isSideBar);
    };

    return (
        <div className={"main-layout"}>
            <header>
                <Header toggleSideBar={handleToggleSideBar}/>
                {/* <nav>
          <ul>
            {routes.map(route =>
              <li key={route.url}><NavLink to={route.url}>{route.label}</NavLink></li>
            )}
          </ul>
        </nav> */}
            </header>
            {isSideBar ? <SideBar/> : null}
            <main className={`main-content ${isSideBar ? "" : "without-sidebar"}`}>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};