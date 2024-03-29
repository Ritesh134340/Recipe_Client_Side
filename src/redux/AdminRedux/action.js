import axios from "axios";

import * as types from "./actionTypes";

export const getHomeData = () => (dispatch) => {
  dispatch({ type: types.GET_HOME_DATA_REQUEST });
  return axios
    .get(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/home/data`)
    .then((res) => {
      return dispatch({
        type: types.GET_HOME_DATA_SUCCESS,
        payload: res.data,
        status: res.status,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_HOME_DATA_FAILURE,
        status: err.response.status,
        mesg: err.response.data.mesg,
      });
    });
};

export const updateHomeData = (payload, header) => (dispatch) => {
  dispatch({ type: types.UPDATE_HOME_DATA_REQUEST });
  return axios
    .patch(
      `${process.env.REACT_APP_SERVER_ADDRESS}/admin/update/home/data`,
      payload,
      header
    )
    .then((res) => {
      return dispatch({
        type: types.UPDATE_HOME_DATA_SUCCESS,
        status: res.status,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.UPDATE_HOME_DATA_FAILURE,
        status: err.response.status,
        mesg: err.response.data.mesg,
      });
    });
};

export const addHomeData = (payload, header) => (dispatch) => {
  dispatch({ type: types.ADD_HOME_DATA_REQUEST });
  return axios
    .put(
      `${process.env.REACT_APP_SERVER_ADDRESS}/admin/add/carousel/data`,
      payload,
      header
    )
    .then((res) => {
      return dispatch({
        type: types.ADD_HOME_DATA_SUCCESS,
        payload: res.data,
        status: res.status,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.ADD_HOME_DATA_FAILURE,
        status: err.response.status,
        mesg: err.response.data.mesg,
      });
    });
};

export const deleteHomeData = (payload, header) => (dispatch) => {
  dispatch({ type: types.DELETE_HOME_DATA_REQUEST });
  return axios
    .delete(
      `${process.env.REACT_APP_SERVER_ADDRESS}/admin/delete/data/${payload.objectId}/image/${payload.imageId}`,
      header
    )
    .then((res) => {
      return dispatch({
        type: types.DELETE_HOME_DATA_SUCCESS,
        payload: res.data,
        status: res.status,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.DELETE_HOME_DATA_FAILURE,
        mesg: err.response.data.mesg,
        status: err.response.status,
      });
    });
};

export const updateHeroData = (payload, header) => (dispatch) => {
  dispatch({ type: types.UPDATE_HEROIMAGE_DATA_REQUEST });
  return axios
    .patch(
      `${process.env.REACT_APP_SERVER_ADDRESS}/admin/update/hero/image`,
      payload,
      header
    )
    .then((res) => {
      return dispatch({
        type: types.UPDATE_HEROIMAGE_DATA_SUCCESS,
        payload: res.data,
        status: res.status,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.UPDATE_HEROIMAGE_DATA_FAILURE,
        status: err.response.status,
        mesg: err.response.data.mesg,
      });
    });
};

export const getChef = (header) => (dispatch) => {
  dispatch({ type: types.CHEF_REQUEST });

  return axios
    .get(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/get/chef`, header)
    .then((res) => {
      return dispatch({ type: types.CHEF_SUCCESS, payload: res.data.document });
    })
    .catch((err) => {
      dispatch({ type: types.CHEF_FAILURE });
    });
};

export const searchFilter = (payload) => (dispatch) => {
  dispatch({ type: types.SEARCH_FILTER, payload });
};

export const searchVideoFilter = (payload) => (dispatch) => {
  dispatch({ type: types.SEARCH_VIDEO_FILTER, payload });
};

export const chefById = (payload, header) => (dispatch) => {
  dispatch({ type: types.GET_CHEF_WITH_ID_REQUEST });
  return axios
    .get(
      `${process.env.REACT_APP_SERVER_ADDRESS}/admin/chef/${payload}`,
      header
    )
    .then((res) => {
      return dispatch({
        type: types.GET_CHEF_WITH_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: types.GET_CHEF_WITH_ID_FAILURE });
    });
};

export const postVideo = (payload, header) => (dispatch) => {
  dispatch({ type: types.VIDEO_POST_REQUEST });

  return axios
    .post(
      `${process.env.REACT_APP_SERVER_ADDRESS}/admin/create/video`,
      payload,
      header
    )
    .then((res) => {
      return dispatch({
        type: types.VIDEO_POST_SUCCESS,
        payload: res.data,
        status: res.status,
        mesg: res.data.mesg,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.VIDEO_POST_FAILURE,
        status: err.response.status,
        mesg: err.response.data.mesg,
      });
    });
};

export const deleteVideo = (payload, header) => (dispatch) => {
  dispatch({ type: types.DELETE_VIDEO_REQUEST });
  return axios
    .delete(
      `${process.env.REACT_APP_SERVER_ADDRESS}/admin/delete/video/${payload}`,
      header
    )
    .then((res) => {
      return dispatch({
        type: types.DELETE_VIDEO_SUCCESS,
        payload: res.data,
        successCode: res.status,
      });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({
        type: types.DELETE_VIDEO_FAILURE,
        errCode: err.response.status,
        mesg: err.response.data.mesg,
      });
    });
};

export const getUser = (header) => (dispatch) => {
  dispatch({ type: types.GET_USER_REQUEST });
  return axios
    .get(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/users`, header)
    .then((res) => {
      return dispatch({
        type: types.GET_USER_SUCCESS,
        payload: res.data.userDetails,
      });
    })
    .catch((err) => {
      dispatch({ type: types.GET_USER_FAILURE });
    });
};

export const deleteUser = (id, header) => (dispatch) => {
  dispatch({ type: types.DELETE_USER_REQUEST });
  return axios
    .delete(
      `${process.env.REACT_APP_SERVER_ADDRESS}/admin/delete/user/${id}`,
      header
    )
    .then((res) =>
      dispatch({
        type: types.DELETE_USER_SUCCESS,
        payload: res.data,
        successCode: res.status,
      })
    )
    .catch((err) => {
      return dispatch({
        type: types.DELETE_USER_FAILURE,
        errorCode: err.response.status,
        mesg: err.response.data.mesg,
      });
    });
};

export const filterUsers = (payload) => (dispatch) => {
  dispatch({ type: types.FILTER_USERS, payload: payload });
};

export const getVideos = (sort, header) => (dispatch) => {
  dispatch({ type: types.GET_ALL_VIDEOS_AD_REQUEST });

  axios
    .get(
      `${process.env.REACT_APP_SERVER_ADDRESS}/admin/getall/videos?publishedAt=${sort}`,
      header
    )
    .then((res) => {
      return dispatch({
        type: types.GET_ALL_VIDEOS_AD_SUCCESS,
        payload: res.data.data,
        successCode: res.status,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_ALL_VIDEOS_AD_FAILURE,
        errCode: err.response.data.mesg,
      });
    });
};

export const filterAllVideosAdmin = (payload) => (dispatch) => {
  dispatch({ type: types.FILTER_ALL_VIDEOS, payload: payload });
};
