import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useParams } from "react-router-dom";

import { useReduce } from "../providers/useReducerProvider";
import { usePlaylist } from "../playlist/PlayListContextProvier";
import { PlayListModal } from "./PlayListModal";
import { VideoCard } from "./VideoCard";
import { useEffect, useState } from "react";
import axios from "axios";

export const VideoPage = () => {
  const { state, dispatch } = useReduce();
  const { playlistState } = usePlaylist();
  const { videoId } = useParams();
  // const [item, setItem] = useState({});
  console.log(state);

  useEffect(() => {
    (async function () {
      try {
        // const res1 = await axios.get("/videos");
        // console.log(res1);
        const res2 = await axios.get(`/videos/${videoId}`);
        console.log(res2);
        dispatch({
          type: "INITIALIZE_PRODUCT",
          // payload1: res1.data,
          payload: res2.data,
        });
        // console.log(state);

        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(state);

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       // const { videoId } = useParams();
  //       // const { data } = await axios.get("/videos");
  //       // dispatch({ type: "INITIALIZE_DATA", payload: data });
  //       console.log(state);
  //       console.log("?/////");

  //       // const video = await state.Data.find((video) => videoId === video._id);
  //       const { data } = await axios.get(`/videos/${videoId}`);

  //       console.log(video);
  //       dispatch({
  //         type: "INITIALIZE_PRODUCT",
  //         payload: video,
  //       });
  //       // console.log(data);
  //       // setItem(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);
  // const { videoId } = useParams();
  // console.log(".......3");

  // const getVideoDetails = async (videoId) => {
  //   // try {
  //   const { data } = await axios.get(`/videos/${videoId}`);

  //   // dispatch({ type: "INITIALIZE_DATA", payload: data });
  //   console.log(".......1");

  //   return data;

  //   // setItem(data);
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  // };
  // // const item = getVideoDetails(videoId);
  console.log(state);
  // const item = getVideoDetails(videoId);

  const item = state.product;
  // console.log(".......2");

  return (
    <>
      <SideNav />
      <Header />
      {playlistState.isModal && <PlayListModal item={item} />}
      <div className="video-page-background">
        <div className="Vedio-page-content">
          <VideoCard item={item} />

          <div className="comment-card"></div>
        </div>
      </div>
    </>
  );
};
