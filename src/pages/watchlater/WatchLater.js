import { WatchLaterCard } from "./WatchLatercard";
import { Header } from "../../components/Header";
import { SideNav } from "../../components/SideNav";
import { useReduce } from "../../providers/useReducerProvider";
import { useEffect } from "react";
import axios from "axios";
import { Loader } from "../../components/Loader";
import { useLoader } from "../home/LoaderContextProvider";
import { useAuth } from "../../providers/AuthProvider";
export const WatchLater = () => {
  const { state, dispatch, setIsSideNav } = useReduce();
  const { isLoader, setIsLoader } = useLoader();
  const { token } = useAuth();

  useEffect(() => {
    setIsLoader(true);

    (async function () {
      // const { data } = await axios.get(
      //   "https://cook-es-watch.herokuapp.com/watchlatervideos"
      // );

      // dispatch({ type: "SET_WATCHLATERVIDEOS", payload: data });
      // setIsLoader(false);

      try {
        const { data } = await axios.get(
          // "https://cook-es-watch.herokuapp.com/watchlatervideos"
          "http://localhost:8000/watchlatervideos",
          { headers: { authorization: token } }
        );
        console.log(data);

        dispatch({
          type: "SET_WATCHLATERVIDEOS",
          payload: data.result[0].videos,
        });
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

      {isLoader ? (
        <Loader />
      ) : (
        <div className="watch-later-main" onClick={() => closeSideNav()}>
          <h2 className="page-heading-watchlater">WATCHLATER</h2>
          {state.watchLater.length === 0 ? (
            <div className="like-videos-main">
              {" "}
              <h1>You haven't add any video in watchlater yet... </h1>
            </div>
          ) : (
            <div className="watch-later-list">
              {state.watchLater.map((item) => (
                <WatchLaterCard key={item._id} item={item} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
