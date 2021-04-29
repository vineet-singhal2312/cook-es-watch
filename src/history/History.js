import { HistoryCard } from "./HistoryCard";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useReduce } from "../providers/useReducerProvider";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "./HistoryContextProvider";
export const History = () => {
  const { dispatch } = useReduce();
  const { setHistoryData, historyData } = useHistory();
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("https://cook-es-watch.herokuapp.com/historyvideos");
        setHistoryData(data);
      } catch (error) {
        console.log({ error });
      }
    })();
  }, [setHistoryData]);

  return (
    <>
      <Header />
      <SideNav />

      <div className="history-main">
        <button
          className="history-clear-btn"
          onClick={() => dispatch({ type: "CLEAR_HISTORY" })}
        >
          Clear All
        </button>
        <div className="history-video-list">
          {historyData.map((item, idx) => (
            <HistoryCard item={item} idx={idx} />
          ))}
        </div>
      </div>
    </>
  );
};
