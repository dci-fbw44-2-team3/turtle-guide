/* 
? Event Page at route /admin/event/:slug either for creating a new event or editing an existing one
*/

import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import slugify from "react-slugify";

// * REDUX
import { useSelector, useDispatch } from "react-redux";

// * ACTIONS
import {
  eventCreate,
  eventUpdate,
  eventDelete,
} from "../../store/actions/eventsActions";

// * Components Imports (children)
import EventSection from "./EventSection";
import EventName from "./EventName";
import CustomMessage from "../../Components/CustomMessage/CustomMessage";
import PopUpDialogBox from "../../Components/PopUpDialogBox/PopUpDialogBox";

// * Functions
import { goBackToPage, unBlock } from "../../functions/functions";

// * material UI imports Components
import {
  Container,
  Grid,
  CardContent,
  Typography,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  makeStyles,
} from "@material-ui/core";

// * material UI imports Icons
import { Add, Delete, Save } from "@material-ui/icons";
import CustomButton from "../../Components/Buttons/CustomButtons/CustomButton";
import CustomIconButton from "../../Components/Buttons/CustomIconButtons/CustomIconButton";

const useStyles = makeStyles((theme) => ({
  guide__header: { marginBottom: "1rem" },
  saveDelBtnGrp: {
    // backgroundColor: "red",
    width: "100%",
    justifySelf: "start",
  },
}));

// TODO goBack prevention
// TODO goBack Button
// ! takes event slug
export default function Event(props) {
  // * Hooks
  const classes = useStyles(props);
  const dispatch = useDispatch();

  // to use history.push(newRoute) on save
  let history = useHistory();

  // * States
  // single event
  const [event, setEvent] = useState();

  // ! remove
  // to allow if is a new event
  // props comming from account
  // const [isNewEvent, setIsNewEvent] = useState(
  //   props.location.state?.isNew === true ? true : false
  // );

  // all sections
  // the sections are always upadated here before the save
  const [sections, setSections] = useState([]);
  // for saving
  const [needsToSave, setNeedsToSave] = useState(false);

  // for the "Delete Event" modal handlers
  const [openDeleteDialogBox, setOpenDeleteDialogBox] = useState(false);

  // for the drag and drop sections re-ordering
  const [dragId, setDragId] = useState();

  // for errorr and success msg
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // for the editing of an entire section
  // const [editSection, setEditSection] = useState(false);
  // const [editSectionId, setEditSectionId] = useState(null);

  // * Refs
  // just to skip the first and second render
  const firstUpdate = useRef(true);
  const secondUpdate = useRef(true);

  // * Hooks
  // loads event from reducer
  const events = useSelector((state) => state.events.events);

  // get the slug to search for the event
  const slug = props.match.params.name;
  // to allow if is a new event
  // props comming from account

  // to allow if is a new event
  // props comming from account
  let isNewEvent = props.location.state?.isNew === true ? true : false;

  // * LifeCycles -> UseEffect

  useEffect(() => {
    // create a new event
    if (isNewEvent) {
      const obj = props.location.state;
      return createAndSendEvent(obj);
    }

    // search for the event into redux
    const getEvent = events.find((x) => x.slug === slug);
    // set the whole event
    setEvent(getEvent);

    // set the sections state for mapping
    setSections(getEvent.sections);

    //eslint-disable-next-line
  }, []);

  // fires when the state event is created/ updated
  useEffect(() => {
    // TODO try catch to handle UI Error

    async function saveData() {
      if (needsToSave) {
        // dispatch
        await dispatch(eventUpdate(event));

        setIsError(false);
        setIsSuccess("Saved successfully!");
        return setNeedsToSave(false);
      }
    }
    saveData();

    // if event is empty do not dispatch
    // ! isNewevent Stops it from a recreating of an existing event
    // ! keep as an option
    if (!event || !isNewEvent || needsToSave) {
      return null;
    }

    // dispatch the event to redux
    return dispatch(eventCreate(event));
    //eslint-disable-next-line
  }, [event]);

  // handles the save button
  useEffect(() => {
    // if true skips the first render
    if (firstUpdate.current) {
      return (firstUpdate.current = false);
    }
    // in case the event is new can be saved on second render
    if (!firstUpdate.current && isNewEvent) {
      return setNeedsToSave(true);
    }
    // if true skips the second render
    if (secondUpdate.current) {
      return (secondUpdate.current = false);
    }

    // do things after first render
    return setNeedsToSave(true);

    //eslint-disable-next-line
  }, [sections]);

  // * Functions

  /**
   * @function findBiggestId
   * @desc returns a Number -> biggest existing integer of an "id" from the sections array
   * is aiding the assigning of id's to new sections in function addToContents
   */

  const findBiggestId = (e) => {
    let biggestId = 1;
    sections.forEach((section) => {
      if (section.id > biggestId) {
        biggestId = section.id;
      }
    });
    return biggestId;
  };

  /**
   * @function addToContents
   * @desc adds a content into the state "contents" that will be mapped
   */

  const addToContents = () => {
    const newSectionsArr = [
      {
        type: "section",
        id: 0,
        order: 0,
        url: "",
        slug: "title",
        contents: [],
        title: "Title",
        description: "Description",
        sectionCover: {
          filename: "",
          public_id: "",
          url: "",
          url_thumb: "",
        },
      },
    ];
    // add ids
    // create "id" based on the contents already into the array,
    // from the biggestId present on
    // if [contents] s empty assigns the index

    const bigId = findBiggestId();
    console.log("findBiggestId()", findBiggestId());

    // const bigId = sections

    newSectionsArr.forEach((section, i) => {
      if (sections.length === 0) {
        section["id"] = i + 1;
        section["order"] = i + 1;
      } else {
        // find the section with the biggest id
        const lastSection = sections.find((section) => section.id === bigId);

        section["id"] = lastSection.id + i + 1;
        section["order"] = sections[sections.length - 1].order + i + 1;
      }
    });

    setSections([...sections, ...newSectionsArr]);
    console.log([...sections, ...newSectionsArr]);
  };

  /**
   * @function deleteSection
   * @param id sent from the <Child />
   * @desc returns the section to delete from the sections Arr
   */
  const deleteSection = (id) => {
    // IMPORTANT
    //  filter returns an array so updates the sections
    const newSections = sections.filter((section) => section.id !== id);
    // set new sections
    setSections(newSections);
  };

  // * ----------- Functions to handle the "Delete Event" Modal

  /**
   * @function toggleDeleteDialogBox
   * @desc handle the Delete DialogBox
   */

  const toggleDeleteDialogBox = () => {
    setOpenDeleteDialogBox((prev) => !prev);
  };

  /**
   * @function deleteEvent
   * @desc deletes the current event from mongo
   */
  const deleteEvent = (val) => {
    const objToSend = {
      nameIdentifier: event.nameIdentifier,
    };
    if (val) {
      dispatch(eventDelete(objToSend));
      history.goBack();
    }

    toggleDeleteDialogBox();
  };

  // * ----------- Functions for the Drag and Re-order of <EventSection/>s

  /**
   * @function handleDrag
   * @desc gets the id of the Section which is being dragged
   * * is passed into the <Child />
   */

  const handleDrag = (e) => {
    // IMPORTANT
    // e.currentTarget.id needs to be parsed otherwise later in handleDrop FUNC, "===" will not work since types are Num and String -> after parsing will be: Num === Num
    setDragId(parseInt(e.currentTarget.id));
  };

  /**
   * @function handleDrop
   * @desc handles the drop and drag function, using section's keys "id" and "order", which by default are the same once the section is created
   * * * is passed into the <Child />
   */

  const handleDrop = (e) => {
    // * Finding the drag section with the same id as the one the user is trying to drag from
    const dragSection = sections.find((section) => {
      return section.id === dragId;
    });

    // * Finding the drop section with the same id as the one the user is trying to drop at
    const dropSection = sections.find(
      // parsing again because section.id is a Num and e.currentTarget.id is a String
      (section) => section.id === parseInt(e.currentTarget.id)
    );

    // from order x to order y, from one place to another
    const dragSectionOrder = dragSection.order;
    const dropSectionOrder = dropSection.order;

    // setting a new state with the updated order
    const newSectionState = sections.map((section) => {
      if (section.id === dragId) {
        section.order = dropSectionOrder;
      }
      if (section.id === parseInt(e.currentTarget.id)) {
        section.order = dragSectionOrder;
      }
      return section;
    });

    setSections(newSectionState);
  };

  /**
   * @function createEvent
   * @param eventName coming from the props "getEventName"
   * @desc saves the event name and creates event obj
   */

  // if params === new then show name modal
  // else fetch event

  const createAndSendEvent = (obj) => {
    console.log("createAndSendEvent");
    // destruct
    const { title, slug } = obj;

    setEvent({
      title: title,
      nameIdentifier: slug, // function to make the slug
      slug: slug, // will be the same
      description: "description", // ? is to do?
      sections: [],
      // TODO CHANGE ACCOUNT
      // WILL BET SENT ONCe IS LOGGED IN
      account: "611e5aca56104a1c09f9d13e",
      // ! spread obj
    });
    // to stop useEffect after the creation of a new event
    // ! remove
    isNewEvent = false;
  };

  /**
   * @function saveEvent
   * @desc saves the event
   */

  const saveEvent = (obj) => {
    console.log("saveEvent", obj);

    // set to true or stops it in use effect
    setNeedsToSave(true);
    // if the event is new skips it
    if (isNewEvent) {
      return;
    }
    // update event

    // destruc
    // if no new title provided (can come just if event name is changed)
    // uses the event one
    const { title = event.title } = obj;
    // new slug
    const slug = slugify(title);
    // push new data into event
    setEvent({
      ...event,
      title: title,
      slug: slug,
      nameIdentifier: slug, // new name identifier
      oldNameIdentifier: event.slug, // old name identifier just for the search
      sections: [...sections],
    });
    // setNeedsToSave(false) is into useEffect
  };

  /**
   * @function editSectionMode
   * @param id comes from <EventSection /> props
   * @desc enter in edit mode of the section
   */

  const editSectionMode = async (id, title) => {
    // saves before going to section
    // const res = await setNeedsToSaveFalse;
    // console.log(res);
    // saveEvent();
    // return goToAndSlugify(id, title);
    if (needsToSave) {
      setIsError("You created a new Section, please save before continue");
    }
    if (!needsToSave) {
      setIsError(false);

      return goToAndSlugify(id, title);
    }
  };

  /**
   * @function goToAndSlugify
   * @param eventName
   * @desc redirects and creates an object to create the event
   */
  const goToAndSlugify = (id, title) => {
    // TODO do it with regex
    // if a title is not set it uses the id of the section
    if (title === "Title" || title === "title" || title === "TITLE") {
      return history.push(`/admin/event/sections/${id}`, {
        isNew: true,
        slug: slugify(title),
        title: title,
        id: id,
        nameIdentifier: event.nameIdentifier, // name of the current event
      });
    }
    // it uses the title
    return history.push(`/admin/event/sections/${slugify(title)}`, {
      isNew: true,
      slug: slugify(title),
      title: title,
      id: id,
      nameIdentifier: event.nameIdentifier, // name of the current event
    });
  };

  /**
   * @function saveSectionTitle
   * @param noParam
   * @desc to save when sectin title changes
   */
  const saveSectionTitle = () => {
    setNeedsToSave(true);
  };

  /**
   * @function eventNameUpdate
   * @param eventName comes from <EventName />
   * @desc fired when the event name changed
   */
  const eventNameUpdate = (eventName) => {
    console.log("eventNameUpdate", eventName);

    // create a new obj that fires a saving with useEffect
    // new slug
    const slug = slugify(eventName);
    // push new data into event
    setEvent({
      ...event,
      title: eventName,
      slug: slug,
      nameIdentifier: slug, // new name identifier
      oldNameIdentifier: event.slug, // old name identifier just for the search
      sections: [...sections],
    });
    setNeedsToSave(true);
  };

  // * Listener to avoid the user to go back without saving
  unBlock(needsToSave, history);

  return (
    <Container style={{ padding: "2rem 0" }} maxWidth="md">
      {/* // TODO ERROR IF EVENT IS UNDEFINED */}
      {event === undefined ? null : (
        <Grid container direction="row" spacing={2}>
          <Grid item xs={9}>
            <PopUpDialogBox
              open={openDeleteDialogBox}
              isClose={toggleDeleteDialogBox}
              confirm={deleteEvent}
              confirmButtonTitle="Delete Event"
              messageTitle={`Are you sure you want to delete the ${event.title} section?`}
              messageBody="Deleting a section will permanently erase it from the event."
            />
            {/* 
        // * Name of Event Input
        */}
            <EventName
              // important to fire the event name update
              eventNameUpdate={eventNameUpdate}
              title={event.title}
              slug={event.slug}
              getEventName={createAndSendEvent}
            />
          </Grid>
          {/* Delete Event */}
          <Grid item xs={3}>
            <Button
              className={classes.deleteBtn}
              onClick={saveEvent}
              disabled={!needsToSave}
            >
              Save Event
            </Button>
            {/* // ?  temporarly disabled, to implement? */}
            {/* // TODO add check saving */}
            <Button
              className={classes.deleteBtn}
              onClick={() => goBackToPage(needsToSave, history)}
            >
              Go Back to Account
            </Button>
            <Button
              className={classes.deleteBtn}
              onClick={toggleDeleteDialogBox}
            >
              Delete Event
            </Button>
            <CustomButton
              text="Account"
              startIcon="arrowBack"
              onClickFunc={() => goBackToPage(needsToSave, history)}
            />

            <div>
              <CustomIconButton
                icon="save"
                disabled={!needsToSave}
                onClickFunc={saveEvent}
                // make a focus light so the user knows to save
                style={{
                  backgroundColor: !needsToSave ? "inherit" : "#26b519",
                }}
              />
              {/* // ?  temporarly disabled, to implement? */}
              {/* // TODO add check saving */}
              <CustomIconButton
                color="error"
                icon="delete"
                onClickFunc={toggleDeleteDialogBox}
              />
            </div>
          </Grid>
          {/* Error/success msg TOP */}
          <Grid container direction="row" spacing={2}>
            <Grid item xs={9}>
              {isError ? (
                <CustomMessage severity="error" msg={isError} />
              ) : null}
              {isSuccess ? (
                <CustomMessage severity="success" msg={isSuccess} />
              ) : null}
            </Grid>
          </Grid>
          {/* 
        // * Add BTN + Disabled ones
        */}
          <Grid item xs={4}>
            <CustomButton
              text="Section"
              endIcon="add"
              onClickFunc={() => addToContents()}
            />

            <ButtonGroup
              disabled
              orientation="vertical"
              aria-label="vertical outlined primary button group"
            >
              {/* // TODO Making a custom Button Group */}
              <Button endIcon={<Add />}>Pay-wall</Button>
              <Button endIcon={<Add />}>Feedback</Button>
              <Button endIcon={<Add />}>Map</Button>
            </ButtonGroup>
          </Grid>
          {/* 
        // * SECTIONS CONTAINER -> GUIDE
        */}
          <Grid item xs={8}>
            <Box filled>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h3"
                  className={classes.guide__header}
                >
                  Guide
                </Typography>
                {/* Displaying the current sections */}
                <ul>
                  {sections
                    .sort((a, b) => a.order - b.order)
                    .map((section, i) => {
                      return (
                        <EventSection
                          key={i}
                          section={section}
                          sectionToDelete={deleteSection}
                          handleDrag={handleDrag}
                          handleDrop={handleDrop}
                          editSection={editSectionMode}
                          saveSectionTitle={saveSectionTitle} // to save when sectin title changes
                        />
                      );
                    })}
                </ul>
              </CardContent>
            </Box>
          </Grid>
          {/* Error/success msg */}
          <Grid container direction="row" spacing={2}>
            <Grid item xs={9}>
              {isError ? (
                <CustomMessage severity="error" msg={isError} />
              ) : null}
              {isSuccess ? (
                <CustomMessage severity="success" msg={isSuccess} />
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
