import axios from "axios";
import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { SideNav } from "../../components/SideNav";
// import { usePlaylist } from "../playlist/PlayListContextProvier";
import { useReduce } from "../../providers/useReducerProvider";
import { useLoader } from "./LoaderContextProvider";
import { VideoList } from "./VideoList";
export const Home = () => {
  const { isLoader, setIsLoader } = useLoader();
  const { dispatch, setIsSideNav } = useReduce();
  useEffect(() => {
    setIsLoader(true);
    (async function () {
      try {
        const { data } = await axios.get(
          "https://cook-es-watch.herokuapp.com/videos"
        );

        dispatch({ type: "INITIALIZE_DATA", payload: data });
        setIsLoader(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, setIsLoader]);
  const closeSideNav = () => {
    document.getElementById("sideNav").style.width = "0%";
    setIsSideNav(false);
  };
  return (
    <>
      <Header />
      <SideNav />
      <div className="main" onClick={() => closeSideNav()}>
        {isLoader ? <Loader /> : <VideoList />}
      </div>
    </>
  );
};
