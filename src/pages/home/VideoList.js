import { VideoListCard } from "./VideoListCard";
// import { useEffect } from "react";
// import axios from "axios";
import { useReduce } from "../../providers/useReducerProvider";
// import { usePlaylist } from "../playlist/PlayListContextProvier";
// import { useLoader } from "./LoaderContextProvider";

export const VideoList = () => {
  const { state } = useReduce();

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
