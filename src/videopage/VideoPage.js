import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useParams } from "react-router-dom";

import { useReduce } from "../providers/useReducerProvider";
import { usePlaylist } from "../playlist/PlayListContextProvier";
import { PlayListModal } from "./PlayListModal";
import { VideoCard } from "./VideoCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { PlayListAddModal } from "./PlayListAddModel";

export const VideoPage = () => {
  const { state, dispatch } = useReduce();
  const {
    playlistState,
    isPlayListVideoAddModel,
    playlistDispatch,
  } = usePlaylist();
  const { videoId } = useParams();

  console.log(state);

  useEffect(() => {
    (async function () {
      try {
        const res2 = await axios.get(
          `https://cook-es-watch.herokuapp.com/videos/${videoId}`
        );
        console.log(res2);
        dispatch({
          type: "INITIALIZE_PRODUCT",

          payload: res2.data,
        });

        playlistDispatch({
          type: "CLOSE_MODAL",
        });
        // console.log(state);

        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(state);

  console.log(state);

  const item = state.product;

  console.log(isPlayListVideoAddModel);
  return (
    <>
      <SideNav />
      <Header />
      {isPlayListVideoAddModel && <PlayListAddModal item={item} />}
      {playlistState.isModal && <PlayListModal item={item} />}
      <div className="video-page-background">
        <div className="Vedio-page-content">
          <VideoCard item={item} />

          {/* <div className="comment-card"></div> */}
        </div>
      </div>
    </>
  );
};
