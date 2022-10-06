import {Route, Routes, Navigate} from "react-router-dom";

import './App.css';
import {Goals} from "./layouts/Goals/Goals";
import {Dashboard} from "./layouts/Dashboard/Dashboard";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import IncomeSalary from "./components/SideBar/IncomeSalary/IncomeSalary";
import IncomeSelling from "./components/SideBar/IncomeSelling/IncomeSelling";
import IncomeDeposits from "./components/SideBar/IncomeDeposits/IncomeDeposits";
import IncomeFreeMoney from "./components/SideBar/IncomeFreeMoney/IncomeFreeMoney";
import RetailToogleMenu from "./components/SideBar/RetailToogleMenu/RetailToogleMenu";
import RetailProducts from "./components/SideBar/RetailProducts/RetailProducts";
import RetailPayments from "./components/SideBar/RetailPayments/RetailPayments";
import RetailClothing from "./components/SideBar/RetailClothing/RetailClothing";
import RetailVacation from "./components/SideBar/RetailVacation/RetailVacation";
import PurposesTarget1 from "./components/SideBar/PurposesTarget1/PurposesTarget1";
import PurposesTarget2 from "./components/SideBar/PurposesTarget2/PurposesTarget2";
import IncomeToogleMenu from "./components/SideBar/IncomeToogleMenu/IncomeToogleMenu";
import DataProvider from "./context/DataProvider";
import moment from "moment/moment";

moment.locale('ua', {
    months: 'Січень_Лютий_Березень_Квітень_Травень_Червень_Липень_Серпень_Вересень_Жовтень_Листопад_грудень'.split('_'),
    monthsShort: 'Січ._Лют._Бер_Квт._Тра_Черв_Лип._Серп_Вер._Жов._Лис._Гру.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Неділя_Понеділок_Вівторок_Середа_Чертвер_Пятниця_Субота'.split('_'),
    weekdaysShort: 'Нед._Пон._Вівт._Сер._Четв._Пятн._Суб.'.split('_'),
    weekdaysMin: 'Не_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Сьоодні в] LT',
        nextDay: '[Завтра в] LT',
        nextWeek: 'dddd [в] LT',
        lastDay: '[Вчора в] LT',
        lastWeek: 'dddd [останній в] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'в %s',
        past: 'є %s',
        s: 'декілька секунд',
        m: 'одна хвилина',
        mm: '%d хвилини',
        h: 'одна година',
        hh: '%d години',
        d: 'один день',
        dd: '%d днів',
        M: 'один місяць',
        MM: '%d місяців',
        y: 'один рік',
        yy: '%d років'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function (number) {
        return number + (number === 1 ? 'er' : 'e');
    },
    meridiemParse: /PD|MD/,
    isPM: function (input) {
        return input.charAt(0) === 'M';
    },
    // In case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example).
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
    // },
    meridiem: function (hours, minutes, isLower) {
        return hours < 12 ? 'PD' : 'MD';
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4  // Used to determine first week of the year.
    }
});

function App() {

    return (
        <DataProvider>
            <MainLayout>
                <Routes>
                    <Route index path="dashboard" element={<Dashboard/>}/>
                    <Route path="goals" element={<Goals/>}/>
                    <Route path="IncomeSalary" element={<IncomeSalary/>}/>
                    <Route path="IncomeDeposits" element={<IncomeDeposits/>}/>
                    <Route path="IncomeSelling" element={<IncomeSelling/>}/>
                    <Route path="IncomeFreeMoney" element={<IncomeFreeMoney/>}/>
                    <Route path="IncomeToogleMenu" element={<IncomeToogleMenu/>}/>
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
        </DataProvider>
    );
}

export default App;
