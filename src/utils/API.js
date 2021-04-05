/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const url = "https://randomuser.me/api/?results=80&?nat=nz";

export default {
  employeeSearch: function() {
    return axios.get(url);
  }
};
