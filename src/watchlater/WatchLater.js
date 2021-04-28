import { WatchLaterCard } from "./WatchLatercard";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useReduce } from "../providers/useReducerProvider";
import { useEffect } from "react";
import axios from "axios";
export const WatchLater = () => {
  const { state, dispatch } = useReduce();
  // console.log(state);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/watchlatervideos");

      // res1 = data
      dispatch({ type: "SET_WATCHLATERVIDEOS", payload: data });
    })();
  }, []);

  return (
    <>
      <Header />
      <SideNav />

      <div className="watch-later-main">
        <div className="watch-later-list">
          {state.watchLater.map((item) => (
            <WatchLaterCard item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
