import axios from "axios";

const publicAxios = axios.create({
    baseURL: 'http://localhost/afnobackend/front/blogs',
  });


  export default publicAxios;

  