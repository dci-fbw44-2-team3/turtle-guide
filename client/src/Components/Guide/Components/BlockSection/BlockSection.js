/**
 * @desc Components that renders the blocks of sections into <Home />
 */

import React from "react";
import { Link } from "react-router-dom";

// * MAT UI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const BlockSection = (props) => {
  // * HOOKS
  const classes = useStyles();

  // destruc
  const { eventSlug } = props;
  const { title, description, id } = props.data;

  return (
    <Card className={classes.root} maxWidth="lg">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.data.sectionCover.url}
          title={props.data.sectionCover.filename}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/events/${eventSlug}/sections/${id}`}>
          <Button size="small" color="primary" ì>
            Go to Section
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default BlockSection;
