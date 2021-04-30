import { VideoListCard } from "./VideoListCard";
import { useEffect } from "react";
import axios from "axios";
import { useReduce } from "../providers/useReducerProvider";
import { usePlaylist } from "../playlist/PlayListContextProvier";
import { useLoader } from "./LoaderContextProvider";

export const VideoList = () => {
  const { dispatch, state } = useReduce();
  // const { setIsLoader } = usePlaylist();
  const { setIsLoader } = useLoader();





  useEffect(() => {
    setIsLoader(true);
    console.log("here");
    setTimeout(() => {
      setIsLoader(false);
    }, 2000);
    // (async function () {
    //   try {
    //     const { data } = await axios.get(
    //       "https://cook-es-watch.herokuapp.com/videos"
    //     );

    //     dispatch({ type: "INITIALIZE_DATA", payload: data });
    //     setIsLoader(false);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();
  }, []);

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
