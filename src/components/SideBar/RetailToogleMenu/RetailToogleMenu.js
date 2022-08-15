import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';


import './RetailToogleMenu.css';
const months =[
    'Січень - 15000',
    'Лютий - 17000',
    'Березень - 10000',
    'Квітень - 9000',
    'Травень - 11000',
    'Червень - 12000',
    'Липень - 22000',
    'Серпень - 2000',
    'Вересень - 9999',
    'Жовтень - 12425',
    'Листопад - 18272',
    'Грудень - 9756',
]


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.primary,
    lineHeight: '60px',
  }));

  const ItemSum = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.primary.main,
    lineHeight: '60px',
  }));

  

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(month, products, communal, fun, shopping) {
    return { month, products, communal, fun, shopping };
  }
  
  const rows = [
    createData('Січень', 5263, 2835, 4239, 3429),
    createData('Лютий', 6700, 2234, 2294, 5429),
    createData('Березень', 8239, 1970, 1234, 1249),
    createData('Квітень', 3455, 1433, 10234, 0),
    createData('Травень', 4980, 1232, 1278, 0),
    createData('Червень', 5947, 1123, 3298, 452),
    createData('Липень', 3588, 1328, 8749, 1200),
    createData('Серпень', 1907, 799, 5890, 243),
    createData('Вересень', 0, 0, 0, 0),
    createData('Жовтень', 0, 0, 0, 0),
    createData('Листопад', 0, 0, 0, 0),
    createData('Грудень', 0, 0, 0, 0),
  
  ];


const RetailToogleMenu = () => {
    return (
        <Grid container spacing={2}>
          
            <Grid item columns={2} xs={6}>
                <Box 
                  sx={{
                    p: 2,
                    bgcolor: 'background.default',
                    display: 'grid',
                    gap: 2,
                  }}
                >
                  {months.map((month,index) => (
                    <Item key={index} elevation={6} 
                    sx={{
                        
                        }}>
                      <Button>{`${month}`}</Button>
                    </Item>
                  ))}
                </Box>
                </Grid>
                
                <Grid item xs={6}>
                  <Box 
                    sx={{
                      p: 2,
                      bgcolor: 'background.default',
                      display: 'grid',
                      gap: 2,
                      }}>
                    <Paper
                      variant="" 
                      square sx={{height:'896px'}}>
                      <ItemSum>
                        <Paper variant="3">
                          Витрати за Усі місяці
                        </Paper>
                      </ItemSum>
                        <TableContainer component={Paper}>
                          <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                              <TableRow>
                                <StyledTableCell>Місяці</StyledTableCell>
                                <StyledTableCell align="right">Продукти</StyledTableCell>
                                <StyledTableCell align="right">Комунальні</StyledTableCell>
                                <StyledTableCell align="right">Розваги</StyledTableCell>
                                <StyledTableCell align="right">Шопінг</StyledTableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                              <StyledTableRow key={row.month}>
                                <StyledTableCell component="th" scope="row">
                                  {row.month}
                                </StyledTableCell>
                                  <StyledTableCell align="right">{row.products}</StyledTableCell>
                                  <StyledTableCell align="right">{row.communal}</StyledTableCell>
                                  <StyledTableCell align="right">{row.fun}</StyledTableCell>
                                  <StyledTableCell align="right">{row.shopping}</StyledTableCell>
                              </StyledTableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                    </Paper>
                  </Box>
                </Grid>
        </Grid>
      );
};

export default RetailToogleMenu;