/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const url = "https://randomuser.me/api/?results=12&?nat=au";

export default {
  employeeSearch: function() {
    return axios.get(url);
  }
};
