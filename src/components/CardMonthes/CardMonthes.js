import {styled} from "@mui/material";
import CardMonth from "./CardMonth.js";

const Container = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

 const CardMonthes = () => {
  return <Container>
    {Array(3).fill(0).map((_, idx) =>
      <CardMonth name={"Month " + (idx + 1)} key={idx} />
    )}
  </Container>
};

export default CardMonthes;