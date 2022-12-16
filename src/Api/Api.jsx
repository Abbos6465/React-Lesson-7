import axios from "axios";

const BaseURL="https://restcountries.com/v2";

export const API = {
  getAll: async ()=> axios.get(`${BaseURL}/all`),
  getItem: async (title)=> axios.get(`${BaseURL}/name/${title}`)
};