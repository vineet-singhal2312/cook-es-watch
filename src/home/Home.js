import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { SideNav } from "../components/SideNav";
import { usePlaylist } from "../playlist/PlayListContextProvier";
import { useReduce } from "../providers/useReducerProvider";
import { VideoList } from "./VideoList";
export const Home = () => {
  const { isLoader } = usePlaylist();

  const { setIsSideNav } = useReduce();

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
