import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const ElectionCard = () => (
  <Card>
    <CardActionArea>
      <CardContent>
        <Typography>Election</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla,
          ullam numquam minima architecto maiores similique, atque voluptas
          eveniet, deserunt possimus dolores doloribus incidunt provident in
          quo? Nostrum, autem velit!
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <IconButton>
        <EditIcon />
      </IconButton>
    </CardActions>
  </Card>
);

export default ElectionCard;
