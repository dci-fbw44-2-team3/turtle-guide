import {
  EVENT_CREATE,
  EVENT_CREATE_ERROR,
  EVENT_UPDATE,
  EVENT_UPDATE_ERROR,
  EVENTS_FETCH,
  EVENTS_FETCH_ERROR,
  EVENT_GUIDE,
  EVENT_GUIDE_ERROR,
  EVENT_DELETE,
  EVENT_DELETE_ERROR,
} from "../types";

import axios from "axios";
import { createObj } from "../functions/functions";

/**
 * @desc BASE URLs
 */
const BASEurlEvents = "http://localhost:5000/api/events/";

// ! IMPORTANT TO REMOVE
// TODO CHANGE TOKEN to be sent from the client's cookie
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjExZTVhY2E1NjEwNGExYzA5ZjlkMTNlIn0sImlhdCI6MTYzMDQ4NTU4OCwiZXhwIjoxNjMzMDc3NTg4fQ.-PpbSoenUfmDFMsII1ALNvj7OUIm19PuJYa4GD5xJfI";

/**
 * @desc action to create a new event
 */
export const eventCreate = (obj) => {
  console.log("eventCreate", obj);

  return async (dispatch) => {
    // uses a function to create an object for axios
    const objToSend = createObj({
      method: "POST",
      url: BASEurlEvents,
      data: obj,
      token: token,
    });

    try {
      // call api
      const res = await axios(objToSend);

      // res.data.data sends just the event
      await dispatch({ type: EVENT_CREATE, payload: res.data.data });

      return res;
    } catch (error) {
      console.error(error);
      await dispatch({ type: EVENT_CREATE_ERROR, payload: error });
    }
  };
};

/**
 * @desc action to update an event
 */

export const eventUpdate = (obj) => {
  console.log("obj", obj);

  return async (dispatch) => {
    // important
    //  it uses the old nameIdf cause in mongo it has this still that nameIdf
    const eventName = obj.hasOwnProperty("oldNameIdentifier")
      ? obj.oldNameIdentifier
      : obj.nameIdentifier;

    // uses a function to create an object for axios
    const objToSend = createObj({
      method: "PUT",
      url: BASEurlEvents + eventName,
      data: obj,
      token: token,
    });

    try {
      // call api
      const res = await axios(objToSend);
      // res.data.data sends just the event
      await dispatch({ type: EVENT_UPDATE, payload: res.data.data });

      return res;
    } catch (error) {
      console.error(error);
      await dispatch({ type: EVENT_UPDATE_ERROR, payload: error });
    }
  };
};

/**
 * @desc action to delete an event
 */

export const eventDelete = (obj = {}) => {
  return async (dispatch) => {
    // important
    //  it uses the old nameIdf cause in mongo it has this still that nameIdf
    const eventName = obj?.hasOwnProperty("oldNameIdentifier")
      ? obj?.oldNameIdentifier
      : obj?.nameIdentifier;

    // uses a function to create an object for axios
    const objToSend = createObj({
      method: "DELETE",
      url: BASEurlEvents + eventName,
      token: token,
    });

    try {
      // call api
      const res = await axios(objToSend);

      // does not dispatch cause after the delete it goes
      // back to the page that fetches the events from the BE
      await dispatch({ type: EVENT_DELETE });

      return res;
    } catch (error) {
      console.error(error);
      await dispatch({ type: EVENT_DELETE_ERROR, payload: error });
    }
  };
};

/**
 * @desc action to fetch all the account's event
 */

// TODO CHANGE TOKEN to be sent from the client
export const eventsFetch = () => {
  return async (dispatch) => {
    // uses a function to create an object for axios
    const objToSend = createObj({
      method: "GET",
      url: BASEurlEvents,
      //     data: obj,
      token: token,
    });

    try {
      // API Call
      const res = await axios(objToSend);
      // REDucer
      await dispatch({
        type: EVENTS_FETCH,
        payload: res.data.data,
      });
    } catch (error) {
      console.error(error);
      await dispatch({
        type: EVENTS_FETCH_ERROR,
        payload: error,
      });
    }
  };
};

/**
 * @desc action to set the event the guide will render
 */
export const setEventGuide = (obj) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: EVENT_GUIDE, payload: obj });
    } catch (error) {
      console.error(error);
      await dispatch({ type: EVENT_GUIDE_ERROR, payload: error });
    }
  };
};
