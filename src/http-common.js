import axios from "axios";

export default axios.create({
  baseURL: "https://gs://gler-yglt.appspot.com",
  headers: {
    "Content-type": "application/json"
  }
});
