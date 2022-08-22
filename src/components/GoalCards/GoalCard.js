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
import {InputGoal} from "./InputGoal";
import {useState} from "react";





const Container = styled("div")`
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
 
  padding: 10px;
  h3 {
    margin: 0;
  }
`;

const BlaBla = styled("InputGoal")
`
  background: #5e35b1;
  width: 300px;
`

export const GoalCard = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return <Card>
    <CardHeader
      action={
        <IconButton aria-label="settings" onClick={() => setButtonPopup(true)}>
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
      <InputGoal trigger={buttonPopup} setTrigger={setButtonPopup}></InputGoal>

  </Card>
}
