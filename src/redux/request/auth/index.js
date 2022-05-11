import axios from "axios";
import server from "../../../../constants/server";

export function loginApi(data) {
  return axios.post(`${server.domain}/auth/login/`, data);
}

export function registerApi(data) {
  return axios.post(`${server.domain}/auth/register`, data);
}

export function updateProfileApi(data, token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return axios.patch(`${server.domain}/auth`, data);
}


