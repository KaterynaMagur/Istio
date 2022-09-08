import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import CottageIcon from '@mui/icons-material/Cottage';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FunctionsIcon from '@mui/icons-material/Functions';
import {styled} from '@mui/material/styles';
import {useState} from 'react';

import './IncomeToogleMenuStyle.css';


const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.primary,
    lineHeight: '60px',
}));


const IncomeToogleMenu = (props) => {

    const {monthsIncome, searchNow, incomeSalaryMonths} = props;

    const [changedMonths, setChangedMonths] = useState(searchNow.month);
    const [changedRetail, setChangedRetail] = useState(searchNow.income);

    const [displayDetails, setDisplayDetails] = useState(false);

    const productsRetail = changedRetail / 2;
    const comunalsRetail = changedRetail / 8;
    const otherRetail = changedRetail / 4;

    const productsList = productsRetail / 3;
    const comunalsList = comunalsRetail / 3;
    const otherList = otherRetail / 3;

    const currentSalaryInMonth = incomeSalaryMonths.filter(element => element.month === changedMonths)

    return (
        <div>
            <Grid container spacing={2}>

                <Grid item columns={2} xs={6}>
                    <Box
                        sx={{
                            p: 2,
                            bgcolor: 'background.default',
                            display: 'grid',
                            gap: 2,
                        }}>
                        {monthsIncome.map((currentMonth, index) => (
                            <Item key={index} elevation={6}>
                                <Button
                                    onClick={() =>
                                        setChangedMonths(currentMonth.month) &
                                        setChangedRetail(currentMonth.income)
                                    }
                                >
                                    {currentMonth.month + ' - ' + currentMonth.income}
                                </Button>
                            </Item>))}
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box
                        sx={{
                            p: 2,
                            bgcolor: 'background.default',
                            display: 'grid',
                            gap: 2,
                            width: '100%'
                        }}>
                        {monthsIncome.slice(0, 1).map((currentMonth, index) => (
                            <div className='currentMonth'>

                                <div
                                    key={index}
                                    className='retailCurrentMonth'>
                                    Дохід за {changedMonths}
                                </div>

                                <div className='retailProducts'>
                                    <div>
                                        Заробітня плата
                                        <BakeryDiningIcon className='iconMargin'></BakeryDiningIcon>
                                    </div>
                                    {
                                        currentSalaryInMonth.map(item => <div
                                            key={new Date().getTime()}>{item.salary}</div>)
                                    }
                                </div>

                                <div
                                    className='retailComunals'>
                                    <div>Відсотки від вкладів <CottageIcon className='iconMargin'></CottageIcon></div>

                                    {
                                        currentSalaryInMonth.map(item => <div
                                            key={new Date().getTime()}>{item.deposit}</div>)
                                    }
                                </div>

                                <div className='retailOther'>
                                    <div>Продаж товарів <CelebrationIcon className='iconMargin'></CelebrationIcon></div>
                                    {
                                        currentSalaryInMonth.map(item => <div
                                            key={new Date().getTime()}>{item.selling}</div>)
                                    }
                                </div>

                                <div className='retailOther'>
                                    <div>Кошти з неба <CelebrationIcon className='iconMargin'></CelebrationIcon></div>
                                    {
                                        currentSalaryInMonth.map(item => <div
                                            key={new Date().getTime()}>{item.freeMoney}</div>)
                                    }
                                </div>

                                <div
                                    className='retailSum'>
                                    <div>Разом <FunctionsIcon className='iconMargin'></FunctionsIcon></div>
                                    {
                                        currentSalaryInMonth.map(item => <div
                                            key={new Date().getTime()}>{item.summa}</div>)
                                    }
                                </div>
                                <div className='buttonForDetails'>
                                    <button
                                        className='buttonStyle'
                                        onClick={() => setDisplayDetails(!displayDetails)}
                                    >
                                        Детальніше
                                    </button>
                                </div>
                            </div>
                        ))}

                        {displayDetails ?
                            <div className='detailsContainer'>
                                <div className='productsDetailsRetail'>
                                    <div className='productsDetailsRetailTitle'>Продукти</div>
                                    <div className='productsDetailsRetailListContainer'>
                                        <ul className='productsDetailsRetailList'>
                                            <li className='productsDetailRetailListItem'>
                                                <div>Сільпо</div>
                                                <div>{productsList}</div>
                                            </li>
                                            <li className='productsDetailRetailListItem'>
                                                <div>Ашан</div>
                                                <div>{productsList}</div>
                                            </li>
                                            <li className='productsDetailRetailListItem'>
                                                <div>АТБ</div>
                                                <div>{productsList}</div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div className='comunalsDetailsRetail'>
                                    <div className='productsDetailsRetailTitle'>Комунальні</div>
                                    <div className='productsDetailsRetailListContainer'>
                                        <ul className='productsDetailsRetailList'>
                                            <li className='productsDetailRetailListItem'>
                                                <div>Газ</div>
                                                <div>{comunalsList}</div>
                                            </li>
                                            <li className='productsDetailRetailListItem'>
                                                <div>Вода</div>
                                                <div>{comunalsList}</div>
                                            </li>
                                            <li className='productsDetailRetailListItem'>
                                                <div>Елекроенергія</div>
                                                <div>{comunalsList}</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='otherDetailsRetail'>
                                    <div className='productsDetailsRetailTitle'>Інше</div>
                                    <div className='productsDetailsRetailListContainer'>
                                        <ul className='productsDetailsRetailList'>
                                            <li className='productsDetailRetailListItem'>
                                                <div>Подорож у карпати</div>
                                                <div>{otherList}</div>
                                            </li>
                                            <li className='productsDetailRetailListItem'>
                                                <div>Мийка машини</div>
                                                <div>{otherList}</div>
                                            </li>
                                            <li className='productsDetailRetailListItem'>
                                                <div>Стрижка</div>
                                                <div>{otherList}</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            : null}

                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default IncomeToogleMenu;