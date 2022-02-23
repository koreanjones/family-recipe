import * as React from "react";
import { useState } from "react";
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
import { Avatar } from "@mui/material";

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
              props.recipe === "undefind" ? "notworking" : props.recipe.name
            }
          />
          <IconButton
            sx={{
              flexGrow: 3,
              marginLeft: "33px",
            }}
            onClick={() => props.deleteCard(props.recipe.recipeId)}
          >
            <DeleteIcon
              sx={{
                flexGrow: 3,
              }}
            />
          </IconButton>
          <IconButton
            onClick={() => props.updateRecipeCard(props.recipe.recipeId)}
          >
            <EditIcon sx={{ flexGrow: 1 }} />
          </IconButton>
        </CardActions>
        <CardMedia
          component="img"
          height="194"
          image={props.recipe.image}
          alt=""
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.recipe.description}
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
              {props.recipe.cookingInstructions}
            </Typography>
            <Typography paragraph>{props.recipe.prepTime}</Typography>
            <Typography>{props.recipe.cookingTime}</Typography>
            <Typography>{props.recipe.ingredients[0].name}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default Recipe;
