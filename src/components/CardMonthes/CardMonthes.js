import CardMonth from './CardMonth.js';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function CardMonthes() {
  return (
    <div>
      <Container>
        <Grid container spacing={4}>
          <CardMonth/>
          <CardMonth/>
          <CardMonth/>
        </Grid>
      </Container>
    </div>
  );
}

export default CardMonthes;
