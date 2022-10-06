import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {createContext} from "react";
import moment from "moment";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../firebase-config";


export const DataContext = createContext(null);
export  const useData = () => useContext(DataContext);

const getPeriod = (year) => {
    const start = moment().year(year).startOf('year').toDate();
    const end = moment().year(year).endOf('year').toDate();
    return {start, end}
}

const getEnglishMonths = () => {
    const locale = moment.locale();
    moment.locale('en');
    const months = moment.months();
    moment.locale(locale);
    return months;
}

const getObjectWithMonthKeys = (data, prefix) => {
    return getEnglishMonths().reduce((acc, monthName, idx) => {
        acc[`${prefix}${monthName}`] = data[idx];
        return acc;
    }, {});
}

const BlankMonthData = Array(12).fill(0);

const DataProvider = ({children}) => {
    const [income, setIncome] = useState([...BlankMonthData]);
    const incomeMonths = useMemo(() => {
        return getObjectWithMonthKeys(income, 'income');
    }, [income]);
    const [incomeSalaryYear, setIncomeSalaryYear] = useState(moment().year());

    const [incomeDeposits, setIncomeDeposits] = useState([...BlankMonthData]);
    const incomeDepositsMonths = useMemo(() => {
        return getObjectWithMonthKeys(incomeDeposits, 'incomeDeposits');
    }, [incomeDeposits]);

    const [incomeSelling, setIncomeSelling] = useState([...BlankMonthData]);
    const incomeSellingMonths = useMemo(() => {
        return getObjectWithMonthKeys(incomeSelling, 'incomeSelling');
    }, [incomeSelling]);

    const [incomeFreeMoney, setIncomeFreeMoney] = useState([...BlankMonthData]);
    const incomeFreeMoneyMonths = useMemo(() => {
        return getObjectWithMonthKeys(incomeFreeMoney, 'incomeFreeMoney');
    }, [incomeFreeMoney]);

    const incomeSum = useMemo(() => {
        return BlankMonthData.map((_, idx) =>
           income[idx] + incomeDeposits[idx] + incomeSelling[idx] + incomeFreeMoney[idx]
        )
    }, [
        income,
        incomeDeposits,
        incomeSelling,
        incomeFreeMoney
    ]);

    const monthsIncome = useMemo(() => {
        return moment.months().map((month, idx) => ({
            month,
            income: incomeSum[idx]
        }));
    }, [incomeSum]);
    const incomeSalaryMonths = useMemo(() => {
        return moment.months().map((month, idx) => ({
            month,
            salary: income[idx],
            deposit: incomeDeposits[idx],
            selling: incomeSelling[idx],
            freeMoney: incomeFreeMoney[idx],
            summa: incomeSum[idx],
        }))
    }, [
        income,
        incomeDeposits,
        incomeSelling,
        incomeFreeMoney,
        incomeSum,
    ]);

    const getDataFromDB = useCallback(async () => {
        // TODO: filter data by selected year
        const usersRefIncome = collection(db, `users/${localStorage.getItem('uid')}/incomes`);
        const usersRefGoal = collection(db, `users/${localStorage.getItem('uid')}/goals`);
        const usersRefCosts = collection(db, `users/${localStorage.getItem('uid')}/costs`);

        const {start, end} = getPeriod(incomeSalaryYear);

        const incomes2022 = query(usersRefIncome, where("date", ">", start), where("date", "<", end));

    }, [incomeSalaryYear]);

    useEffect(() => {
        getDataFromDB().finally();
    }, [getDataFromDB]);



    const findCurrentMonthValue = (currentSearch) => {
        return (currentSearch.month === String(now));
    }
    const now = moment().format('MMMM');
    const searchNow = monthsIncome.find(findCurrentMonthValue);


    const value = {
        monthsIncome,
        incomeSalaryMonths,
        searchNow,
        incomeSalaryYear,
        setIncomeSalaryYear,
        // monthData as `prefixMonthName`
        ...incomeMonths,
        ...incomeDepositsMonths,
        ...incomeSellingMonths,
        ...incomeFreeMoneyMonths
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