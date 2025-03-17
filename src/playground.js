// const axios = require("axios");
import axios from "axios";

const url = "http://localhost:3000/jobs/1";

axios.get(url).then((response) => {
  console.log(response.data);
});
