import React, {useContext, useState} from 'react';
import {createContext} from "react";
import moment from "moment";


export const DataContext = createContext(null);
export  const useData = () => useContext(DataContext);


const DataProvider = ({children}) => {
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

    const [incomeSumJanuary, setIncomeSumJanuary] = useState(
        incomeJanuary + incomeDepositsJanuary + incomeSellingJanuary + incomeFreeMoneyJanuary
    );
    const [incomeSumFebruary, setIncomeSumFebruary] = useState(
        incomeFebruary + incomeDepositsFebruary + incomeSellingFebruary + incomeFreeMoneyFebruary
    );
    const [incomeSumMarch, setIncomeSumMarch] = useState(
        incomeMarch + incomeDepositsMarch + incomeSellingMarch + incomeFreeMoneyMarch
    );
    const [incomeSumApril, setIncomeSumApril] = useState(
        incomeApril + incomeDepositsApril + incomeSellingApril + incomeFreeMoneyApril
    );
    const [incomeSumMay, setIncomeSumMay] = useState(
        incomeMay + incomeDepositsMay + incomeSellingMay + incomeFreeMoneyMay
    );
    const [incomeSumJune, setIncomeSumJune] = useState(
        incomeJune + incomeDepositsJune + incomeSellingJune + incomeFreeMoneyJune
    );
    const [incomeSumJuly, setIncomeSumJuly] = useState(
        incomeJuly + incomeDepositsJuly + incomeSellingJuly + incomeFreeMoneyJuly
    );
    const [incomeSumAugust, setIncomeSumAugust] = useState(
        incomeAugust + incomeDepositsAugust + incomeSellingAugust + incomeFreeMoneyAugust
    );
    const [incomeSumSeptember, setIncomeSumSeptember] = useState(
        incomeSeptember + incomeDepositsSeptember + incomeSellingSeptember + incomeFreeMoneySeptember
    );
    const [incomeSumOctober, setIncomeSumOctober] = useState(
        incomeOctober + incomeDepositsOctober + incomeSellingOctober + incomeFreeMoneyOctober
    );
    const [incomeSumNovember, setIncomeSumNovember] = useState(
        incomeNovember + incomeDepositsNovember + incomeSellingNovember + incomeFreeMoneyNovember
    );
    const [incomeSumDecember, setIncomeSumDecember] = useState(
        incomeDecember + incomeDepositsDecember + incomeSellingDecember + incomeFreeMoneyDecember
    );

    const monthsIncome = [
        {
            month: 'Січень',
            income: incomeSumJanuary,
        },
        {
            month: 'Лютий',
            income: incomeSumFebruary,
        },
        {
            month: 'Березень',
            income: incomeSumMarch,
        },
        {
            month: 'Квітень',
            income: incomeSumApril,
        },
        {
            month: 'Травень',
            income: incomeSumMay,
        },
        {
            month: 'Червень',
            income: incomeSumJune,
        },
        {
            month: 'Липень',
            income: incomeSumJuly,
        },
        {
            month: 'Серпень',
            income: incomeSumAugust,
        },
        {
            month: 'Вересень',
            income: incomeSumSeptember,
        },
        {
            month: 'Жовтень',
            income: incomeSumOctober,
        },
        {
            month: 'Листопад',
            income: incomeSumNovember,
        },
        {
            month: 'Грудень',
            income: incomeSumDecember,
        }
    ];
    const incomeSalaryMonths = [
        {
            month: 'Січень',
            salary: incomeJanuary,
            deposit: incomeDepositsJanuary,
            selling: incomeSellingJanuary,
            freeMoney: incomeFreeMoneyJanuary,
            summa: incomeSumJanuary,

        },
        {
            month: 'Лютий',
            salary: incomeFebruary,
            deposit: incomeDepositsFebruary,
            selling: incomeSellingFebruary,
            freeMoney: incomeFreeMoneyFebruary,
            summa: incomeSumFebruary
        },
        {
            month: 'Березень',
            salary: incomeMarch,
            deposit: incomeDepositsMarch,
            selling: incomeSellingMarch,
            freeMoney: incomeFreeMoneyMarch,
            summa: incomeSumMarch
        },
        {
            month: 'Квітень',
            salary: incomeApril,
            deposit: incomeDepositsApril,
            selling: incomeSellingApril,
            freeMoney: incomeFreeMoneyApril,
            summa: incomeSumApril
        },

        {
            month: 'Травень',
            salary: incomeMay,
            deposit: incomeDepositsMay,
            selling: incomeSellingMay,
            freeMoney: incomeFreeMoneyMay,
            summa: incomeSumMay
        },
        {
            month: 'Червень',
            salary: incomeJune,
            deposit: incomeDepositsJune,
            selling: incomeSellingJune,
            freeMoney: incomeFreeMoneyJune,
            summa: incomeSumJune
        },
        {
            month: 'Липень',
            salary: incomeJuly,
            deposit: incomeDepositsJuly,
            selling: incomeSellingJuly,
            freeMoney: incomeFreeMoneyJuly,
            summa: incomeSumJuly
        },
        {
            month: 'Серпень',
            salary: incomeAugust,
            deposit: incomeDepositsAugust,
            selling: incomeSellingAugust,
            freeMoney: incomeFreeMoneyAugust,
            summa: incomeSumAugust
        },
        {
            month: 'Вересень',
            salary: incomeSeptember,
            deposit: incomeDepositsSeptember,
            selling: incomeSellingSeptember,
            freeMoney: incomeFreeMoneySeptember,
            summa: incomeSumSeptember
        },
        {
            month: 'Жовтень',
            salary: incomeOctober,
            deposit: incomeDepositsOctober,
            selling: incomeSellingOctober,
            freeMoney: incomeFreeMoneyOctober,
            summa: incomeSumOctober
        },
        {
            month: 'Листопад',
            salary: incomeNovember,
            deposit: incomeDepositsNovember,
            selling: incomeSellingNovember,
            freeMoney: incomeFreeMoneyNovember,
            summa: incomeSumNovember
        },
        {
            month: 'Грудень',
            salary: incomeDecember,
            deposit: incomeDepositsDecember,
            selling: incomeSellingDecember,
            freeMoney: incomeFreeMoneyDecember,
            summa: incomeSumDecember
        }

    ]

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


    const findCurrentMonthValue = (currentSearch) => {
        return (currentSearch.month === String(now));
    }

    const now = moment().format('MMMM');
    const searchNow = monthsIncome.find(findCurrentMonthValue);


    const value = {monthsIncome, incomeSalaryMonths, searchNow, incomeJanuary, setIncomeJanuary, incomeFebruary, incomeMarch,
        incomeApril, incomeMay, incomeJune, incomeJuly, incomeAugust, incomeSeptember, incomeOctober, incomeNovember,
        incomeDecember, incomeSalaryYear, setIncomeSalaryYear, incomeDepositsJanuary, incomeDepositsFebruary,
        incomeDepositsMarch, incomeDepositsApril, incomeDepositsMay, incomeDepositsJune, incomeDepositsJuly,
        incomeDepositsAugust, incomeDepositsSeptember, incomeDepositsOctober, incomeDepositsNovember,
        incomeDepositsDecember,incomeSellingJanuary, incomeSellingFebruary, incomeSellingMarch, incomeSellingApril,
        incomeSellingMay, incomeSellingJune, incomeSellingJuly, incomeSellingAugust, incomeSellingSeptember,
        incomeSellingOctober, incomeSellingNovember, incomeSellingDecember, incomeFreeMoneyJanuary, incomeFreeMoneyFebruary,
        incomeFreeMoneyMarch, incomeFreeMoneyApril, incomeFreeMoneyMay, incomeFreeMoneyJune, incomeFreeMoneyJuly,
        incomeFreeMoneyAugust, incomeFreeMoneySeptember, incomeFreeMoneyOctober, incomeFreeMoneyNovember,
        incomeFreeMoneyDecember
    };


    return (
        <div>
            <DataContext.Provider value={value}>
                {children}
            </DataContext.Provider>
        </div>
    );
};

export default DataProvider;