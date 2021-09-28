/**
 * @desc Conmponent that creates a content block
 * into the blocks it can be edited and deleted
 * @param props item
 */

import React, { useState, useCallback } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

// * Mat UI
import {
  ButtonGroup,
  Typography,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";

// * Components
import TextEditor from "../Inputs/TextEditor";
// requires props "item" "isOpen" <ModalCuston content={} isOpen={state}/>
import ModalCustom from "../../Components/Modal/ModalCustom";
// needed to render Rich text
import ReactQuill from "react-quill"; // ES6
import CustomIconButton from "../Buttons/CustomIconButtons/CustomIconButton";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      marginBottom: "1rem",
      overflow: "hidden",
    },
    // class for Section's Description
    paperDesc: {
      width: "90%",
      borderRadius: "0",
      margin: "0 auto",
      transform: "translate(0,-1.4rem)",
      marginBottom: "-1.4rem",
    },
    mainContainer: {
      display: "flex",
    },

    overview: {
      height: "fit-content",
    },
    input: {
      display: "none",
    },
    media: {
      height: 140,
    },
    mediaContainer: {
      overflowWrap: "anywhere",
    },
    mediaCaption: {
      overflowWrap: "anywhere",
    },
    img: {
      width: "100%",
    },
    iconsContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

const ContentBlockText = (props) => {
  const classes = useStyles();

  // * Destructuring props
  let { id, content } = props.item;

  // * State
  const [isEditing, setIsEditing] = useState(false);

  // * Functions
  /**
   * @function removeContent
   * @desc sends back the selected element to be deleted
   * @param id
   */
  const removeContent = useCallback(
    (id) => {
      props.itemToDelete(id);
    },
    //eslint-disable-next-line
    [props.itemToDelete]
  );

  /**
   * @function editContent
   * @desc enables edit mode
   * @param id
   */
  const editContent = (id) => {
    // togle editing
    setIsEditing((prev) => !prev);
  };

  // * Modal CTRLs
  /**
   * @function closeEditingModal
   * @desc checks the state isClosed and does something
   */
  const closeEditingModal = (state) => {
    if (state) {
      setIsEditing(false);
    }
  };

  /**
   * @function setMediaText
   * @desc sends back the updated text
   * @param contentToUpdate
   */
  const setMediaText = useCallback(
    (contentToUpdate) => {
      // set the new content to props
      props.newContent(id, contentToUpdate);
      // fires just the state that with useEffect will send the prop back
      setIsEditing((prev) => !prev);
    },
    //eslint-disable-next-line
    [props.newContent]
  );

  return (
    <Card
      className={id === 999999 ? classes.paperDesc : classes.paper}
      key={id}
      // below attributes for drag nd drop
      id={id}
      draggable={props.isDraggable ? true : false}
      onDragOver={props.isDraggable ? (e) => e.preventDefault() : null}
      onDragStart={props.isDraggable ? props.handleDrag : null}
      onDrop={props.isDraggable ? props.handleDrop : null}
    >
      {/* <Grid item xs={12} sm container className={classes.mediaContainer}>
        <Grid item>
          <ShortTextIcon fontSize="large" />
        </Grid>
      </Grid> */}

      <CardContent className={classes.mediaCaption}>
        <Typography>
          {isEditing ? (
            <div>
              <ModalCustom
                content={
                  <TextEditor setText={setMediaText} content={content} />
                }
                isOpen={true}
                isClose={closeEditingModal}
              />
              <html>{content}</html>
            </div>
          ) : (
            <ReactQuill
              value={content}
              readOnly={true}
              theme={"bubble"}
              // className={classes.descriptionContainer}
            />
          )}
        </Typography>
      </CardContent>
      <CardActions className={classes.iconsContainer}>
        {/*   editing title/description */}
        <CustomIconButton
          icon={isEditing ? "save" : "edit"}
          onClickFunc={() => editContent(id)}
        />
        <ButtonGroup
          orientation="horizontal"
          aria-label="horizontal button group"
        >
          {props.isDraggable ? <CustomIconButton icon="drag" /> : null}
          {/* Sends the id to the parent */}
          {id !== 999999 ? (
            <CustomIconButton
              icon="delete"
              onClickFunc={() => removeContent(id)}
            />
          ) : null}
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default ContentBlockText;
