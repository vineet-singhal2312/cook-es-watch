// import axios from "axios";

// export const unLikedVideo = async (item, token, dispatch) => {
//   try {
//     console.log("click");
//     const { data } = await axios.delete(
//       // "https://cook-es-watch.herokuapp.com/historyvideos"
//       "http://localhost:8000/likedvideos",

//       {
//         headers: { authorization: token },

//         data: { Id: item._id },
//       }
//     );

//     dispatch({ type: "SET_LIKEDVIDEOS", payload: data.result[0].videos });
//   } catch (error) {
//     console.log(error, "exios error");
//   }
// };
