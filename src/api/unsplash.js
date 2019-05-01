import axios from "axios";
const axiosKey =
  "Client-ID f69918c29b4628c42f80773c3098e1752756a497622aebe4fb954ab112844d58";

export default axios.create({
  baseUrl: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: axiosKey
  }
});
