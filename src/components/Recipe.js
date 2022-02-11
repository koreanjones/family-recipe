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

// export default function RecipeReviewCard() {

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="/static/images/cards/paella.jpg"
//         alt="Paella dish"
//       />

//     </Card>
//   );
// }

const Recipe = (props) => {
  console.log(props)
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {console.log(props.recipe.recipeList[0].name)}
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
                : props.recipe.recipeList[0].name
            }
            subheader={
              "by " + props.recipe.name.first + " " + props.recipe.name.last
            }
          />
          {console.log(props)}
          <IconButton
            sx={{
              flexGrow: 3,
              marginLeft: "33px",
            }}
            onClick={() => props.deleteCard(props.recipe.id)}
          >
            <DeleteIcon
              sx={{
                flexGrow: 3,
              }}
            />
          </IconButton>
          <IconButton >
            <EditIcon sx={{ flexGrow: 1 }} />
          </IconButton>
        </CardActions>
        <CardMedia
          component="img"
          height="194"
          image="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2021-12-spaghetti%2F211208_ApartmentTherapy_Spaghetti_0172"
          alt="Spaghetti Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.recipe.recipeList[0].description}
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
