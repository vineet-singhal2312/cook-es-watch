import axios from "axios";
import { useEffect } from "react";
import { Header } from "../Header";
import { Loader } from "../Loader";
import { SideNav } from "../SideNav";
import { useLoader } from "../home/LoaderContextProvider";
import { useReduce } from "../../providers/useReducerProvider";
import { PlaylistCard } from "./PlaylistCard";
import { usePlaylist } from "./PlayListContextProvier";
export const PlayList = () => {
  const { playlistState, playlistDispatch } = usePlaylist();
  const { setIsSideNav } = useReduce();
  const { isLoader, setIsLoader } = useLoader();

  useEffect(() => {
    (async function () {
      setIsLoader(true);

      try {
        const { data } = await axios.get(
          "https://cook-es-watch.herokuapp.com/playlists"
        );

        playlistDispatch({ type: "ADD_PLAYLIST", payload: data });
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
