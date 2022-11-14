import axios from "axios";

const GlobalApiService = {
  getPet: async () => {
    const res = await axios.get("api/pet");
    console.log("1", res);
    return res.data;
  },

  getHello: async () => {
    const res = await axios.get("api/hello");
    console.log("2", res);
    return res.data;
  },

  getBye: async () => {
    const res = await axios.get("api/bye");
    console.log("3", res);
    return res.data;
  },

  getGogog: async () => {
    const res = await axios.get("api/gogog");
    console.log("4", res);
    return res.data;
  },

  getPostData: async (data) => {
    const res = await axios.post("api/post", data);
    console.log("5", res);
    return res.data;
  },
};

export default GlobalApiService;
