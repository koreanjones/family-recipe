import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { red } from "@mui/material/colors";
import { Avatar, Button } from "@mui/material";
import recipeImage from "../components/images/spaghetti.jpeg";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Recipe = (props) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {console.log(props.user.recipeList)}
      
        <Card
          sx={{
            width: 345,
          }}
        >
          <CardActions>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
              }
              title={
                props.recipe === "undefind"
                  ? "notworking"
                  : props.user.recipeList[0].name
              }
              subheader={
                "by " + props.user.name.first + " " + props.user.name.last
              }
            />
            <IconButton
              sx={{
                flexGrow: 3,
                marginLeft: "33px",
              }}
              onClick={() => props.deleteCard(props.user.id)}
            >
              <DeleteIcon
                sx={{
                  flexGrow: 3,
                }}
              />
            </IconButton>
            <IconButton
              onClick={() => {
                props.handleRecipeOpen();
                console.log("asdfasdfasdfs", props);
                props.updateUser(props.user.id);
              }}
            >
              <EditIcon sx={{ flexGrow: 1 }} />
            </IconButton>
          </CardActions>
          <CardMedia
            component="img"
            height="194"
            image={props.user.recipeList[0].image}
            alt="Spaghetti Dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.user.recipeList[0].description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>DIRECTIONS -</Typography>

              <Typography paragraph>
                Boil water over high heat and pu the noodles in when boiling.
              </Typography>
              <Typography paragraph>
                Add beef to pan and brown. once the meat is brown add sauce.
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
     
    </>
  );
};

export default Recipe;
