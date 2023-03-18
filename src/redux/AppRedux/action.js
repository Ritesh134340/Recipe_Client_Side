import axios from "axios";
import * as types from "./actionTypes";

export const getAllVideos = () => (dispatch) => {
  dispatch({ type: types.GET_ALL_VIDEOS_REQUEST });
  return axios
    .get(`${process.env.REACT_APP_SERVER_ADDRESS}/app/getall/videos`)
    .then((res) => {
      return dispatch({
        type: types.GET_ALL_VIDEOS_SUCCESS,
        payload: res.data.data,
        successCode: res.status,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_ALL_VIDEOS_FAILURE,
        errCode: err.response.data.mesg,
      });
    });
};

export const filterUploaded = (payload) => (dispatch) => {
  dispatch({ type: types.FILTER_UPLOADED_VIDEOS, payload: payload });
};

export const getVideoById = (id) => (dispatch) => {
  dispatch({ type: types.GET_VIDEO_BY_ID_REQUEST });
  return axios
    .get(`${process.env.REACT_APP_SERVER_ADDRESS}/app/get/video/${id}`)
    .then((res) => {
      return dispatch({
        type: types.GET_VIDEO_BY_ID_SUCCESS,
        payload: res.data,
        status: res.status,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_VIDEO_BY_ID_FAILURE,
        status: err.response.status,
        mesg: err.response.data.mesg,
      });
    });
};

export const addToFavourite = (payload, header) => (dispatch) => {
  dispatch({ type: types.ADD_TO_FAVOURITE_REQUEST });

  return axios
    .patch(
      `${process.env.REACT_APP_SERVER_ADDRESS}/app/add/favourite`,
      payload,
      header
    )
    .then((res) => {
      return dispatch({
        type: types.ADD_TO_FAVOURITE_SUCCESS,
        payload: res.data,
        status: res.status,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.ADD_TO_FAVOURITE_FAILURE,
        status: err.response.status,
        mesg: err.response.data.mesg,
      });
    });
};

export const getFavourite = (payload) => (dispatch) => {
  dispatch({ type: types.GET_FAVOURITE_REQUEST });
  return axios
    .get(`${process.env.REACT_APP_SERVER_ADDRESS}/app/get/favourite`, payload)
    .then((res) => {
      return dispatch({
        type: types.GET_FAVOURITE_SUCCESS,
        payload: res.data,
        status: res.status,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_FAVOURITE_FAILURE,
        mesg: err.response.data.mesg,
        status: err.response.status,
      });
    });
};

export const removeFavourite = (id, payload) => (dispatch) => {
  dispatch({ type: types.REMOVE_FAVOURITE_REQUEST });
  return axios
    .delete(
      `${process.env.REACT_APP_SERVER_ADDRESS}/app/delete/favourite/${id}`,
      payload
    )
    .then((res) => {
      return dispatch({
        type: types.ADD_TO_FAVOURITE_SUCCESS,
        payload: res.data,
        status: res.status,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.ADD_TO_FAVOURITE_FAILURE,
        status: err.response.status,
        mesg: err.response.data.mesg,
      });
    });
};

export const setSearchTerm = (payload) => (dispatch) => {
  dispatch({ type: types.SET_SEARCH_TERM, payload: payload });
};

export const findSearch = (payload) => (dispatch) => {
  dispatch({ type: types.SEARCH_REQUEST });
  return axios
    .get(`${process.env.REACT_APP_SERVER_ADDRESS}/app/search?title=${payload}`)
    .then((res) => {
      return dispatch({
        type: types.SEARCH_SUCCESS,
        status: res.status,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.SEARCH_FAILURE,
        mesg: err.response.data.mesg,
        status: err.response.status,
      });
    });
};

export const searchVideoFilter = (payload) => (dispatch) => {
  dispatch({ type: types.SEARCH_VIDEO_FILTER, payload });
};

export const getChefById = (id) => (dispatch) => {
  dispatch({ type: types.GET_CHEF_BY_ID_REQUEST });
  return axios
    .get(`${process.env.REACT_APP_SERVER_ADDRESS}/app/chef/${id}`)
    .then((res) => {
      return dispatch({
        type: types.GET_CHEF_BY_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_CHEF_BY_ID_FAILURE });
    });
};

export const filterFavourite = (payload) => (dispatch) => {
  dispatch({ type: types.FILTER_FAVOURITE_VIDEOS, payload: payload });
};

export const getChef = () => (dispatch) => {
  dispatch({ type: types.CHEF_REQUEST });
  return axios
    .get(`${process.env.REACT_APP_SERVER_ADDRESS}/app/get/chef`)
    .then((res) => {
      return dispatch({ type: types.CHEF_SUCCESS, payload: res.data.document });
    })
    .catch((err) => {
      dispatch({ type: types.CHEF_FAILURE });
    });
};

export const channelFilter = (payload) => (dispatch) => {
  dispatch({ type: types.SEARCH_FILTER, payload });
};

export const submitRating = (payload, header) => (dispatch) => {
  dispatch({ type: types.SUBMIT_RATING_REQUEST });

  return axios
    .post(
      `${process.env.REACT_APP_SERVER_ADDRESS}/app/rate/video`,
      payload,
      header
    )
    .then((res) => {
      return dispatch({
        type: types.SUBMIT_RATING_SUCCESS,
        payload: res.data,
        status: res.status,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.SUBMIT_RATING_FAILURE,
        status: err.response.status,
        mesg: err.response.data.mesg,
      });
    });
};

export const addComment = (payload, header) => (dispatch) => {
  dispatch({ type: types.COMMENT_REQUEST });
  return axios
    .post(
      `${process.env.REACT_APP_SERVER_ADDRESS}/app/add/comment`,
      payload,
      header
    )
    .then((res) => {
      return dispatch({
        type: types.COMMENT_SUCCESS,
        payload: res.data,
        staus: res.status,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.COMMENT_FAILURE,
        mesg: err.response.data.mesg,
        status: err.response.status,
      });
    });
};
