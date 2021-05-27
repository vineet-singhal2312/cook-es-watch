import axios from "axios";

export const LikeVideo = async (videoId, setLikedVideosList, token) => {
  try {
    const { data } = await axios.post(
      // "https://cook-es-watch.herokuapp.com/historyvideos"
      "http://localhost:8000/likedvideos",

      {
        Id: videoId,
      },
      { headers: { authorization: token } }
    );

    console.log(data.result[0].videos.map((item) => item._id));
    setLikedVideosList(data.result[0].videos.map((item) => item._id));
  } catch (error) {
    console.log(error, "exios error");
  }
};

export const LikeVideoDelete = async (videoId, setLikedVideosList, token) => {
  try {
    console.log("click");
    const { data } = await axios.delete(
      // "https://cook-es-watch.herokuapp.com/historyvideos"
      "http://localhost:8000/likedvideos",

      {
        headers: { authorization: token },

        data: { Id: videoId },
      }
    );

    console.log(data.result[0].videos.map((item) => item._id));
    setLikedVideosList(data.result[0].videos.map((item) => item._id));
  } catch (error) {
    console.log(error, "exios error");
  }
};

export const PostInWatchLater = async (videoId, setWatchLaterList, token) => {
  try {
    const { data } = await axios.post(
      // "https://cook-es-watch.herokuapp.com/historyvideos"
      "http://localhost:8000/watchlatervideos",

      {
        Id: videoId,
      },
      { headers: { authorization: token } }
    );

    console.log(data.result[0].videos.map((item) => item._id));
    setWatchLaterList(data.result[0].videos.map((item) => item._id));
  } catch (error) {
    console.log(error, "exios error");
  }
};
export const WatchLaterVideoDelete = async (
  videoId,
  setWatchLaterList,
  token
) => {
  try {
    console.log("click");
    const { data } = await axios.delete(
      // "https://cook-es-watch.herokuapp.com/historyvideos"
      "http://localhost:8000/watchlatervideos",

      {
        headers: { authorization: token },

        data: { Id: videoId },
      }
    );

    console.log(data.result[0].videos.map((item) => item._id));
    setWatchLaterList(data.result[0].videos.map((item) => item._id));
  } catch (error) {
    console.log(error, "exios error");
  }
};
