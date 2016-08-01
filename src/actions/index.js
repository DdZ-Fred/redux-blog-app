import axios from 'axios';

const API_KEY = '?key=1983753';
const BASE_URL = 'http://reduxblog.herokuapp.com/api';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';


export function fetchPosts() {
  const request = axios.get(`/posts${API_KEY}`, {
    baseURL: BASE_URL,
  });
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}


export function createPost(props) {
  const request = axios.post(`/posts${API_KEY}`, props, {
    baseURL: BASE_URL,
  });
  return {
    type: CREATE_POST,
    payload: request,
  };
}

export function fetchPost(id) {
  const request = axios.get(`/posts/${id}${API_KEY}`, {
    baseURL: BASE_URL,
  });

  return {
    type: FETCH_POST,
    payload: request,
  };
}
