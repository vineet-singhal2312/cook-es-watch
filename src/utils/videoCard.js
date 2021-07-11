import { ApiService } from "./ApiServices";

export const postVideo = async (
  videoId,
  setLikedVideosList,
  token,
  routeEndPoint,
  setLoginStatus
) => {
  try {
    const data = await ApiService(
      "post",

      {
        Id: videoId,
      },
      routeEndPoint,
      { headers: { authorization: token } }
    );
    setLikedVideosList(data.result[0]?.videos.map((item) => item._id));
  } catch (error) {
    console.log(error, "exios error");
    setLoginStatus(true);
    setTimeout(() => {
      setLoginStatus(false);
    }, 3000);
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
