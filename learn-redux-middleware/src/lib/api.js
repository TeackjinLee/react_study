import axios from "axios";
// 18.3.1.4 웹 요청 비동기 작업 처리하기
export const getPost = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);
