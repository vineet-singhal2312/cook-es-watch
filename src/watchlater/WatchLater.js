import { WatchLaterCard } from "./WatchLatercard";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useReduce } from "../providers/useReducerProvider";
import { useEffect } from "react";
import axios from "axios";
import { Loader } from "../components/Loader";
import { useLoader } from "../home/LoaderContextProvider";
export const WatchLater = () => {
  const { state, dispatch, setIsSideNav } = useReduce();
  const { isLoader, setIsLoader } = useLoader();

  useEffect(() => {
    setIsLoader(true);

    (async function () {
      const { data } = await axios.get(
        "https://cook-es-watch.herokuapp.com/watchlatervideos"
      );

      dispatch({ type: "SET_WATCHLATERVIDEOS", payload: data });
      setIsLoader(false);
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
        {isLoader ? (
          <Loader />
        ) : (
          <div className="watch-later-list">
            {state.watchLater.map((item) => (
              <WatchLaterCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
