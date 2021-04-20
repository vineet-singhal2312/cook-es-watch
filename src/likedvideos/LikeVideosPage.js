import { LikedVideosCard } from "./LikedVideosCard";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useReduce } from "../providers/useReducerProvider";
export const LikedVideos = () => {
  const { state, dispatch } = useReduce();

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
