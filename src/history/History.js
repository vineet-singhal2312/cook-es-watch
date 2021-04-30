import { HistoryCard } from "./HistoryCard";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useReduce } from "../providers/useReducerProvider";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "./HistoryContextProvider";
export const History = () => {
  const { dispatch, setIsSideNav } = useReduce();
  const { setHistoryData, historyData } = useHistory();
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(
          "https://cook-es-watch.herokuapp.com/historyvideos"
        );
        setHistoryData(data);
      } catch (error) {
        console.log({ error });
      }
    })();
  }, [setHistoryData]);

  const closeSideNav = () => {
    document.getElementById("sideNav").style.width = "0%";
    setIsSideNav(false);
  };
  return (
    <>
      <Header />
      <SideNav />

      <div className="history-main" onClick={() => closeSideNav()}>
        <h2 className="page-heading-history">HISTORY</h2>
        <button
          className="history-clear-btn"
          onClick={() => dispatch({ type: "CLEAR_HISTORY" })}
        >
          Clear All
        </button>
        <div className="history-video-list">
          {historyData.map((item) => (
            <HistoryCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
