// import axios from 'axios'; axiosConfig.js
import axios from '../utils/axiosConfig'; 

import setAuthorizationToken from '../utils/setAuthorizationToken';
// import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post('/users/login', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    }).catch(err => {
			if (err.response) {
				// client received an error response (5xx, 4xx)
				console.log('Respuesta Error: ', err.response);
				//err.response.data.errors.map( item => console.log(item.msg) );
			} else if (err.request) {
				// client never received a response, or request never left
			} else {
				// anything else
			}
		})
  }
}