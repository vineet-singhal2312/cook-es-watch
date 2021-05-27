// import axios from "axios";

// export const DeleteFromWatchLater = async (item, token, dispatch, v) => {
//   try {
//     console.log(v);
//     const { data } = await axios.delete(
//       // "https://cook-es-watch.herokuapp.com/watchlatervideos"
//       "http://localhost:8000/watchlatervideos",

//       {
//         headers: { authorization: token },

//         data: { Id: item._id },
//       }
//     );

//     dispatch({ type: "SET_WATCHLATERVIDEOS", payload: data.result[0].videos });
//   } catch (error) {
//     console.log(error, "exios error");
//   }
// };
