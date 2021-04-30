import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { SideNav } from "../components/SideNav";
import { usePlaylist } from "../playlist/PlayListContextProvier";
import { useReduce } from "../providers/useReducerProvider";
import { useLoader } from "./LoaderContextProvider";
import { VideoList } from "./VideoList";
export const Home = () => {
  // const { isLoader } = usePlaylist();
  const { isLoader } = useLoader();
  // const [loading, setLoading] = useState(false);
  const { dispatch, setIsSideNav } = useReduce();
  // useEffect(() => {
  //   setLoading(true);
  //   (async function () {
  //     try {
  //       const { data } = await axios.get(
  //         "https://cook-es-watch.herokuapp.com/videos"
  //       );

  //       dispatch({ type: "INITIALIZE_DATA", payload: data });
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);
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
