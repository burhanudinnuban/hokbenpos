import axios from 'axios';
import server from '../../../../constants/server';

export function addBook(data, token) {
  return axios.post(`${server.domain}/book/`, data);
}

export function getBook(data, token) {
  return axios.get(`${server.domain}/book?${data}`);
}
