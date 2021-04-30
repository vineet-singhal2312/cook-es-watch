import { WatchLaterCard } from "./WatchLatercard";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useReduce } from "../providers/useReducerProvider";
import { useEffect } from "react";
import axios from "axios";
export const WatchLater = () => {
  const { state, dispatch, setIsSideNav } = useReduce();

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        "https://cook-es-watch.herokuapp.com/watchlatervideos"
      );

      dispatch({ type: "SET_WATCHLATERVIDEOS", payload: data });
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

      <div className="watch-later-main" onClick={() => closeSideNav()}>
        <h2 className="page-heading-watchlater">WATCHLATER</h2>

        <div className="watch-later-list">
          {state.watchLater.map((item) => (
            <WatchLaterCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
