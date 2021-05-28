import axios from "axios";
import { ApiService } from "../../utils/ApiServices";

export const postVideo = async (
  videoId,
  setLikedVideosList,
  token,
  routeEndPoint
) => {
  try {
    console.log("awesome");
    const data = await ApiService(
      "post",

      {
        Id: videoId,
      },
      routeEndPoint,
      { headers: { authorization: token } }
    );

    console.log(data.result[0]?.videos.map((item) => item._id));
    setLikedVideosList(data.result[0]?.videos.map((item) => item._id));
  } catch (error) {
    console.log(error, "exios error");
  }
};

export const deleteVideo = async (
  videoId,
  setLikedVideosList,
  token,
  routeEndPoint
) => {
  try {
    const data = await ApiService(
      "delete",
      {
        headers: { authorization: token },

        data: { Id: videoId },
      },
      routeEndPoint
    );

    console.log(data.result[0].videos.map((item) => item._id));
    setLikedVideosList(data.result[0].videos.map((item) => item._id));
  } catch (error) {
    console.log(error, "exios error");
  }
};

// export const PostInWatchLater = async (videoId, setWatchLaterList, token) => {
//   try {
//     const { data } = await axios.post(
//       // "https://cook-es-watch.herokuapp.com/historyvideos"
//       "http://localhost:8000/watchlatervideos",

//       {
//         Id: videoId,
//       },
//       { headers: { authorization: token } }
//     );

//     console.log(data.result[0].videos.map((item) => item._id));
//     setWatchLaterList(data.result[0].videos.map((item) => item._id));
//   } catch (error) {
//     console.log(error, "exios error");
//   }
// };
// export const WatchLaterVideoDelete = async (
//   videoId,
//   setWatchLaterList,
//   token
// ) => {
//   try {
//     console.log("click");
//     const { data } = await axios.delete(
//       // "https://cook-es-watch.herokuapp.com/historyvideos"
//       "http://localhost:8000/watchlatervideos",

//       {
//         headers: { authorization: token },

//         data: { Id: videoId },
//       }
//     );

//     console.log(data.result[0].videos.map((item) => item._id));
//     setWatchLaterList(data.result[0].videos.map((item) => item._id));
//   } catch (error) {
//     console.log(error, "exios error");
//   }
// };
