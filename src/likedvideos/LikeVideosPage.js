import { LikedVideosCard } from "./LikedVideosCard";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useReduce } from "../providers/useReducerProvider";
import { useEffect } from "react";
import axios from "axios";
import { Loader } from "../components/Loader";
import { useLoader } from "../home/LoaderContextProvider";
export const LikedVideos = () => {
  const { state, dispatch, setIsSideNav } = useReduce();
  const { isLoader, setIsLoader } = useLoader();

  useEffect(() => {
    (async function () {
      setIsLoader(true);

      try {
        const { data } = await axios.get(
          "https://cook-es-watch.herokuapp.com/likedvideos"
        );

        dispatch({ type: "SET_LIKEDVIDEOS", payload: data });
        setIsLoader(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const closeSideNav = () => {
    document.getElementById("sideNav").style.width = "0%";
    setIsSideNav(false);
  };
  return (
    <>
      <Header />
      <SideNav />

      <div className="like-videos-main" onClick={() => closeSideNav()}>
        <h2 className="page-heading-likedvideos">LIKED VIDEOS</h2>

        {isLoader ? (
          <Loader />
        ) : (
          <div className="like-videos-list">
            {state.likedVideos.map((item) => (
              <LikedVideosCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
