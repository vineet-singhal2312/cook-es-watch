import { LikedVideosCard } from "./LikedVideosCard";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useReduce } from "../providers/useReducerProvider";
import { useEffect } from "react";
import axios from "axios";
// import axios from "axios";
export const LikedVideos = () => {
  const { state, dispatch } = useReduce();

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("https://cook-es-watch.herokuapp.com/likedvideos");

        dispatch({ type: "SET_LIKEDVIDEOS", payload: data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <SideNav />

      <div className="like-videos-main">
        <div className="like-videos-list">
          {state.likedVideos.map((item) => (
            <LikedVideosCard item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
