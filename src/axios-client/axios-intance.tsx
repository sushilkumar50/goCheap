import axios from "axios";

const BASEURL = "https://www.cheapshark.com/api/1.0";

export default axios.create({
  baseURL: BASEURL,
});
