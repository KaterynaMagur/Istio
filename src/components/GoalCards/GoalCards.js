import {styled} from "@mui/material";
import {GoalCard} from "./GoalCard";

const Container = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

export const GoalCards = () => {
  return <Container>
    {Array(3).fill(0).map((_, idx) =>
      <GoalCard name={"Goal " + (idx + 1)} key={idx} />
    )}
  </Container>
};