// import { Data } from "../data/Data";
import { VideoListCard } from "./VideoListCard";
import { useEffect } from "react";
import axios from "axios";
import { useReduce } from "../providers/useReducerProvider";

export const VideoList = () => {
  const { dispatch, state } = useReduce();

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/videos");

        dispatch({ type: "INITIALIZE_DATA", payload: data });

        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(state);
  return (
    <>
      <div className="product-list">
        {state.Data.map((item) => (
          <VideoListCard item={item} />
        ))}
      </div>
    </>
  );
};
