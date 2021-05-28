import axios from "axios";

export const ApiService = async (type, body, routeEndPoint, headers) => {
  const { data } = await axios[type](
    // "https://cook-es-watch.herokuapp.com/historyvideos"
    `http://localhost:8000/${routeEndPoint}`,
    body,
    headers
  );
  return data;
};
