import axios from "axios";

export default axios.create({
  baseURL: "internal-alb-app-dandi-1122638326.ap-southeast-2.elb.amazonaws.com/api",
  headers: {
    "Content-type": "application/json"
  }
});