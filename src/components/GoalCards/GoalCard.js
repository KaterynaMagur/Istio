import {
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
  CardActionArea,
  CardActions,
  Button,
  CardHeader, Avatar, IconButton
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinearWithValueLabel from "./LineInProgress/LineInProgress";
import BMW from "../../assets/images/BMW.webp"





const Container = styled("div")`
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  padding: 11px;
  h3 {
    margin: 0;
  }
`;

export const GoalCard = (props) => {
  return <Card>
    <CardHeader
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Моя ціль"
      subheader="від 04.08.22"
    />
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div" align="center">
          BMW
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="200"
        image={BMW}
        alt="BMW"
      />
    </CardActionArea>
    <Typography variant="body2" color="text.secondary" align="center" margin="20px">
      Мені потрібно 70000$
    </Typography>
    <LinearWithValueLabel />
    <CardActions>
      <Button size="small" color="primary">
        Закрити ціль
      </Button>
    </CardActions>
  </Card>
}
