import axios from "axios";

axios.interceptors.response.use(undefined, (error) => {
  if (error.message === "Network Error" && !error.response) {
    console.log("Network Error");
  }

  const { status } = error.response;

  if (status >= 400) {
    console.log("Server Error");
  }

  throw error;
});

const responseBody = (response) => response.data;

const request = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const Auctions = {
  //getData: () =>request.get("https://static.bidflyer.com.s3.amazonaws.com/promotional/test.json"),
  getData: () => request.get("auctions"),
};

export default { Auctions };
