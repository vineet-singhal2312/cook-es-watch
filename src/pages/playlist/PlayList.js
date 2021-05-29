import axios from "axios";
import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { SideNav } from "../../components/SideNav";
import { useLoader } from "../../pages/home/LoaderContextProvider";
import { useReduce } from "../../providers/useReducerProvider";
import { PlaylistCard } from "./PlaylistCard";
import { usePlaylist } from "../../providers/PlayListContextProvier";
import { ApiService } from "../../utils/ApiServices";
import { useAuth } from "../../providers/AuthProvider";
export const PlayList = () => {
  const { playlistState, playlistDispatch } = usePlaylist();
  const { setIsSideNav } = useReduce();
  const { isLoader, setIsLoader } = useLoader();
  const { token } = useAuth();
  useEffect(() => {
    (async function () {
      setIsLoader(true);

      try {
        // const { data } = await axios.get(
        //   "https://cook-es-watch.herokuapp.com/playlists"
        // );

        const data = await ApiService(
          "get",
          { headers: { authorization: token } },
          "playlists"
        );

        playlistDispatch({ type: "ADD_PLAYLIST", payload: data.result });
        setIsLoader(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [playlistDispatch, setIsLoader]);
  const closeSideNav = () => {
    document.getElementById("sideNav").style.width = "0%";
    setIsSideNav(false);
  };
  return (
    <>
      <Header />
      <SideNav />
      {playlistState.playlist.length === 0 ? (
        <div className="playlist-videos-main">
          {" "}
          <h1>You haven't add any playlist yet... </h1>
        </div>
      ) : (
        <div className="playlist-videos-main" onClick={() => closeSideNav()}>
          <h2 className="page-heading-playlist">PLAYLISTS</h2>
          {isLoader ? (
            <Loader />
          ) : (
            <div>
              {playlistState.playlist.map((item) => (
                <PlaylistCard key={item._id} playlist={item} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
