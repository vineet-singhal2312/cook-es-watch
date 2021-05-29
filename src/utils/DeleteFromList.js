import axios from "axios";

export const DeleteFromList = async (
  item,
  token,
  dispatch,
  routeEndPoint,
  dispatchType
) => {
  try {
    console.log("chlta hai");
    const { data } = await axios.delete(
      `https://cook-es-watch.herokuapp.com/${routeEndPoint}`,
      // `http://localhost:8000/${routeEndPoint}`,

      {
        headers: { authorization: token },

        data: { Id: item._id },
      }
    );

    dispatch({ type: dispatchType, payload: data.result[0].videos });
  } catch (error) {
    console.log(error, "exios error");
  }
};