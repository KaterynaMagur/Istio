import {Route, Routes, Navigate} from "react-router-dom";

import './App.css';
import {MainLayout} from "./Layouts/MainLayout/MainLayout";
import {Dashboard} from "./Layouts/Dashboard/Dashboard";
import {Goals} from "./Layouts/Goals/Goals";
import IncomeSalary from "./components/SideBar/IncomeSalary/IncomeSalary";
import IncomeDeposits from "./components/SideBar/IncomeDeposits/IncomeDeposits";
import IncomeSelling from "./components/SideBar/IncomeSelling/IncomeSelling";
import IncomeFreeMoney from "./components/SideBar/IncomeFreeMoney/IncomeFreeMoney";
import RetailProducts from "./components/SideBar/RetailProducts/RetailProducts";
import RetailPayments from "./components/SideBar/RetailPayments/RetailPayments";
import RetailClothing from "./components/SideBar/RetailClothing/RetailClothing";
import RetailVacation from "./components/SideBar/RetailVacation/RetailVacation";
import PurposesTarget1 from "./components/SideBar/PurposesTarget1/PurposesTarget1";
import PurposesTarget2 from "./components/SideBar/PurposesTarget2/PurposesTarget2";


function App() {

    return (
        <MainLayout>
            <Routes>
                <Route index path="dashboard" element={<Dashboard/>}/>
                <Route path="goals" element={<Goals/>}/>
                <Route path="IncomeSalary" element={<IncomeSalary/>}/>
                <Route path="IncomeDeposits" element={<IncomeDeposits/>}/>
                <Route path="IncomeSelling" element={<IncomeSelling/>}/>
                <Route path="IncomeFreeMoney" element={<IncomeFreeMoney/>}/>
                <Route path="RetailProducts" element={<RetailProducts/>}/>
                <Route path="RetailPayments" element={<RetailPayments/>}/>
                <Route path="RetailClothing" element={<RetailClothing/>}/>
                <Route path="RetailVacation" element={<RetailVacation/>}/>
                <Route path="PurposesTarget1" element={<PurposesTarget1/>}/>
                <Route path="PurposesTarget2" element={<PurposesTarget2/>}/>
                <Route path="*" element={<Navigate to="dashboard" replace/>}/>
            </Routes>
        </MainLayout>
    );
}

export default App;
