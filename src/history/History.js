import { HistoryCard } from "./HistoryCard";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useReduce } from "../providers/useReducerProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "./HistoryContextProvider";
export const History = () => {
  const { state, dispatch } = useReduce();
  const { setHistoryData, historyData } = useHistory();
  // console.log(state);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/historyvideos");
        setHistoryData(data);
      } catch (error) {
        console.log({ error });
      }
    })();
  }, []);

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
