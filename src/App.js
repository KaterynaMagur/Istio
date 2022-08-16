import {Route, Routes, Navigate} from "react-router-dom";
import {useState} from "react";

import './App.css';
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {Dashboard} from "./layouts/Dashboard/Dashboard";
import {Goals} from "./layouts/Goals/Goals";
import IncomeSalary from "./components/SideBar/IncomeSalary/IncomeSalary";
import IncomeDeposits from "./components/SideBar/IncomeDeposits/IncomeDeposits";
import IncomeSelling from "./components/SideBar/IncomeSelling/IncomeSelling";
import IncomeFreeMoney from "./components/SideBar/IncomeFreeMoney/IncomeFreeMoney";
import RetailToogleMenu from "./components/SideBar/RetailToogleMenu/RetailToogleMenu";
import RetailProducts from "./components/SideBar/RetailProducts/RetailProducts";
import RetailPayments from "./components/SideBar/RetailPayments/RetailPayments";
import RetailClothing from "./components/SideBar/RetailClothing/RetailClothing";
import RetailVacation from "./components/SideBar/RetailVacation/RetailVacation";
import PurposesTarget1 from "./components/SideBar/PurposesTarget1/PurposesTarget1";
import PurposesTarget2 from "./components/SideBar/PurposesTarget2/PurposesTarget2";



function App() {
    const [incomeJanuary, setIncomeJanuary] = useState(1);
    const [incomeFebruary, setIncomeFebruary] = useState(2);
    const [incomeMarch, setIncomeMarch] = useState(3);
    const [incomeApril, setIncomeApril] = useState(4);
    const [incomeMay, setIncomeMay] = useState(5);
    const [incomeJune, setIncomeJune] = useState(6);
    const [incomeJuly, setIncomeJuly] = useState(7);
    const [incomeAugust, setIncomeAugust] = useState(8);
    const [incomeSeptember, setIncomeSeptember] = useState(9);
    const [incomeOctober, setIncomeOctober] = useState(10);
    const [incomeNovember, setIncomeNovember] = useState(11);
    const [incomeDecember, setIncomeDecember] = useState(12);
    const [incomeSalaryYear, setIncomeSalaryYear] = useState(2022);

    const [incomeDepositsJanuary, setIncomeDepositsJanuary] = useState(10);
    const [incomeDepositsFebruary, setIncomeDepositsFebruary] = useState(20);
    const [incomeDepositsMarch, setIncomeDepositsMarch] = useState(30);
    const [incomeDepositsApril, setIncomeDepositsApril] = useState(40);
    const [incomeDepositsMay, setIncomeDepositsMay] = useState(50);
    const [incomeDepositsJune, setIncomeDepositsJune] = useState(60);
    const [incomeDepositsJuly, setIncomeDepositsJuly] = useState(70);
    const [incomeDepositsAugust, setIncomeDepositsAugust] = useState(80);
    const [incomeDepositsSeptember, setIncomeDepositsSeptember] = useState(90);
    const [incomeDepositsOctober, setIncomeDepositsOctober] = useState(100);
    const [incomeDepositsNovember, setIncomeDepositsNovember] = useState(110);
    const [incomeDepositsDecember, setIncomeDepositsDecember] = useState(120);

    const [incomeSellingJanuary, setIncomeSellingJanuary] = useState(100);
    const [incomeSellingFebruary, setIncomeSellingFebruary] = useState(200);
    const [incomeSellingMarch, setIncomeSellingMarch] = useState(300);
    const [incomeSellingApril, setIncomeSellingApril] = useState(400);
    const [incomeSellingMay, setIncomeSellingMay] = useState(500);
    const [incomeSellingJune, setIncomeSellingJune] = useState(600);
    const [incomeSellingJuly, setIncomeSellingJuly] = useState(700);
    const [incomeSellingAugust, setIncomeSellingAugust] = useState(800);
    const [incomeSellingSeptember, setIncomeSellingSeptember] = useState(900);
    const [incomeSellingOctober, setIncomeSellingOctober] = useState(1000);
    const [incomeSellingNovember, setIncomeSellingNovember] = useState(1100);
    const [incomeSellingDecember, setIncomeSellingDecember] = useState(1200);

    const [incomeFreeMoneyJanuary, setIncomeFreeMoneyJanuary] = useState(1000);
    const [incomeFreeMoneyFebruary, setIncomeFreeMoneyFebruary] = useState(2000);
    const [incomeFreeMoneyMarch, setIncomeFreeMoneyMarch] = useState(3000);
    const [incomeFreeMoneyApril, setIncomeFreeMoneyApril] = useState(4000);
    const [incomeFreeMoneyMay, setIncomeFreeMoneyMay] = useState(5000);
    const [incomeFreeMoneyJune, setIncomeFreeMoneyJune] = useState(6000);
    const [incomeFreeMoneyJuly, setIncomeFreeMoneyJuly] = useState(7000);
    const [incomeFreeMoneyAugust, setIncomeFreeMoneyAugust] = useState(8000);
    const [incomeFreeMoneySeptember, setIncomeFreeMoneySeptember] = useState(9000);
    const [incomeFreeMoneyOctober, setIncomeFreeMoneyOctober] = useState(10000);
    const [incomeFreeMoneyNovember, setIncomeFreeMoneyNovember] = useState(11000);
    const [incomeFreeMoneyDecember, setIncomeFreeMoneyDecember] = useState(12000);


    return (
        <MainLayout>
            <Routes>
                <Route index path="dashboard" element={<Dashboard/>}/>
                <Route path="goals" element={<Goals/>}/>

                <Route path="IncomeSalary" element={<IncomeSalary
                    incomeJanuary={incomeJanuary}
                    incomeFebruary={incomeFebruary}
                    incomeMarch={incomeMarch}
                    incomeApril={incomeApril}
                    incomeMay={incomeMay}
                    incomeJune={incomeJune}
                    incomeJuly={incomeJuly}
                    incomeAugust={incomeAugust}
                    incomeSeptember={incomeSeptember}
                    incomeOctober={incomeOctober}
                    incomeNovember={incomeNovember}
                    incomeDecember={incomeDecember}
                    incomeSalaryYear={incomeSalaryYear}
                    setIncomeSalaryYear={setIncomeSalaryYear}
                />}/>

                <Route path="IncomeDeposits" element={<IncomeDeposits
                    incomeDepositsJanuary={incomeDepositsJanuary}
                    incomeDepositsFebruary={incomeDepositsFebruary}
                    incomeDepositsMarch={incomeDepositsMarch}
                    incomeDepositsApril={incomeDepositsApril}
                    incomeDepositsMay={incomeDepositsMay}
                    incomeDepositsJune={incomeDepositsJune}
                    incomeDepositsJuly={incomeDepositsJuly}
                    incomeDepositsAugust={incomeDepositsAugust}
                    incomeDepositsSeptember={incomeDepositsSeptember}
                    incomeDepositsOctober={incomeDepositsOctober}
                    incomeDepositsNovember={incomeDepositsNovember}
                    incomeDepositsDecember={incomeDepositsDecember}
                />}/>


                <Route path="IncomeSelling" element={<IncomeSelling
                    incomeSellingJanuary={incomeSellingJanuary}
                    incomeSellingFebruary={incomeSellingFebruary}
                    incomeSellingMarch={incomeSellingMarch}
                    incomeSellingApril={incomeSellingApril}
                    incomeSellingMay={incomeSellingMay}
                    incomeSellingJune={incomeSellingJune}
                    incomeSellingJuly={incomeSellingJuly}
                    incomeSellingAugust={incomeSellingAugust}
                    incomeSellingSeptember={incomeSellingSeptember}
                    incomeSellingOctober={incomeSellingOctober}
                    incomeSellingNovember={incomeSellingNovember}
                    incomeSellingDecember={incomeSellingDecember}
                />}/>

                <Route path="IncomeFreeMoney" element={<IncomeFreeMoney
                    incomeFreeMoneyJanuary={incomeFreeMoneyJanuary}
                    incomeFreeMoneyFebruary={incomeFreeMoneyFebruary}
                    incomeFreeMoneyMarch={incomeFreeMoneyMarch}
                    incomeFreeMoneyApril={incomeFreeMoneyApril}
                    incomeFreeMoneyMay={incomeFreeMoneyMay}
                    incomeFreeMoneyJune={incomeFreeMoneyJune}
                    incomeFreeMoneyJuly={incomeFreeMoneyJuly}
                    incomeFreeMoneyAugust={incomeFreeMoneyAugust}
                    incomeFreeMoneySeptember={incomeFreeMoneySeptember}
                    incomeFreeMoneyOctober={incomeFreeMoneyOctober}
                    incomeFreeMoneyNovember={incomeFreeMoneyNovember}
                    incomeFreeMoneyDecember={incomeFreeMoneyDecember}
                />}/>

                <Route path="RetailToogleMenu" element={<RetailToogleMenu/>}/>
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
