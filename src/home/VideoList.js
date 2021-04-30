import { VideoListCard } from "./VideoListCard";
import { useEffect } from "react";
import axios from "axios";
import { useReduce } from "../providers/useReducerProvider";
import { usePlaylist } from "../playlist/PlayListContextProvier";

export const VideoList = () => {
  const { dispatch, state } = useReduce();
  const { setIsLoader } = usePlaylist();
  useEffect(() => {
    (async function () {
      try {
        // setIsLoader(true);

        const { data } = await axios.get(
          "https://cook-es-watch.herokuapp.com/videos"
        );

        dispatch({ type: "INITIALIZE_DATA", payload: data });
        // setIsLoader(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <>
      <div className="product-list">
        {state.Data.map((item) => (
          <VideoListCard key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};
